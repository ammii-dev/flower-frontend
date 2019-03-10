import escortsData from '../../../static/datasets/testescortlist.json'
import { Card, List } from 'antd';
import AvatarListCard from '../../Card/AvatarListCard.jsx';
import { withNamespaces } from 'react-i18next';

class RecentEscorts extends React.Component{
  render() {
    const escortsDataLocal = escortsData;

    return(
      <div>
        <Card
          title={this.props.t('recent_escorts')}
          extra={<a>{this.props.t('more')}</a>}
        >
          <List
            grid={{ gutter: 20, xxl: 6, lg: 4, md: 4, sm: 3, xs: 3 }}
            dataSource={escortsDataLocal}
            renderItem={escort => (
              <List.Item style={{marginBottom: 25}}>
                <AvatarListCard {...escort}/>
              </List.Item>
            )}
          />
        </Card>
      </div>
    )
  }
}

export default withNamespaces('content') (RecentEscorts)