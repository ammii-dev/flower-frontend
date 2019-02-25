import style from './TopStar.scss'
import { withNamespaces } from 'react-i18next';
import escortsData from '../../static/datasets/testescortlist.json'
import AvatarListCard from '../Card/AvatarListCard'

class TopStarList extends React.Component{

  render() {
    // List of all escorts (for development purpose only)
    let escorts = escortsData

    return(
      <div className={style.topstar_list_container}>
        {escorts.map((escort, i) => (
          <AvatarListCard
            key={i}
            name={escort.name}
            price={escort.price}
            imgurl={escort.image}
            zone={escort.zone}
            row={9}
          />
        ))}
      </div>
    )
  }
}

export default TopStarList