import { Router } from "express";
import furnitureService from "../services/furnitureService.js";
import { isAuth } from "../../middlewares/authMiddleware.js";

const furnitureController = Router();

furnitureController.get("/", async (req, res) => {
    const furnitures = await furnitureService.getAll();
     
    res.json(furnitures);
  });

furnitureController.get("/:furnitureId", async (req, res) => {
    const furnitureId = req.params.furnitureId;
    const furniture = await furnitureService.getOne(furnitureId);
    
        
    res.json(furniture);
});

furnitureController.post("/", isAuth, async (req, res) => {
    const furnitureData = req.body;
    const userId = req.user.id
    const newFurniture = await furnitureService.createFurniture(furnitureData, userId);

    res.json(newFurniture);
});


furnitureController.put("/:furnitureId", async (req, res) => {
    const furnitureId = req.params.furnitureId;
    const furnitureData = req.body;
    
    const updatedFurniture = await furnitureService.update(furnitureId, furnitureData);
    res.json(updatedFurniture);
});


furnitureController.delete("/:furnitureId", (req, res) => {
    res.json([]);
});

export default furnitureController;