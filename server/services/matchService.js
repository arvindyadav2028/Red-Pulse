
// import Donor from "../models/Donor";
// //const Request=require('../models/RequestLog')

// const findMatchingDonors =  async function findMatchingDonors(request){
//     try{
//         const {requiredBloodType, location}=request;
        
//         if (!location || !location.coordinates) {
//             throw new Error("Invalid request location");
//         }

//         const donors=await Donor.find({
//             bloodGroup: requiredBloodType,
//             status: 1,
//             nextEligibleDate: { $lte: new Date() },
//             location: {
//                 $near: {
//                     $geometry: {
//                         type: "Point",
//                         coordinates: location.coordinates
//                     },
//                     $maxDistance: 20000
//                 }
//             }
//         })
//         .limit(10);
        
//         return donors; 

//     }catch(err){
//   console.error("MatchService Error:", err);
//     throw err;
//     }
// }
// export default findMatchingDonors;



//=====================================================Optimized======================================
// Optimized code using
//"Implemented a dynamic geospatial matching system with radius expansion, scoring based on distance, 
//eligibility, and urgency, and prioritized the most relevant donors using a ranking algorithm."

import Donor from "../models/Donor";

const MAX_RESULTS = 10;
const INITIAL_RADIUS = 10000; // 10km
const MAX_RADIUS = 50000; // 50km

const findMatchingDonors = async (request) => {
  try {
    const {
      requiredBloodType,
      location,
      urgencyLevel = 3,
    } = request;

    if (!location || !location.coordinates) {
      throw new Error("Invalid request location");
    }

    let radius = INITIAL_RADIUS;
    let donors = [];

    // Expand search radius if no donors found
    while (donors.length === 0 && radius <= MAX_RADIUS) {
      donors = await Donor.find({
        bloodGroup: requiredBloodType,
        status: 1,
        nextEligibleDate: { $lte: new Date() },
        location: {
          $near: {
            $geometry: {
              type: "Point",
              coordinates: location.coordinates,
            },
            $maxDistance: radius,
          },
        },
      }).limit(50); // fetch more for scoring

      radius += 10000; // increase by 10km
    }

    // No donors found
    if (!donors.length) {
      return [];
    }

    // SCORING SYSTEM
    const scoredDonors = donors.map((donor) => {
      let score = 0;

      // 1️⃣ Distance score (closer = better)
      if (donor.location?.coordinates) {
        const distance = calculateDistance(
          location.coordinates,
          donor.location.coordinates
        );
        score += Math.max(0, 50 - distance); // closer gets higher score
      }

      // 2️⃣ Eligibility score (recently eligible = better)
      const daysSinceEligible =
        (Date.now() - new Date(donor.nextEligibleDate)) / (1000 * 60 * 60 * 24);

      score += Math.min(20, daysSinceEligible);

      // 3️⃣ Urgency boost
      score += urgencyLevel * 5;

      return { donor, score };
    });

    // 🔥 Sort by best match
    scoredDonors.sort((a, b) => b.score - a.score);

    // ✅ Return top results
    return scoredDonors.slice(0, MAX_RESULTS).map((d) => d.donor);

  } catch (err) {
    console.error("MatchService Error:", err);
    throw err;
  }
};

///////////////////////////////////////////////////////////
// Distance Calculator (Haversine Formula)
///////////////////////////////////////////////////////////
function calculateDistance([lon1, lat1], [lon2, lat2]) {
  const R = 6371; // km
  const toRad = (val) => (val * Math.PI) / 180;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // distance in km
}

export default findMatchingDonors;