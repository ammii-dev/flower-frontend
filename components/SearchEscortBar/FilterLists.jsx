
import style from './SearchEscortBar.scss'
import { Slider, Checkbox, Row, Col, Select, Switch, Icon, Button } from 'antd';
import { withNamespaces } from 'react-i18next';



class VerifiedAndGenderFilter extends React.Component{

  handleChange(selectedValue) {
    console.log('selected = ', selectedValue);
  }

  renderOptionRow = (option, i) => {
    return(
      <Select.Option key={i} value={option.value}>{option.label}</Select.Option>
    )
  }

  render() {
    const options = [
      { label: this.props.t('genderfilter1'), value: 'all' },
      { label: this.props.t('genderfilter2'), value: 'female' },
      { label: this.props.t('genderfilter3'), value: 'transgender' },
      { label: this.props.t('genderfilter4'), value: 'transgendercut' },
    ];
    const defaultOption = 'all'

    return(
      <div className={style.filter_item} style={{width: 190}}>
        <label className={style.filter_item_label}>
          {this.props.t('genderfilterlabel')}
        </label>
        <div className={style.verified_filter}>
          <Checkbox value='verifiedimg'><span>{this.props.t('imgverifiedonlyfilter')}</span></Checkbox>
        </div>
        <Select 
          defaultValue={this.props.t('genderfilter1')}
          style={{ width: '100%', display: "block", marginTop: 10}}
          onChange={this.handleChange}
          defaultValue={defaultOption}
        >
          {options.map((option, i) => (
              this.renderOptionRow(option, i)
            )
          )}
        </Select>
        
      </div>
    )
  }
}

class CheckboxFilter extends React.Component{

  onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

  renderCheckboxRow = (option, i) => {
    return(
      <Row key={i}>
        <Checkbox value={option.value}>{option.label}</Checkbox>
      </Row>
    )
  }
  render() {

    const options = [
      { label: this.props.t('servicefilter1'), value: 'bed' },
      { label: this.props.t('servicefilter2'), value: 'overnight' },
      { label: this.props.t('servicefilter3'), value: 'massage' },
      { label: this.props.t('servicefilter5'), value: 'fridge' },
    ];
    const defaultOption = [];

    return(
      <div className={style.filter_item} style={{width: 175, marginRight: 0}}>
        <label className={style.filter_item_label}>
          {this.props.t('servicefilterlabel')}
        </label>
        <Checkbox.Group defaultValue={defaultOption} style={{ width: '100%', marginTop: '5px' }} onChange={this.onChange}>
          {options.map((option, i) => (
              this.renderCheckboxRow(option, i)
            )
          )}
        </Checkbox.Group>
      </div>
    )
  }
}

class RateFilter extends React.Component{
  render() {
    const marks = {
      500: '≤500',
      1000: '1,000',
      1500: '1,500',
      2000: '2,000',
      2500: '2,500',
      3000: {
        style: {
          color: '#f50',
        },
        label: <strong>3,000≤</strong>,
      },
    };

    return(
      <div className={style.filter_item} style={{width: "300px"}}>
        <div className={style.filter_item_label}>
          {this.props.t('ratefilterlabel')}
        </div>
        <Slider 
          marks={marks}
          min={500}
          max={3000}
          range 
          step={500} 
          defaultValue={[500,3000]} 
        />
      </div>
    )
  }
}

const ButtonSet = (props) => (
  <div className={style.filter_item} style={{marginLeft: 20, display: "flex", alignItems: "center"}}>
    <Button type="primary">{props.t('applybtn')}</Button>
  </div>
)

class FilterLists extends React.Component{
  render() {
    return(
      <div className={style.filter_list_wrapper}>
      
        <CheckboxFilter {...this.props} />

        <VerifiedAndGenderFilter {...this.props} />
        
        <RateFilter {...this.props} />

        <ButtonSet {...this.props}/>
        
      </div>
    )
  }
}

export default withNamespaces('findescorts')(FilterLists)