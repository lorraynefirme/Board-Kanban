import React from 'react';
import { Container, Label } from './styles';
import  {Draggable} from "react-beautiful-dnd";


export default function Card({ data, index }) {
  return (
    < >
      <Draggable key={data.id} draggableId={data.id.toString()} index={index}>
      {provided => (

        <Container 
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        
        >  

        <header>
          {data.labels.map(label => <Label key={label} color={label} />)}
          
        </header>
        <p>{data.content}</p>
        {data.user && (<img src={data.user} alt="avatar" />)}

        </Container>
        )}

       </Draggable>
    </>
  )
}
