import { withNamespaces } from 'react-i18next';
import style from './SearchEscortBar.scss';
import { TreeSelect } from 'antd';
import FilterLists from './FilterLists'

class SearchForm extends React.Component{
  render() {
    return(
      <div className={style.searchBar_container}>
        <div className={style.row_container}>
          <div className={style.search_header}>
            <div className={style.header_text}>
              {this.props.t('zone')} :
            </div>
          </div>
          <div className={style.search_input_list}>
            <ZoneSearch />
          </div>
          
        </div>
        <div className={style.row_container}>
          <div className={style.search_header}>
            <div className={style.header_text}>
              {this.props.t('filterby')} :
            </div>
          </div>
          <div className={style.search_input_list}>
            <FilterLists />
          </div>
        </div>
      </div>
    )
  }
}


// data for testing purpose only
// Zone Dropdown Input Data
const treeZonesData = 
[{
  title: 'เมือง กรุงเทพฯ - นนทบุรี',
  value: '0',
  key: '0',
  children: [{
    title: 'ฝั่งธน - เหนือ (แถบบางแคขึ้นไป)',
    value: '0-0',
    key: '0-0',
    children: [{
      title: 'บริเวณ บางแค',
      value: '0-0-0',
      key: '0-0-0',
    }, {
      title: 'บริเวณ หนองแขม',
      value: '0-0-1',
      key: '0-0-1',
    }, {
      title: 'บริเวณ ตลิ่งชัน',
      value: '0-0-2',
      key: '0-0-2',
    }, {
      title: 'บริเวณ ปิ่นเกล้า',
      value: '0-0-3',
      key: '0-0-3',
    }],
  }, {
    title: 'ฝั่งธน - ใต้ (แถบพระราม2 - จอมทอง)',
    value: '0-1',
    key: '0-1',
    children: [{
      title: 'บริเวณ พระราม 2',
      value: '0-1-0',
      key: '0-1-0',
    }, {
      title: 'บริเวณ จอมทอง',
      value: '0-1-1',
      key: '0-1-1',
    }, {
      title: 'บริเวณ บางมด',
      value: '0-1-2',
      key: '0-1-2',
    }],
  }]
}]


class ZoneSearch extends React.Component {
  state = {
    value: [],
  }

  onChange = (value) => {
    this.setState({ value });
  }

  render() {
    const SHOW_PARENT = TreeSelect.SHOW_PARENT;
    const tProps = {
      treeData: treeZonesData,
      value: this.state.value,
      onChange: this.onChange,
      treeCheckable: true,
      showSearch: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: 'Please select',
      treeDefaultExpandedKeys: ["0"],
      style: {
        width: "100%",
      },
    };
    return <TreeSelect {...tProps} />
  }
}


export default withNamespaces('findescorts')(SearchForm)