import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import image from './zura.jpg'
import styled from 'styled-components'

import Button from './components/button'
import Input from './components/input'
import './App.css'
import CircularProgressbarComponent from './components/circular-progressbar/circular-progressbar-component'
import Slider from './components/slider-element/slider'
import images from './images'
import SwiperElement from "./components/swiper-element";

const todoItem = (handleUpdate, handleDelete) => todo => <Div key={todo.id}>
  <Span>{todo.name}</Span>
  <Button mission={() => handleUpdate(todo)} label={'Rename'} color={'#FFCC00'}/>
  <Button mission={() => handleDelete(todo)} label={'Delete'} color={'rgba(240, 52, 52, 1)'}/>
</Div>

const App = () => {
  const dispatch = useDispatch()
  const [newTodoName, setTodoName] = useState('')

  const todos = useSelector(state => state.todos.getTodos.response.data)
  const isPostingTodo = useSelector(state => state.todos.createTodo.isFetching)
  const isPostedTodo = useSelector(state => state.todos.createTodo.response.status === 200)
  const isReadingTodos = useSelector(state => state.todos.getTodos.isFetching)
  const isUpdatingTodo = useSelector(state => state.todos.updateTodo.isFetching)
  const isDeletingTodo = useSelector(state => state.todos.deleteTodo.isFetching)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({
      type: 'TODO_CREATE_REQUESTED',
      name: newTodoName
    })
  }

  const handleUpdate = todo => {
    const updatedTodoName = prompt(`What's the new name of todo: ${todo.name}`)
    if (!updatedTodoName) {
      return
    }
    dispatch({
      type: 'TODO_UPDATE_REQUESTED',
      id: todo.id,
      name: updatedTodoName
    })
  }

  const handleDelete = todo => {
    dispatch({
      type: 'TODO_DELETE_REQUESTED',
      id: todo.id
    })
  }

  useEffect(() => {
    dispatch({
      type: 'TODOS_GET_REQUESTED'
    })
  }, [])

  useEffect(() => {
    if (isPostedTodo) {
      setTodoName('')
    }
  }, [isPostedTodo])

  return (
    <div className="App">
      {/*<Slider slides={images} />*/}
      <SwiperElement/>
      <CircularProgressbarComponent
        width={'184px'}
        image={image}
        percentage={77}
        pathColor={'rgba(240, 52, 52, 1)'}
        trailColor={'#d6d6d6'}
      />
      <form onSubmit={handleSubmit}>
        <Input mission={e => setTodoName(e.target.value)} value={newTodoName}/>
        <Button label={'Add'}/>
      </form>
      <InfosDiv>
        {isReadingTodos && <h2>{todos.length ? 'Updating' : 'Fetching'} todos in progress...</h2>}
        {isPostingTodo && <h2>Posting todos in progress...</h2>}
        {isUpdatingTodo && <h2>Updating todos in progress...</h2>}
        {isDeletingTodo && <h2>Deleting todos in progress...</h2>}
      </InfosDiv>
      <div>{todos.map(todoItem(handleUpdate, handleDelete))}</div>
    </div>
  )
}

const Div = styled.div`
   display: block;
   width: 40%;
   margin: 10px auto;
   box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
   border-radius: 5px;
   padding: 15px;
`
const Span = styled.span`
   display: block;
   margin: 10px auto;
`

const InfosDiv = styled.div`
  position: fixed;
  right: 10px;
  top: 0;
  color: blue;
`

export default App
