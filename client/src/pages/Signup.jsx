
function Signup(){
 
    return(
        <section className="min-h-screen flex items-center justify-center bg-emerald-100">
            <div className="w-full max-w-sm border-2 border-b-emerald-600 rounded-2xl bg-white p-8 space-y-6">
                <h2 className="text-2xl font-bold text-emerald-500 text-center">
                    Sign Up
                </h2>

                <div className="flex flex-col space-y-1">
                     <label className="text-emerald-500 font-medium">Email</label>
                <input
                    type="email"
                    className="border rounded-lg px-3 py-2"
                    placeholder="you@example.com"
                />
                </div>

                <div className="flex flex-col space-y-1">
                    <label className="text-emerald-500 font-medium">Password</label>
                <input
                    type="password"
                    className="border rounded-lg px-3 py-2"
                    placeholder="••••••••"
                />
                </div>
                <div className="flex flex-col space-y-1">
                    <label className="text-emerald-500 font-medium">Confirm Password</label>
                <input
                    type="password"
                    className="border rounded-lg px-3 py-2"
                    placeholder="••••••••"
                />
                </div>

                <button className="w-full bg-emerald-700 text-white py-2 rounded-xl">
                    Sign Up
                </button>
            </div>
       </section>
    )

}
export default Signup