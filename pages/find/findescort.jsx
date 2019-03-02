import { withNamespaces } from '../../i18n';
import Template from "../../components/Template/Template"
import Introducer from "../../components/Introducer/Introducer"
import Footer from '../../components/Footer/Footer';
import TopStar from '../../components/TopStar/TopStar'
import FindEscorts from '../../components/FindEscorts/FindEscortSection';

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
        <TopStar />
        <FindEscorts findPage/>
      </Template>
    )
  }
}

export default withNamespaces('home')(Home);