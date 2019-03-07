import { withNamespaces } from '../../i18n';
import Template from "../../components/Template/Template"
import Introducer from "../../components/Introducer/Introducer"
import Footer from '../../components/Footer/Footer';
import TopStarSection from '../../components/Section/TopStarSection';
import FindZoneSection from '../../components/Section/FindZoneSection/FindZoneSection'


class Home extends React.Component{
  
  static async getInitialProps(props) {
    // console.log("getInitialProps called from home.jsx", props.query.name)
    
    return {
      query: props.query,
      namespacesRequired: ['home']
    }
  }

  render() {
    return (
      <Template>
        <Introducer />
        <TopStarSection />
        <FindZoneSection />
        <Footer/>
      </Template>
    )
  }
}

export default withNamespaces('home')(Home);