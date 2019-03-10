import style from './RecentlySection.scss'
import { Card, List, Comment, Tooltip } from 'antd';
import { withNamespaces } from 'react-i18next';

const data = [
  {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p className={style.content}><a>Kiljerry74</a> - We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
    ),
    datetime: (
      <Tooltip title={'YYYY-MM-DD HH:mm:ss'}>
        <span>5 hours ago</span>
      </Tooltip>
    ),
  },
  {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p className={style.content}><a>Kiljerry74</a> - We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
    ),
    datetime: (
      <Tooltip title={'YYYY-MM-DD HH:mm:ss'}>
        <span>6 hours ago</span>
      </Tooltip>
    ),
  },
  {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p className={style.content}><a>Kiljerry74</a> - We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
    ),
    datetime: (
      <Tooltip title={'YYYY-MM-DD HH:mm:ss'}>
        <span>6 hours ago</span>
      </Tooltip>
    ),
  },
  {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p className={style.content}><a>Kiljerry74</a> - We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
    ),
    datetime: (
      <Tooltip title={'YYYY-MM-DD HH:mm:ss'}>
        <span>6 hours ago</span>
      </Tooltip>
    ),
  },
  {
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p className={style.content}><a>Kiljerry74</a> - ควยไรอะ พ่อแม่มึงด้วย มีปัญหาป่าวเย็ดเป็ด ควยไรเอ็ม ควยไรหวาน หน้าหี</p>
    ),
    datetime: (
      <Tooltip title={'YYYY-MM-DD HH:mm:ss'}>
        <span>6 hours ago</span>
      </Tooltip>
    ),
  },
];

class RecentComments extends React.Component{

  
  render() {
    return(
      <div className={style.recentComment_wrapper}>
        <Card
          title={this.props.t('recent_comments')}
          extra={<a>{this.props.t('more')}</a>}
          bodyStyle={{padding: '10px 24px'}}
        >
          <List
            className="comment-list"
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <Comment
                actions={item.actions}
                author={item.author}
                avatar={item.avatar}
                content={item.content}
                datetime={item.datetime}
                className={style.comment}
              />
            )}
          />
        </Card>
      </div>
    )
  }
}

export default withNamespaces('content')(RecentComments)