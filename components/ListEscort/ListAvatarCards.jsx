
import escortsData from '../../static/datasets/testescortlist.json'
import style from './ListAvatarCard.scss'
import AvatarCard from '../Card/AvatarCard';
import { List, Card, Empty, AutoComplete } from 'antd';

class SearchResult extends React.Component{

  render() {
    const escortsDataLocal = escortsData;

    return(
      <div className={style.cardList_container}>

      {escortsDataLocal ? 
        <List
          grid={{ gutter: 20, xxl: 6, lg: 4, md: 3, sm: 2, xs: 2 }}
          dataSource={escortsDataLocal}
          renderItem={escort => (
            <List.Item>
              <AvatarCard {...escort}/>
            </List.Item>
          )}
        /> : <Empty description="0 search found :(" style={{margin: '20px auto'}} />
      }
      </div>
    )
  }
}

export default SearchResult