import { withNamespaces } from "react-i18next";
import {container, container_vert_pad_default} from "../../Template/Template.scss"
import style from "./RecentlySection.scss"
import SectionHeader from "../../SectionHeader/SectionHeader"
import RecentComment from './RecentComment'
import { Row, Col, Card } from "antd";
import RecentEscort from "./RecentEscort";

const RecentlySection = (props) => (
  <div className={style.recentlySection_wrapper}>
    <div className={[container, container_vert_pad_default].join(' ')}>
      <SectionHeader heading={props.t('recently')}/>
      <Row gutter={20}>
        <Col xl={24} xxl={8}>
          <RecentComment/>
        </Col>
        <Col xl={24} xxl={16}>
          <RecentEscort/>
        </Col>
      </Row>
    </div>
  </div>
)

export default withNamespaces('content')(RecentlySection)