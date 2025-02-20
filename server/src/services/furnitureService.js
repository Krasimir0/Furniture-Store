import Furniture from "../models/Furniture.js"

const getAll = () => {
    return Furniture.find({});
}

const createFurniture = (furnitureData, userId) => {
   return Furniture.create({ ...furnitureData, _ownerId: userId });
}

const getOne = (furnitureId) => {
    return Furniture.findById(furnitureId);
}

 const update = ( furnitureId, furnitureData) => {
    return Furniture.findByIdAndUpdate(furnitureId, furnitureData);
 }

const furnitureService = {
    createFurniture,
    getAll,
    getOne, 
    update
}

export default furnitureService;