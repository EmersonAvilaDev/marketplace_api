import { Router } from "express";
import { createUser, deleteManyUser } from "./controller/UserController";
import { createAccess, getAllAccesses } from "./controller/AccessController";
import { createStore, getAllStore } from "./controller/StoreController";

export const router = Router();

            /* User */
router.post("/user", createUser);
router.delete("/delete-users", deleteManyUser);

            /* Access */
router.post("/access", createAccess);
router.get("/accesses", getAllAccesses);

            /* Store */
router.post("/store/:userId", createStore);
router.get("/stores", getAllStore);

