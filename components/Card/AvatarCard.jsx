import { Card, Icon } from "antd";
import style from './AvatarCard.scss'
import { withNamespaces } from 'react-i18next';



const cardCover = (escort) => (
  <div className={style.cardCover}>
    <div className={style.cover_img}>
      <img 
        alt={escort.name} 
        src="./static\img\testescort.jpeg" 
        className={style.img}
      />
    </div>
    <div className={style.gender}>
      <span className={style.gendertext}>{escort.gender}</span>
    </div>
    <div className={style.isVerified}>
      { escort.isVerified ?
        <span className={style.isVerified_text}><Icon type="check" /> {escort.t('verifiedimages')}</span>
        : null
      }
    </div>
  </div>
)

const cardMetaTitle = (escort) => (
  <div className={style.cardTitle}>
    <a className={style.name}>
      {escort.name}
    </a>
    <span className={style.price_text}>{escort.price.toLocaleString()}฿</span>
  </div>
)

const cardMetaDesc = (escort) => (
  <div className={style.cardMetaDescCover}>
    
    <span>{escort.zone} zone</span><img className={style.zoneIcon} src="../static/icons/icons8-place-marker-filled-30.png"></img>
  </div>
)

const AvatarCard = (escort) => (
  <Card
    className={style.avatarCard}
    hoverable
    cover={cardCover(escort)}
  >
    <Card.Meta
      title={cardMetaTitle(escort)}
      description={cardMetaDesc(escort)}
    />
    
    <div className={style.cardItemContent}>
      <span>{escort.viewscount} views • 3 reviews</span>
    </div>
  </Card>
)



export default withNamespaces('escortinfo')(AvatarCard)