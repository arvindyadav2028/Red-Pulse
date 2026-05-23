# RedPulse 🩸

A full-stack blood management platform connecting **donors**, **staff**, and **organization admins** (hospitals & blood banks).

---

## Tech Stack

| Layer    | Technology                              |
|----------|-----------------------------------------|
| Client   | React 18 · Vite · Tailwind CSS v3       |
| Server   | Node.js 18+ · Express 5 · MongoDB / Mongoose |
| Auth     | JWT (access 15 min) + Refresh token (7 day httpOnly cookie) |
| Uploads  | Multer · local `uploads/` directory     |
| Email    | Nodemailer + Gmail OAuth2               |

---

## Quick Start

### 1. Server

```bash
cd server
cp .env.example .env        # fill in MONGO_URI + JWT_SECRET at minimum
npm install
npm run dev                 # node --watch index.js  (port 3000)
```

### 2. Client

```bash
cd client
npm install
npm run dev                 # Vite dev server  (port 5173)
```

Vite proxies `/api` and `/uploads` to `localhost:3000` automatically.

---

## Environment Variables

Copy `server/.env.example` → `server/.env` and fill in:

| Variable | Required | Description |
|---|---|---|
| `MONGO_URI` | ✅ | MongoDB connection string |
| `JWT_SECRET` | ✅ | Long random string (≥ 64 chars) |
| `PORT` | — | Default `3000` |
| `NODE_ENV` | — | `development` or `production` |
| `CLIENT_ORIGIN` | — | Frontend URL for CORS in production |
| `GOOGLE_CLIENT_ID` | — | Gmail OAuth2 (OTP emails) |
| `GOOGLE_CLIENT_SECRET` | — | Gmail OAuth2 |
| `GOOGLE_REFRESH_TOKEN` | — | Gmail OAuth2 |
| `GOOGLE_USER` | — | Gmail address |

> **Without email credentials**, OTPs are printed to the server console so you can still develop locally.

---

## User Flow

```
Signup → Verify Email (OTP) → Login
   ↓
Check onboardingCompleted?
   ├─ false → /onboarding/role  (one-time role selection)
   │     ├─ Donor    → fill profile → /dashboard/donor
   │     ├─ Employee → fill profile → /dashboard/staff
   │     └─ Admin    → confirm role → choose org type
   │                               → register hospital/blood bank
   │                               → /dashboard/organization
   │
   └─ true  → go directly to role dashboard
```

---

## API Routes

### Auth  `/api/auth`

| Method | Path | Auth | Description |
|---|---|---|---|
| POST | `/register` | — | Create account |
| POST | `/verify-email` | — | Verify OTP |
| POST | `/resend-otp` | — | Resend OTP |
| POST | `/login` | — | Login, returns accessToken + sets refresh cookie |
| POST | `/refresh-token` | — | Rotate refresh token |
| GET  | `/get-me` | Bearer | Current user |
| POST | `/logout` | Bearer | Revoke current session |
| POST | `/logout-all` | Bearer | Revoke all sessions |

### Profile  `/api/profile`

| Method | Path | Role | Description |
|---|---|---|---|
| GET  | `/me` | any | Get role-specific profile |
| POST | `/become-donor` | user | Register as donor |
| POST | `/become-employee` | user | Register as staff |
| POST | `/become-admin` | user | Grant admin role |
| POST | `/register-hospital` | admin | Register a hospital |
| POST | `/register-bloodbank` | admin | Register a blood bank |

### Health
`GET /api/health` → `{ status: "ok" }`

---

## Production Checklist

- [ ] Set `NODE_ENV=production` in server env
- [ ] Set `CLIENT_ORIGIN` to your deployed frontend URL
- [ ] Use a strong, unique `JWT_SECRET` (openssl rand -hex 64)
- [ ] Configure Gmail OAuth2 for real OTP emails
- [ ] Mount `uploads/` directory on persistent storage (e.g. S3 in prod)
- [ ] Enable HTTPS — the refresh token cookie uses `Secure` in production
- [ ] Configure MongoDB Atlas (or equivalent) for production DB
