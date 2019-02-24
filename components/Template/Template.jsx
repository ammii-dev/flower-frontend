import Head from 'next/head';
import { Layout, Menu } from 'antd';
import style from './Template.scss';
import { i18n, withNamespaces } from '../../i18n'
import HeaderContent from '../Header/HeaderContent'

const { Content, Header } = Layout;

// set default language
//i18n.changeLanguage('en')

const Template = (props) => (
  <div className={style[`lang_${i18n.language}`]}>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>{props.t('title')}</title>
      <link rel="shortcut icon" href="/static/favicon.png"></link>
    </Head>
    <Header className={style.header_wrapper}>
      <div className={style.container}>
        <HeaderContent />
      </div>
    </Header>
    <Content>
      {props.children}
    </Content>
  </div>
)

Template.getInitialProps = () => {
  return {
    namespacesRequired: ['common'],
  };
}

export default withNamespaces('common')(Template);
