import { Router } from "express";
import { createUser, deleteManyUser, getAllUsers } from "./controller/UserController";
import { createAccess, getAllAccesses } from "./controller/AccessController";
import { createStore, getAllStore } from "./controller/StoreController";
import { createProduct } from "./controller/ProductsController";

export const router = Router();

/* User */
router.post("/user", createUser);
router.delete("/delete-users", deleteManyUser);
router.get("/get-all-users", getAllUsers)
/* Access */
router.post("/access", createAccess);
router.get("/accesses", getAllAccesses);

/* Store */
router.post("/store/:userId", createStore);
router.get("/stores", getAllStore);

/* Products */
router.post("/product/:storeId", createProduct);
