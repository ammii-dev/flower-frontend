import { withNamespaces } from "react-i18next";
import style from './Introducer.scss'
import { Card, List } from "antd";

const zoneCard = (zone, i) => {
  const title = (
    <div>
      <img style={{marginRight: 5, verticalAlign: 'middle '}} src="../static/icons/icons8-place-marker-filled-30.png"></img>
      {zone.zone}
    </div>
  )
  return (
    <Card
      hoverable
      className={style.zoneCard}
    >
      <Card.Meta
        title={title}
        description={zone.desc}
      />
    </Card>
  )
}

const SelectZone = (props) => {
  let zoneList = [{
      zone : props.t('northwestbkk'),
      desc : props.t('northwestbkkdesc')
    },
    {
      zone : props.t('southwestbkk'),
      desc : props.t('southwestbkkdesc')
    },{
      zone : props.t('southwestbkk'),
      desc : props.t('southwestbkkdesc')
    },{
      zone : props.t('northwestbkk'),
      desc : props.t('southwestbkkdesc')
    },{
      zone : props.t('northwestbkk'),
      desc : props.t('southwestbkkdesc')
    },
  ]

  return (
    <div className={style.selectZone_wrapper}>
      <div className={style.zone_list}>
        {/* {zoneList.map((zone, i) => (
          zoneCard(zone, i)
        ))} */}
        <List
          grid={{ gutter: 17, xxl: 3, lg: 3, md: 3, sm: 2, xs: 2 }}
          dataSource={zoneList}
          renderItem={(zone, i)=> (
            <List.Item>
              {zoneCard(zone, i)}
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}

export default withNamespaces('zone')(SelectZone)
