import style from "./FindEscorts.scss"
import { withNamespaces } from "react-i18next";
import SectionHeader from "../SectionHeader/SectionHeader"
import {container, container_vert_pad_default} from "../Template/Template.scss"

class FindEscorts extends React.Component{
  render() {
    return(
      <div className={style.findescort_wrapper}>
        <div className={[container, container_vert_pad_default].join(' ')}>
          <SectionHeader 
            heading={this.props.t('findescorts_title')} 
            description={this.props.t('findescorts_description')}
          />
        </div>
      </div>
    )
  }
}

export default withNamespaces('findescorts')(FindEscorts)