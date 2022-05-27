import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer';
import axios from 'axios';
import { createPost } from '../actions/adActions'


const PostScreen = ({ match, history }) => {

    const [title,setTitle] = useState('');
    const [category,setCategory] = useState('');
    const [price,setPrice] = useState('');
    const [image,setImage] = useState('');
    const [uploading, setUploading] = useState(false);
    const dispatch = useDispatch();

    const {userInfo} = useSelector((state) => state.userLogin)


    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        setUploading(true);
        try {
            const config = {
                headers: { 'Content-Type': 'multipart/form-data' }
            }

            const { data } = await axios.post('/api/upload', formData, config);
            setImage(data);
            setUploading(false);
        } catch (error) {
            console.error(error)
            setUploading(false);

        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createPost( userInfo._id, title, category, price, image ))
        history.push('/')
    }

    return (
        <>
            <Link to='/' className='btn btn-light my-3'>
                Go Back
            </Link>
            <FormContainer>
                <h1>Create New Ad</h1>
                <Form onSubmit={submitHandler}>
                                <Form.Group controlId='name'>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type='text'
                                        placeholder='Enter title'
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group controlId='price'>
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        type='number'
                                        placeholder='Enter Price'
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>

                                <Form.Group controlId='category'>
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control
                                        type='text'
                                        placeholder='Enter Category'
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    ></Form.Control>
                                </Form.Group>

                                <Form.Group controlId='image'>
                                    <Form.Label>Image</Form.Label>
                                    <Form.File id="image-file" label="Choose File" custom onChange={uploadFileHandler}></Form.File>
                                    {uploading && <Loader />}
                                </Form.Group>

                                <Button type='submit' variant='primary'>
                                    Update
                            </Button>
                            </Form>
            </FormContainer>
        </>
    )
}

export default PostScreen
