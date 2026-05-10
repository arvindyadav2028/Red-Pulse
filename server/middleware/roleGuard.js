//for like who can access what like donor can only acces hi part not hospital employee data or inventory data
const roleGuard = (allowedRoles)=>{
    return (req,res,next)=>{
            const roles=Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];

            if(!req.user){
                return res.status(401).json({ message: "Not authenticated" })
            }
            if(!roles.includes(req.user.role)){
                return res.status(403).json({ message: "Access Denied" })
            }
            next();
    }
}
export default roleGuard;