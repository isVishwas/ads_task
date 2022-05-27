import React from 'react'
import { Card } from 'react-bootstrap'

const Post = ({ post }) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <Card.Img src={post.image} variant='top' />
      

      <Card.Body>
          <Card.Title as='h5'>
            Title : {post.title}
          </Card.Title>

        <Card.Text as='h6'>
        Category : {post.category}
        </Card.Text>

        <Card.Text as='h6'> Price : ${post.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Post
