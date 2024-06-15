import express from "express";
import Categories from "../models/categories.js";

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const productData = req.body
    const result = await Categories.create(productData);
    return res.status(201).json({
      category: result
    })
  } catch (error) {
    return res.status(500).json(error)
  }
})

export default router;