const features = [
    {
        icon: "📅",
        title: "Smart Donation Scheduling",
        description: "Ensures donors are contacted at the right time — safely, reliably, and within WHO-recommended intervals.",
    },
    {
        icon: "📊",
        title: "Donor Health Dashboard",
        description: "Tracks donation history, hemoglobin eligibility status, next eligible dates, and earned badges.",
    },
    {
        icon: "🧠",
        title: "Analytics & Insights",
        description: "Predictive analytics for administrators — forecast shortages, track trends, and act before a crisis.",
    },
    {
        icon: "🤝",
        title: "Community Engagement",
        description: "Form Donor Circles with colleges, workplaces, or local clubs. Drive collective impact.",
    },
    {
        icon: "🔌",
        title: "Public API",
        description: "Allows hospitals, ambulances, and NGOs to integrate directly with the RedPulse network.",
    },
    {
        icon: "🗺️",
        title: "Live Blood Inventory Map",
        description: "Interactive heatmap showing real-time blood stock availability across registered centres.",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 px-6 bg-gradient-to-b from-[#F4F9FF] to-white w-full">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-red-600 text-sm font-semibold tracking-widest uppercase">Platform</span>
                    <h2 className="text-[#0d1c35] text-4xl md:text-5xl font-bold mt-2">What is RedPulse?</h2>
                    <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                        Everything needed to manage blood donation at scale — for donors, staff, and administrators.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((f) => (
                        <div
                            key={f.title}
                            className="p-8 rounded-2xl border border-blue-100 bg-white hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
                        >
                            <span className="text-3xl">{f.icon}</span>
                            <h3 className="text-lg font-bold text-[#0d1c35] mt-4 mb-2">{f.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">{f.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
