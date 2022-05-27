import mongoose from 'mongoose'


const userSchema = mongoose.Schema(
  {
      userId:{
            type:String,
      },
        title: {
          type: String,
        //   required: true,
        },
        image: {
          type: String,
        //   required: true,
        },
        category: {
          type: String,
        //   required: true,
        },
        price: {
          type: String,
        //   required: true,
        }
  },
  {
    timestamps: true,
  }
)



const Post = mongoose.model('Post', userSchema)

export default Post
