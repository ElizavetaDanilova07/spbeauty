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
        (<div className="caption grey">{title}</div>);
    return (
        <div className='d-flex flex-column pt-2'>
            {Title}
            <Input className='pt-2 ps-3 pe-3 pb-2' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;