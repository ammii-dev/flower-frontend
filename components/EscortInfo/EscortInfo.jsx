import style from './EscortInfo.scss'
import { withNamespaces } from 'react-i18next';

const EscortInfo = (props) => (
  <div className={style.escortInfo_wrapper}>
    <div></div>
  </div>
)

export default withNamespaces('escortinfo')(EscortInfo)