import styled from 'styled-components';


export const Container = styled.div`
    padding: 0 15px;
    max-height: 100%;
    flex: 0 0 320px; //grow shrink basis
    opacity: ${props => props.done ? 0.6 : 1};

    div{
        height: 100%;
    }

    & + div {
        border-left: 1px solid rgba(0, 0, 0, 0.05);
    }

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 42px;

        h2 {
            font-weight: bold;
            font-size: 15px;
            padding: 0 10px;
        }

    
    }

    
    ul {
            margin-top: 30px
    }

`;