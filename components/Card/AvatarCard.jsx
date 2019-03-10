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
  </div>
)

const cardMetaDesc = (escort) => (
  <div className={style.cardMetaDescCover}>
    <span className={style.price_text}>{escort.price.toLocaleString()}฿</span> |
    <span> {escort.zone} area</span>
    
  </div>
)

const cardMetaDetail = (escort) => (
  <div className={style.detailArea}>
    <span>{escort.age} years old</span><span>{escort.height}/{escort.weight}</span>
  </div>
)

const cardBody = (escort) => (
  <div className={style.cardBody}>
    {cardMetaDesc(escort)}
    {cardMetaTitle(escort)}
    {/* {cardMetaDetail(escort)} */}
    <div className={style.cardItemContent}>
      <span>{escort.viewscount} views • 3 reviews</span>
    </div>
  </div>
)

const AvatarCard = (escort) => {
  return(
    <Card
      className={style.avatarCard}
      hoverable
      cover={cardCover(escort)}
      bodyStyle={{padding: 15}}
    >
      {/* <Card.Meta
        className={style.cardMeta}
        title={cardMetaTitle(escort)}
        description={cardMetaDesc(escort)}
      /> */}
      {cardBody(escort)}
      
    </Card>
  )
}



export default withNamespaces('escortinfo')(AvatarCard)