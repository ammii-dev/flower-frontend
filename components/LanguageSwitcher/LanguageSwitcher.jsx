import { i18n } from '../../i18n';
import { Button } from 'antd';
import style from './LanguageSwitcher.scss';

const languageSwitchHandle = (event) => i18n.changeLanguage(event.target.value);

const LanguageSwitcher = () => (
  <div className={style.langBar}>
    <Button className={style.langSwitchTH} onClick={languageSwitchHandle} value="th">ไทย</Button>
    &nbsp;|&nbsp;
    <Button className={style.langSwitchEN} onClick={languageSwitchHandle} value="en">Eng</Button>
  </div>
)

export default LanguageSwitcher
