import styled from "@emotion/styled";

export const Form = styled.form`
    margin: 0 auto;
    max-width: 500px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    input {
    height: 40px;
    padding-left: 10px;
    margin-bottom: 15px;

    font-size: 20px;

    border-image: linear-gradient(45deg, rgb(30, 1, 252), rgb(255, 255, 12)) 1;
    box-shadow: 0px 0px 5px 0px rgb(30, 1, 252);
    }
`
export const Button = styled.button`
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 0 auto;
    border: 1px solid rgb(30, 1, 252);
    border-radius: 5px;

    font-size: 20px;

    box-shadow: 0px 0px 5px 0px rgb(30, 1, 252);
    transition: color 500ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 500ms cubic-bezier(0.165, 0.84, 0.44, 1);

    p {
        margin-left: 5px;
    }

    &:hover,
    &:focus {
        color: rgb(30, 1, 252);
        transform: scale(1.02);
    }
`