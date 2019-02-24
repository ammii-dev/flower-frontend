import { withNamespaces } from '../../i18n';
import Template from "../../components/Template/Template"
import Introducer from "../../components/Introducer/Introducer"
import Footer from '../../components/Footer/Footer';
import TopStar from '../../components/TopStar/TopStar'

const Home = (props) => {
  return (
    <Template>
      <Introducer />
      <TopStar />
      <Footer/>
    </Template>
  )
}

Home.getInitialProps = () => {
  return {
    namespacesRequired: ['home']
  }
}

export default withNamespaces('home')(Home);
