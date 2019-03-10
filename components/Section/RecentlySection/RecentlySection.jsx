import { withNamespaces } from "react-i18next";
import {container, container_vert_pad_default} from "../../Template/Template.scss"
import style from "./RecentlySection.scss"
import SectionHeader from "../../SectionHeader/SectionHeader"
import ListAvatarCard from '../../ListEscort/ListAvatarCards'

const RecentlySection = (props) => (
  <div className={style.recentlySection_wrapper}>
    <div className={[container, container_vert_pad_default].join(' ')}>
      <SectionHeader heading={props.t('recently')}/>
      
    </div>
  </div>
)

export default withNamespaces('content')(RecentlySection)