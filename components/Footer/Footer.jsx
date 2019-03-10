import { withNamespaces, Link } from '../../i18n';
import { Icon } from 'antd';
import style from './Footer.scss';

const ContactItem = (props) => (
  <div className={style.ContactItem}>
    <Link href={props.href}>
      <a target="_blank" className={style.Link}>
        <Icon type={props.icon} /> {props.text}
      </a>
    </Link>
  </div>
);

const Footer = (props) => (
  <div className={style.Footer}>
    <div className={style.Description}>
      {props.t('footer')}
    </div>
    <div className={style.Contact}>
      <ContactItem text="+66 (0) 2 026 3355 || Line: Finfunhub1" icon="phone" href="tel: +6620263355" />
      <ContactItem text="FinfunHub" icon="facebook" href="https://www.facebook.com/easysundaythailand/" />
      
    </div>
  </div>
)

Footer.getInitialProps = () => {
  return {
    namespacesRequired: ['common'],
  };
}

export default withNamespaces('common')(Footer);