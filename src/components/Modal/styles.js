import styled from 'styled-components';

export const Modals = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 380px;
    height: 300px;
    z-index: 3;
    background: #fff;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px solid #9d8189;
`;


export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  background-color: rgba(0, 0, 0, .7);
`;

export const ModalContent = styled.div`
  span{
    position: absolute;
    right: 20px;
    top: 15px;
    cursor: pointer;
  }


   form{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    
    button{
      font-weight: 500;
      width: 3.8rem;
      height: 2.7rem;
      border-radius: 15px;
      background-color: #3b5bfd;
      border: 0;
      cursor: pointer;
      box-shadow: 3px 0px 5px 0px rgba(0,0,0,0.50);
      color: white;
      font-family: 'Poppins', sans-serif;
      letter-spacing: 1.2px;
      margin: 20px auto 0 auto;
  }

  textarea {
    width: 220px;
    height: 80px;
    resize: none;
    box-sizing: border-box;
    margin-bottom: 18px;
    border: 1.2px solid #e1e5f2;
  }

  input[type=color]{
    border: 1.2px solid #e1e5f2;
  }

}
`;


