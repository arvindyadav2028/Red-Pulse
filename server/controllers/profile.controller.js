export const becomeDonor = async(req,res)=>{

    try{

        const userId = req.user._id;

        const existingProfile =
        await donorModel.findOne({ userId });

        if(existingProfile){
            return res.status(409).json({
                message:"Donor profile already exists"
            });
        }

        const donor =
        await donorModel.create({
            userId,
            ...req.body
        });

        await userModel.findByIdAndUpdate(
            userId,
            {
                role:"donor"
            }
        );

        return res.status(201).json({
            success:true,
            donor
        });

    }catch(error){

        return res.status(500).json({
            message:error.message
        });
    }
}
