import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Post from '../components/Post'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getPost } from '../actions/adActions'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const postList = useSelector((state) => state.postList)
  const {userInfo} = useSelector((state) => state.userLogin)

  const { loading, error, posts } = postList
  console.log("proidyuct -----",posts)

  useEffect(() => {
    dispatch(getPost(userInfo))
  }, [dispatch])



  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        
          userInfo ? 
          <>
          <h1>Latest ADS</h1>
          <Row>
          {posts && posts.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>

              <Post post={product} />
            </Col>
          ))}
        </Row></>: <Row><h5>Please! Login to see the ads</h5></Row>
        
      )}
    </>
  )
}

export default HomeScreen
