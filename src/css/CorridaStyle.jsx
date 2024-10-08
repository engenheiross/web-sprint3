import styled from "styled-components";

export const CorridaStyle = styled.section
`

    .corrida-cidade {
        width: 16rem;
        display: flex;
        justify-content: center;
        align-items: center;

        background: var(--secondary-color);
        border-radius: 20%;

        font-weight: bold;
        height: 100%;
    }

    .medalhas {
        display: flex;
        flex-direction: row;


        background: var(--secondary-color);

        border-radius: 20%;


    }

    .corrida {
        width: 100%;
        display: flex;
        flex-direction: row;
        
        padding: .5rem;
        gap: .3rem;


        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        border-top: 1px solid white;
        
        height: 3rem;

        overflow-y: hidden;
    }

    .corrida :hover {
        cursor: pointer;
    }
        
    #corrida-1 {
        background: url("./src/assets/168614.jpg");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center bottom 10px;
    }

    #corrida-2 {
        background: url("./src/assets/madrid.jpg");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center bottom 10px;
    }

    #corrida-3 {
        background: url("./src/assets/lisboa.jpg");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center bottom 10px;
    }

    .medalha {
        padding: .2rem;
        height: 100%;
    }

    .medalha img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;

    }


`