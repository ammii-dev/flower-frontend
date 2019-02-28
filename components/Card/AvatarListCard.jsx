import style from './AvatarListCard.scss'
import { Badge } from 'antd';


const AvatarListCard = (props) => {
  const row = props.row;
  const flexBasis = 100/row           // flexBasis = width of card
  const height = flexBasis * 16
  const marginPx = 10

  const cardPosition = {
    flexBasis: "calc(" + flexBasis + "% - " + (marginPx * 2) + "px",
    height: height,
    margin: marginPx + "px",
    marginBottom: "35px"
  }

  return(
    <div className={style.avatar_card} style={cardPosition}>
      <div className={style.card_box}>
        <div className={style.img_wrapper}>
          <img className={style.img} src="/static/img/testescort.jpeg"/>
        </div>
        <div className={style.card_info}>
          <div className={style.card_title}>
            {props.name}
          </div>
          <div className={style.card_desc}>
            <span>{props.zone}</span> • <span>{props.price}฿</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AvatarListCard