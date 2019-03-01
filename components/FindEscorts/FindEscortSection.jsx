import { withNamespaces } from "react-i18next";
import SectionHeader from "../SectionHeader/SectionHeader";
import { container, container_vert_pad_default } from "../Template/Template.scss";
import FindEscorts from "./FindEscorts";
import style from "./FindEscortSection.scss";

class FindEscortSection extends React.Component{
  render() {
    return(
      <div className={style.findescort_section}>
        <div className={[container, container_vert_pad_default].join(' ')}>
          <SectionHeader 
            heading={this.props.t('findescorts_title')}
            description={this.props.t('findescorts_description')}
          />
          <FindEscorts />
        </div>
      </div>
    )
  }
}

export default withNamespaces('findescorts')(FindEscortSection)