import { withNamespaces } from '../../i18n';
import Template from "../../components/Template/Template"
import EscortInfo from "../../components/EscortInfo/EscortInfo"

class Home extends React.Component{
  
  static async getInitialProps(props) {
    // console.log("getInitialProps called from home.jsx", props.query.name)
    
    return {
      query: props.query,
      namespacesRequired: ['home']
    }
  }
  
  componentDidMount() {
    console.log("ComponentDidMount", this.props.query)
  }

  render() {
    return (
      <Template>
        <EscortInfo/>
      </Template>
    )
  }
}

export default withNamespaces('home')(Home);