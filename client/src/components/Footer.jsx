export default function Footer() {
    return (
        <footer className="bg-[#0A1A2F] border-t border-white/10 py-6 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
                <p className="text-gray-500 text-sm">© 2026 RedPulse. All rights reserved.</p>
                <div className="flex gap-6 text-gray-500 text-sm">
                    <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                </div>
            </div>
        </footer>
    );
}
