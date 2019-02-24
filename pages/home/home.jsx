import { withNamespaces } from '../../i18n';
import Template from "../../components/Template/Template"
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher"

const Home = (props) => {
  return (
    <Template>
      <LanguageSwitcher />
      Home {props.t('hello')}
    </Template>
  )
}

Home.getInitialProps = () => {
  return {
    namespacesRequired: ['home']
  }
}

export default withNamespaces('home')(Home);
