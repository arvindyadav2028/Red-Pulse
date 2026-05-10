import roleGuard from "../middleware/roleGuard.js";
import { ROLES } from "../constants/roles.js";

router.get(
    "/inventory",
    authenticate,
    roleGuard(
        ROLES.ADMIN,
        ROLES.BLOODBANK
    ),
    inventoryController
);