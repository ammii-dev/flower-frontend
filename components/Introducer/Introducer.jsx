
import { i18n, withNamespaces } from '../../i18n'

import { container } from "../Template/Template.scss";
import style from "./Introducer.scss"
import { Button, Popover, Row, Col } from 'antd';
import SelectZone from './SelectZone';

const TextIntroduce = (props) => (
  <div className={style.text_introducer_container}>
    <div className={[style.main, style[`lang_${i18n.language}`]].join(' ')}>
      <div className={style.introduceTitle}>{props.t('title')}</div>
      <div className={style.introduceDescription}>{props.t('description')}</div>

      <div className={style.introduceButton}>
        <Popover content="In development / ยังทำไม่เสร็จ หาด้วยโซนไปก่อนนะคะ">
          <Button type="primary" shape="round" size="large" style={{fontSize: "16px"}}>
            <ButtonContent iconUrl="./static/icons/icons8-google-maps-filled-48.png" text={props.t('findbymap')}/>
          </Button>
        </Popover>
        <Button ghost type="primary" shape="round" size="large" style={{fontSize: "16px", marginLeft: "15px"}}>
          <ButtonContent iconUrl="./static/icons/icons8-place-marker-filled-30.png" text={props.t('findbyzone')}/>
        </Button>
      </div>
    </div>
  </div>
)

const ZoneOption = (props) => (
  <div className={style.zoneOption_wrapper}>
    <div className={style.zoneOption_header}>
      <span></span>
    </div>
    <div className={style.zone_option_list_container}>
      <SelectZone/>
    </div>
  </div>
)

const Introducer = (props) => (
  <div className={style.introducer_height}>
    <div className={container}>
      <div className={style.introducer_container}>
        <Row type="flex" justify="space-between" align="middle">
          <Col xl={24} xxl={8}>
            <TextIntroduce {...props}/>
          </Col>
          <Col xl={24} xxl={12}>
            <ZoneOption {...props}/>
          </Col>
          
        </Row>
        
      </div>
    </div>
  </div>
)




// Content inside button
const ButtonContent = (props) => (
  <a id="findOptionsButton" className="fobtn">
    <div className="divImg">
      <img className="img" src={props.iconUrl}/>
    </div>
    <div className="fobtn-text">{props.text}</div>
    <style jsx> {`
    .fobtn {
      display: flex;
      flex: 1;
    }
    .fobtn-text {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      font-size: 15px;
      margin-left: 5px;
    }
    .img {
      height: 30px;
      display: block;
    }
  `}</style>
  </a>
)

export default withNamespaces('introducer')(Introducer)