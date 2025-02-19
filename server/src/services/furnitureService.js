import Furniture from "../models/Furniture.js"


const createFurniture = (furnitureData, userId) => {
   return Furniture.create({ ...furnitureData, creator: userId });
}

const furnitureService = {
    createFurniture
}

export default furnitureService;