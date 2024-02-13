import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";


function Addresses() {
    return (
        <div className='container col p-2 justify-content-between border1'>
               
        <div className="d-flex flex-column ps-4 pe-4 pt-4 gap-4">
            <div className='title'> Адреса заведений </div>
                <div className='d-inline-flex flex-column'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement></div>
                <div className='d-inline-flex flex-column'>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement></div></div>
                <div className='d-flex flex-column p-4'>
                <SecondaryButton>Добавить филиал</SecondaryButton></div>
                
                </div>
                
                
                        
    );
}

export default Addresses;