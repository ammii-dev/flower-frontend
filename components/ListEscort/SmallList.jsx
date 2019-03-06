import { withNamespaces } from "react-i18next";
import {container, container_vert_pad_default} from "../Template/Template.scss"
import style from "./SmallList.scss"
import SectionHeader from "../SectionHeader/SectionHeader"

const TopStar = (props) => (
  <div className={style.topstar_wrapper}>
    <div className={[container, container_vert_pad_default].join(' ')}>
      <SectionHeader heading={props.t('topstar_title')} description={props.t('topstar_desc')}/>
      
    </div>
  </div>
)

export default withNamespaces('content')(TopStar)