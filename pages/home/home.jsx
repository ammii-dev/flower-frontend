import { withNamespaces } from '../../i18n';
import Template from "../../components/Template/Template"
import Introducer from "../../components/Introducer/Introducer"
import Footer from '../../components/Footer/Footer';
import TopStarSection from '../../components/Section/TopStarSection/TopStarSection';
import FindZoneSection from '../../components/Section/FindZoneSection/FindZoneSection'
import EscortSuggestionSection from '../../components/Section/EscortSuggestionSection/EscortSuggestionSection';
import RecentlySection from '../../components/Section/RecentlySection/RecentlySection';


class Home extends React.Component{
  
  static async getInitialProps(props) {
    // console.log("getInitialProps called from home.jsx", props.query.name)
    
    return {
      query: props.query,
      namespacesRequired: ['home']
    }
  }

  importStyles = () => (
    <div>
      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </div>
  )

  render() {
    return (
      <Template>
        {this.importStyles()}
        <Introducer />
        <TopStarSection />
        <EscortSuggestionSection/>
        <FindZoneSection />
        <RecentlySection />
        <Footer/>
      </Template>
    )
  }
}

export default withNamespaces('home')(Home);