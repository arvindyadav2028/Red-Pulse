import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export function getPostLoginRoute(user) {
    if (!user.onboardingCompleted) return "/onboarding/role";
    switch (user.role) {
        case "donor":    return "/dashboard/donor";
        case "employee": return "/dashboard/staff";
        case "admin":    return "/dashboard/organization";
        default:         return "/onboarding/role";
    }
}

export function AuthProvider({ children }) {
    const [user, setUser]               = useState(null);
    const [accessToken, setAccessToken] = useState(() => localStorage.getItem("token"));
    const [loading, setLoading]         = useState(true);

    // Keep axios Authorization header in sync with token
    useEffect(() => {
        if (accessToken) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        } else {
            delete axios.defaults.headers.common["Authorization"];
        }
    }, [accessToken]);

    // Restore session on page reload
    useEffect(() => {
        const restore = async () => {
            if (!accessToken) { setLoading(false); return; }
            try {
                const { data } = await axios.get("/api/auth/get-me");
                setUser(data.user);
            } catch {
                // Access token expired — try refresh cookie
                try {
                    const { data } = await axios.post(
                        "/api/auth/refresh-token", {}, { withCredentials: true }
                    );
                    localStorage.setItem("token", data.accessToken);
                    setAccessToken(data.accessToken);
                    axios.defaults.headers.common["Authorization"] = `Bearer ${data.accessToken}`;
                    const meRes = await axios.get("/api/auth/get-me");
                    setUser(meRes.data.user);
                } catch {
                    _clear();
                }
            } finally {
                setLoading(false);
            }
        };
        restore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const _clear = () => {
        setUser(null);
        setAccessToken(null);
        localStorage.removeItem("token");
    };

    /** Call after login — returns the route the caller should navigate to */
    const login = (userData, token) => {
        setUser(userData);
        setAccessToken(token);
        localStorage.setItem("token", token);
        return getPostLoginRoute(userData);
    };

    /** Revoke refresh cookie + clear local state */
    const logout = async () => {
        try { await axios.post("/api/auth/logout", {}, { withCredentials: true }); } catch { /* ignore */ }
        _clear();
    };

    /** Re-fetch user from server (call after onboarding so role/flags update instantly) */
    const refreshUser = async () => {
        try {
            const { data } = await axios.get("/api/auth/get-me");
            setUser(data.user);
            return data.user;
        } catch {
            return null;
        }
    };

    return (
        <AuthContext.Provider value={{ user, accessToken, loading, login, logout, refreshUser, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
