import React from 'react';
import { loadLists } from '../../services/api';
import { Container } from './styles';
import List from '../List/index';
import { DragDropContext } from 'react-beautiful-dnd'
import { useState } from 'react';
import Modal from '../Modal';
import { MdAdd } from 'react-icons/md';
import { useForm } from "react-hook-form";
import { v4 as uuid } from 'uuid';

const lists = loadLists();

export default function Board() {

  const [taskList, setTasks] = useState(lists);
  const [isModalOpened, setIsModalOpened] = useState(false);

  function onDragEnd(val) {
    console.log(val);
 
    const { draggableId, source, destination } = val;

    const [sourceGroup] = taskList.filter(
      column => column.title === source.droppableId
    );

  
    const [destinationGroup] = destination
      ? taskList.filter(column => column.title === destination.droppableId)
      : { ...sourceGroup };

    //console.log( [destinationGroup])

 
    const [movingTask] = sourceGroup.cards.filter(t => t.id.toString() === draggableId);

    const newSourceGroupTasks = sourceGroup.cards.splice(source.index, 1);
    const newDestinationGroupTasks = destinationGroup.cards.splice(
      destination.index,
      0,
      movingTask
    );


    const newTaskList = taskList.map(column => {
      if (column.title === source.title) {
        return {
          title: column.title,
          cards: newSourceGroupTasks
        };
      }
      if (column.title === destination.title) {
        return {
          title: column.title,
          cards: newDestinationGroupTasks
        };
      }
      return column;
    });
    setTasks(newTaskList);
  }

  function newTask(task){
    
    let newList = taskList;

    newList = [
      ...taskList,
      taskList[0].cards=[
        ...taskList[0].cards,
        task
      ] 
    ]

    setTasks(newList);
  }

  function onSubmit(dataTask){
    const objeto = {
      id: uuid(),
      content: dataTask.content,
      labels: [dataTask.color],
      user: 'https://api.dicebear.com/5.x/bottts/svg?seed=Scooter'
    }

    newTask(objeto);
    reset();
    setIsModalOpened(false);
  }

  const { register, reset, handleSubmit } = useForm();


  return (
    <Container>
      <DragDropContext  onDragEnd={onDragEnd}>   
        <button type='button' onClick={() => setIsModalOpened(true)}>
          <MdAdd size={24} color="#FFF"/>
        </button>
        <Modal isOpened={isModalOpened} onClose={() => setIsModalOpened(false)}>
          <form onSubmit={handleSubmit(onSubmit)} className="login-form">
              <label>Descrição da tarefa</label>
              <textarea  {...register("content")} required={true} rows="4" maxLength={95}/>
              <label >Cor da label</label>
              <input  {...register("color")} type="color" />
            <button>Criar</button>
          </form>
        </Modal>
        {lists.map(list =>  <List key={list.title} data={list} /> )}       
      </DragDropContext>    
    </Container>
  );

}
