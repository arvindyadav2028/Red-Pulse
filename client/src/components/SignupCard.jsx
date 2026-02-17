export default function LoginCard(){
    return(
        <div className="w-[340px] p-8 rounded-2xl 
                    bg-slate-900/60 backdrop-blur-sm
                    text-white shadow-2xl">            
            <h2 className="text-2xl font-semibold text-center mb-6">
                Sign Up
            </h2>

            <div className="mb-4">
                <label className="text-sm">Email</label>
                <input 
                    type="email"
                    placeholder="Enter email"
                    className="w-full mt-1 p-3 rounded-lg bg-white text-black outline-none"
                />
            </div>

            <div className="mb-4">
                <label className="text-sm">Password</label>
                <input 
                    type="password"
                    placeholder="Enter password"
                    className="w-full mt-1 p-3 rounded-lg bg-white text-black outline-none"
                />
            </div>

            <div className="mb-4">
                <label className="text-sm">Password</label>
                <input 
                    type="password"
                    placeholder="Enter password"
                    className="w-full mt-1 p-3 rounded-lg bg-white text-black outline-none"
                />
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 
                            py-3 rounded-lg font-medium mt-2">
                Sign Up
            </button>
        </div>
    );
}