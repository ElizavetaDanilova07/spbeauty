import ProfileIcon from '../../../Icons/ProfileIcon'
import GridIcon from '../../../Icons/GridIcon'
import SettingsIcon from '../../../Icons/SettingsIcon'
import SideMenuGroup from './SideMenuGroup';
import Clickable from '../../../Components/Clickable';

function SideMenuContents(props) {
    return (
        <div class="mt-5">
            <SideMenuGroup 
                icon={<ProfileIcon/>} 
                groupName='Личный профиль' 
                tabs={[
                    ['Данные профиля', 'profile-data'],
                    ['Мои шаблоны', 'my-templates'],
                    ['Уведомления', 'notifications'],
                    ['Настройки', 'settings'],
                    ['Сменить пароль', 'change-password'],
                ]}
                active='about-company'
            />
            <SideMenuGroup 
                icon={<GridIcon/>} 
                groupName='Компания' 
                tabs={[
                    ['Данные о компании', 'about-company'],
                    ['Сотрудники', 'employees'],
                    ['Услуги', 'services'],
                    ['Клиенты', 'clients'],
                    ['Рассылки', 'mailings'],
                ]}
                active='about-company'
            />
            <Clickable>
                <SideMenuGroup 
                    icon={<SettingsIcon/>} 
                    groupName='Админ-панель' 
                    tabs={[]}
                    active='about-company'
                />
            </Clickable>
        </div>
    );
  }
  
  export default SideMenuContents;