export default function Contact() {
    return (
        <section id="contact" className="bg-[#0A1A2F] w-full py-16">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <h2 className="text-4xl font-bold text-white mb-2">Contact us</h2>
                <p className="text-blue-200 mt-2 mb-8">Reach out to us. We're listening.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { label: "Email", value: "redpulse@gmail.com", icon: "✉️" },
                        { label: "Phone", value: "+91-9002486537", icon: "📞" },
                        { label: "Address", value: "Kalyan Singh Chowk, New Delhi — 110062", icon: "📍" },
                    ].map((item) => (
                        <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-5">
                            <span className="text-2xl">{item.icon}</span>
                            <p className="text-white/50 text-xs mt-2 uppercase tracking-wide">{item.label}</p>
                            <p className="text-blue-200 font-medium mt-1">{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
