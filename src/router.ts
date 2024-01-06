import { Router } from "express";
import { createUser, deleteManyUser, getAllUsers, getUniqueUser } from "./controller/UserController";
import { createAccess, getAllAccesses } from "./controller/AccessController";
import { createStore, getAllStore } from "./controller/StoreController";
import { createProduct } from "./controller/ProductsController";
import { signIn } from "./controller/sessionController";
import { authMiddleware } from "./middlewares/auth.middleware";

export const router = Router();

/* User */
router.post("/user", createUser);
router.post("/sign-in", signIn);
router.delete("/delete-users", authMiddleware(["admin"]), deleteManyUser);
router.get("/get-all-users", authMiddleware(["admin"]), getAllUsers)
router.get("/get-unique-user", authMiddleware(["admin", "vendedor", "comprador"]), getUniqueUser);

/* Access */
router.post("/access",authMiddleware(["admin"]), createAccess);
router.get("/accesses", authMiddleware(["admin", "vendedor"]), getAllAccesses);

/* Store */
router.post("/store/:userId",authMiddleware(["admin", "vendedor"]), createStore);
router.get("/stores", getAllStore);

/* Products */
router.post("/product/:storeId", createProduct);
