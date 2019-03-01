import { Card } from "antd";
import style from './AvatarCard.scss'

const AvatarCard = (escort) => (
  <Card
    className={style.avatarCard}
    hoverable
    cover={
      <img 
        alt={escort.name} 
        src="./static\img\testescort.jpeg" 
        className={style.img}
      />
    }
  >
    <Card.Meta
      title={<div><a>{escort.name}</a> • {escort.price}฿/1</div>}
      description={
        <div>{escort.zone} • {escort.gender}</div>
      }
    />
  </Card>
)

export default AvatarCard