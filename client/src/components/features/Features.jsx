function Features() {
  return (
    <section className=" py-24 px-6 mt-10 border w-screen border-blue-100  bg-linear-to-b from-[#F4F9FF] via-[#EEF6FF] to-white">
      
      {/* Section Heading */}
      <h2 className="text-[rgb(13,28,53)] text-5xl font-bold text-center mb-16">
        What is RedPulse?
      </h2>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Card 1 */}
        <div className="p-8 rounded-xl border-2 border-blue-300 hover:border-blue-500 bg-blue-100 hover:shadow-lg hover:scale-105 
transition-all duration-300 cursor-pointer">

          <h3 className="text-xl font-bold text-[rgb(13,28,53)] mb-4" >
      
            Smart Donation Scheduling 
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Ensures donors are contacted at the right time—safely and reliably.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-8 rounded-xl border-2 border-blue-300 hover:border-blue-500 bg-blue-100 hover:shadow-lg hover:scale-105 
transition-all duration-300 cursor-pointer">
          <h3 className="text-xl font-bold text-[rgb(13,28,53)] mb-4">
            Donor Health Dashboard
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Tracks donation history, hemoglobin levels, and eligibility status.<br></br>
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-8 rounded-xl border-2 border-blue-300 hover:border-blue-500 bg-blue-100 hover:shadow-lg hover:scale-105 
transition-all duration-300 cursor-pointer">
          <h3 className="text-xl font-bold text-[rgb(13,28,53)] mb-4">
           Analytics & Insights Panel
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Provides predictive analytics for hospital administrators:-
          </p>
        </div>

        {/* Card 4 */}
       <div className="p-8 rounded-xl border-2 border-blue-300 hover:border-blue-500 bg-blue-100 hover:shadow-lg hover:scale-105 
transition-all duration-300 cursor-pointer">
          <h3 className="text-xl font-bold text-[rgb(13,28,53)] mb-4">
           Community Engagement
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Lets donors form Donor Circles (college groups, workplaces, local clubs).
          </p>
        </div> 

        {/* Card 5 */}
         <div className="p-8 rounded-xl border-2 border-blue-300 hover:border-blue-500 bg-blue-100 hover:shadow-lg hover:scale-105 
transition-all duration-300 cursor-pointer">
          <h3 className="text-xl font-bold text-[rgb(13,28,53)] mb-4">
           Public API for Integration
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Allows hospitals, ambulances, and NGOs to integrate directly.
          </p>
        </div>  

        {/* Card 6 */}
        <div className="p-8 rounded-xl border-2 border-blue-300 hover:border-blue-500 bg-blue-100 hover:shadow-lg hover:scale-105 
transition-all duration-300 cursor-pointer">
          <h3 className="text-xl font-bold text-[rgb(13,28,53)] mb-4">
          Live Blood Inventory Heatmap
          </h3>
          <p className="text-gray-600 leading-relaxed">
         Interactive map view showing real-time blood stock availability.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Features;
