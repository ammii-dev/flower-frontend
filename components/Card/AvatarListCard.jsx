import style from './AvatarListCard.scss'
import { Badge } from 'antd';


const AvatarListCard = (props) => {
  const row = props.row;
  const flexBasis = 100/row           // flexBasis = width of card
  const height = flexBasis * 19
  const marginPx = 3

  const cardPosition = {
    flexBasis: "calc(" + flexBasis + "% - " + (marginPx * 2) + "px",
    minWidth: 130,
    // height: height,
    margin: marginPx + "px",
    marginBottom: "0px"
  }

  return(
    <div className={style.avatar_card}>
      <div className={style.card_box}>
        <div className={style.img_wrapper}>
          <img className={style.img} src="/static/img/testescort.jpeg"/>
        </div>
        <div className={style.card_info}>
          <div className={style.card_title}>
            <a>{props.name}</a>
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