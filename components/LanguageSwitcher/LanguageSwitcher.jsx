import { i18n } from '../../i18n';
import { Button, Radio } from 'antd';
import style from './LanguageSwitcher.scss';

const switchLang = (event) => i18n.changeLanguage(event.target.value);

const LanguageSwitcher = () => (
  <div className={style.langSelector}>
    <Radio.Group onChange={switchLang}>
      <Radio.Button value="th">ไทย</Radio.Button>
      <Radio.Button value="en">English</Radio.Button>
    </Radio.Group>
  </div>
)

export default LanguageSwitcher
