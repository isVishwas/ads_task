import asyncHandler from 'express-async-handler'
import Post from '../models/postModel.js'


const getPost = asyncHandler(async (req, res) => {
  const list = await Post.find({'userId':req.params.id})
  res.json(list)
})


const createPost = asyncHandler(async (req, res) => {

  const {id,title,category,price,image} = req.body;
  console.log('req----------',req.body)
  
  const post = Post.create({
    userId:id,
    title,
    category,
    price,
    image
  })
  if (post) {
    res.status(201).json({
      post
    })
  } else {
    res.status(400)
    throw new Error('Unable to create post')
  }
 
})


export {
  getPost,
  createPost
}
