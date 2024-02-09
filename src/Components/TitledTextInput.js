import styled from "styled-components";

const Input = styled.input`
    outline: none;
    border-radius: 24px;
    border: solid #E2E8F0 1px;
    background-color: #F8FAFC;
    color: #0F172A;
    margin: 8px 0px;
    &:hover {
        background-color: #F8FAFC 80%;
    }
`;

function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div>{title}</div>);
    return (
        <div className='d-flex flex-column gap-2 '>
            {Title}
            <Input className='p-2 pse-3' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;