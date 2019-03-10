import { withNamespaces } from "react-i18next";
import {container, container_vert_pad_default} from "../../Template/Template.scss"
import style from "./TopStarSection.scss"
import SectionHeader from "../../SectionHeader/SectionHeader"
import ListAvatarCard from '../../ListEscort/ListAvatarCards'
import { Icon } from "antd";


const sectionHeading = (props) => (
  <span className={style.sectionHeading}>
    <span className={style.starList}>
      <Icon type="star" theme="filled" className={style.starLeft} />
      <Icon type="star" theme="filled" className={style.starLeft} />
      <Icon type="star" theme="filled" className={style.starLeft} />
      <Icon type="star" theme="filled" className={style.starLeft} />
      <Icon type="star" theme="filled" className={style.starLeft}  style={{marginRight: 100}}/>
    </span>
    {props.t('topstar_title')}
    <span className={style.starList}>
      <Icon type="star" theme="filled" className={style.starRight} style={{marginLeft: 100}} />
      <Icon type="star" theme="filled" className={style.starRight} />
      <Icon type="star" theme="filled" className={style.starRight} />
      <Icon type="star" theme="filled" className={style.starRight} />
      <Icon type="star" theme="filled" className={style.starRight} />
    </span>
  </span>
)

const TopStar = (props) => (
  <div className={style.topstar_wrapper}>
    <div className={[container, container_vert_pad_default].join(' ')}>
      <SectionHeader heading={sectionHeading(props)} description={props.t('topstar_desc')}/>
      <ListAvatarCard/>
    </div>
  </div>
)

export default withNamespaces('content')(TopStar)