import { Button, Menu } from 'antd'
import { withNamespaces } from '../../i18n';
import style from './HeaderContent.scss'

import Link from 'next/link'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const SubMenu = Menu.SubMenu;

const ButtonMenu = (props) => (
  <div className={style.button_menu}>
    {props.buttonText}
  </div>
)

const UserMenu = (props) => (
  <div className={style.user_menu}>
    <ButtonMenu buttonText={props.t('nav3')}/>
    <ButtonMenu buttonText={<Button type="primary">{props.t('login') + "/" + props.t('signup')}</Button>}/>
  </div>
)

const HeaderContent = (props) => (
  <div className={style.header_content}>
    <div className={style.logo_wrapper}>
      <Link href="/index"><a>
        <img src="/static/img/pornhub_logo_straight.png"></img>
      </a></Link>
    </div>
    <Menu
      mode="horizontal"
      style={{ lineHeight: '64px' }}
      theme="dark"
    >
      <SubMenu title={<span>{props.t('nav1')}</span>}>
        <Menu.ItemGroup title={props.t('findby')}>
          <Menu.Item key="find1">{props.t('findbyzone')}</Menu.Item>
          <Menu.Item key="find2">{props.t('findbymap')}</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key="2">{props.t('nav2')}</Menu.Item>
    </Menu>
    <div className={style.right_panel}>
      <UserMenu {...props}/>
    </div>
    <div className={style.langSwitcher}>
      <LanguageSwitcher/>
    </div>
    
  </div>
)


export default withNamespaces('header')(HeaderContent)