import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


const AddTodo = ({addTodo})=>{

    const [title, setTitle] = useState('');
    const [description , setDescription] = useState('');

    const addTodoHandler = e =>{
        e.preventDefault();
        addTodo({
            title,
            description,
            complete:false
        });

        setTitle('');
        setDescription('');
    }

    return (
      <Form>
          <Form.Group controlId='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control type='text' placeholder='Enter Todo Title' onChange={e=> setTitle(e.target.value)} value={title}/> 
          </Form.Group>

          <Form.Group controlId='description'>
            <Form.Label>Description</Form.Label>
            <Form.Control type='text' placeholder='Enter Description'onChange={e=> setDescription(e.target.value)} value={description}/> 
          </Form.Group>

          <Button variant='primary' type='submit' className='my-2' onClick={addTodoHandler}>Add</Button>
      </Form>
    )
}


export default AddTodo;