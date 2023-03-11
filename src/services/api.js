import { v4 as uuid } from 'uuid';

export function loadLists() {
    return [
      { 
        title: 'Tarefas', 
        creatable: true,
        cards: [
          {
            id:  uuid(),
            content: 'Estudar React',
            labels: ['#7159c1'],
            user: 'https://api.dicebear.com/5.x/bottts/svg?seed=Scooter'
          },
          {
            id:  uuid(),
            content: 'Estudar CSS',
            labels: ['#7159c1'],
            user: 'https://api.dicebear.com/5.x/bottts/svg?seed=Scooter'
          },
          {
            id: uuid(),
            content: 'Ir na academia',
            labels: ['#7159c1'],
            user: 'https://api.dicebear.com/5.x/bottts/svg?seed=Bandit'
          },
        ]
      },
      { 
        title: 'Fazendo', 
        creatable: false,
        cards: [
          {
            id: uuid(),
            content: 'Estudar NodeJS',
            labels: [],
            user: 'https://api.dicebear.com/5.x/bottts/svg?seed=Scooter'
          }
        ]
      },
      { 
        title: 'Pausado', 
        creatable: false,
        cards: [
           {
            id: uuid(),
            content: 'Ler artigo',
            labels: [],
          },
         
        ]
      },
      { 
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: uuid(),
            content: 'Estudar HTML',
            labels: [],
          },
       
        ]
      },
    ];
  }