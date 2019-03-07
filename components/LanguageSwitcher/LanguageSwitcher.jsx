import { i18n } from '../../i18n';
import { Button, Radio, Dropdown, Menu, Icon } from 'antd';
import style from './LanguageSwitcher.scss';

const switchLang = (e) => i18n.changeLanguage(e.key);

const menu = (
  <Menu onClick={switchLang}>
    <Menu.Item key="th">
      ไทย
    </Menu.Item>
    <Menu.Item key="en">
      English
    </Menu.Item>
  </Menu>
);

const LanguageSwitcher = () => (
  <div className={style.langSelector}>
    {/* <Radio.Group onChange={switchLang}>
      <Radio.Button value="th">ไทย</Radio.Button>
      <Radio.Button value="en">English</Radio.Button>
    </Radio.Group> */}

    <Dropdown overlay={menu} trigger={['click']}>
      <a href="#" style={{color: '#a6a6a6'}}>
        {i18n.language} <Icon type="down" />
      </a>
    </Dropdown>
  </div>
)

export default LanguageSwitcher
