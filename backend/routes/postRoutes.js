import express from 'express'
const router = express.Router()
import {
  createPost,
  getPost
} from '../controllers/postController.js'
import { protect } from '../middleware/authMiddleware.js'
  
  
  router
  .route('/create').post(protect,createPost)
  router
  .route('/:id').get(protect,getPost)

  export default router