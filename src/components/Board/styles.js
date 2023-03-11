import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 30px 0;
    height: calc(100% -4rem);
    position: relative;
    
    button{
            position: absolute;
            width: 42px;
            height: 42px;
            border-radius: 15px;
            background-color: #3b5bfd;
            border: 0;
            cursor: pointer;
            box-shadow: 3px 0px 5px 0px rgba(0,0,0,0.50);
            left: 16rem;
        }


`;