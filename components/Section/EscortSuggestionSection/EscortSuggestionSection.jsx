import { withNamespaces } from "react-i18next";
import {container, container_vert_pad_default} from "../../Template/Template.scss"
import style from "./EscortSuggestionSection.scss"
import SectionHeader from "../../SectionHeader/SectionHeader"
import EscortListCarousel from './EscortListCarousel'
import { Icon } from "antd";

const sectionHeading = (props) => (
  <span className={style.sectionHeading}>
    {props.t('recommended_escort')}
  </span>
)

const EscortSuggestionSection = (props) => (
  <div className={style.escortSug_wrapper}>
    <div className={[container, container_vert_pad_default].join(' ')}>
      <SectionHeader heading={sectionHeading(props)}/>
      <EscortListCarousel/>
    </div>
  </div>
)

export default withNamespaces('content')(EscortSuggestionSection)