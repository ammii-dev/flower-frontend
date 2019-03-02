import { withNamespaces } from "react-i18next";
import SectionHeader from "../SectionHeader/SectionHeader";
import { container, container_vert_pad_default } from "../Template/Template.scss";
import FindEscorts from "./FindEscorts";
import style from "./FindEscortSection.scss";
import { Button, Pagination } from "antd";

class FindEscortSection extends React.Component{
  render() {
    const findPage = this.props.findPage

    return(
      <div className={style.findescort_section}>
        <div className={[container, container_vert_pad_default].join(' ')}>
          {!findPage ?
            <SectionHeader 
              heading={this.props.t('findescorts_title')}
              description={this.props.t('findescorts_description')}
            /> : null
          }
          <FindEscorts/>
          {
            !findPage ? <Button className={style.seeMore_button} type="primary" size="large">
              {this.props.t('seemorebtn')}
            </Button> :
            <Pagination style={{margin: '20px auto', textAlign: 'center'}} defaultCurrent={1} total={50} />
          }
        </div>
      </div>
    )
  }
}

export default withNamespaces('findescorts')(FindEscortSection)