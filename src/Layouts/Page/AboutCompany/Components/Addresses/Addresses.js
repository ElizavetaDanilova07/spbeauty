import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div class='container col p-4'>
        <div class="d-flex justify-content-between">
            <div className='title'>Адреса заведений</div></div>
            <div className='d-inline-flex flex-column gap-3 ptb-3'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement></div>
                <SecondaryButton>Добавить филиал</SecondaryButton>
                </div>
    );
}

export default Addresses;