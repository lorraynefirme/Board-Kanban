import React from 'react';
import { Container } from './styles';
import Card from '../Card'
import { Droppable } from "react-beautiful-dnd";

export default function List({ data }) {
  return (
    <Container done={data.done}>
      <Droppable droppableId={data.title}>
      {provided => (
      <div
      {...provided.droppableProps}
      ref={provided.innerRef}
      >

      <header>
        <h2>{data.title}</h2>
    
      </header>

    
      <ul>
        {data.cards.map((card, index) =>  <Card key={card.id} data={card} index={index}/> )} 
      </ul>

      {provided.placeholder}
      </div>
      )}

      </Droppable>
    </Container>
  )
}
