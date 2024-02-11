import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div class='container col'>
            <div class="border">
<style>
    border: 2px solid;
</style>
        <div class="d-flex justify-content-between p-4">
            <div className='title'>Адреса заведений</div></div>
            <div className='d-inline-flex flex-column gap-4 p-4'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement></div>
                <div className='d-inline-flex flex-column gap-3 p-4'>
                <SecondaryButton>Добавить филиал</SecondaryButton></div>
                </div>
                </div>
    );
}

export default Addresses;