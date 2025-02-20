import { Router } from "express";
import furnitureService from "../services/furnitureService.js";
import { isAuth } from "../../middlewares/authMiddleware.js";

const furnitureController = Router();

furnitureController.get("/", (req, res) => {
    res.json([]);
  });

furnitureController.get("/:furnitureId", (req, res) => {
    res.json([]);
});

furnitureController.post("/", isAuth, async (req, res) => {
    const furnitureData = req.body;
    const userId = req.user.id
    const newFurniture = await furnitureService.createFurniture(furnitureData, userId);

    res.json(newFurniture);
});


furnitureController.put("/:furnitureId", (req, res) => {
    res.json([]);
});


furnitureController.delete("/:furnitureId", (req, res) => {
    res.json([]);
});

export default furnitureController;