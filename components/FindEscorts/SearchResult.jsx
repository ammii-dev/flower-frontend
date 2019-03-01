
import escortsData from '../../static/datasets/testescortlist.json'
import style from './FindEscortSection.scss'
import AvatarCard from '../Card/AvatarCard';
import { List, Card } from 'antd';

class SearchResult extends React.Component{
  

  render() {
    const escortsDataLocal = escortsData
    return(
      <div className={style.cardList_container}>
        {/* {escortsDataLocal.map((escort) => {
          return(
            <AvatarCard
              
            />
          )
        })} */}

      <List
        grid={{ gutter: 20, xxl: 6, lg: 4, md: 3, sm: 2, xs: 2 }}
        dataSource={escortsDataLocal}
        renderItem={escort => (
          <List.Item>
            <AvatarCard {...escort}/>
          </List.Item>
        )}
      />
      </div>
    )
  }
}

export default SearchResult