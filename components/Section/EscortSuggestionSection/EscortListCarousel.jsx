

import React, { Component } from "react";
import Slider from "react-slick";
import './EscortSuggestionSection.scss'
import style from './EscortSuggestionSection.scss'
import AvatarCard from '../../Card/AvatarCard'
import AvatarListCard from '../../Card/AvatarListCard'
import escorts from '../../../static/datasets/testescortlist.json'


function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}


export default class MultipleItems extends Component {
  
  state = {
    escorts
  }

  async componentWillMount(context){
    var escorts = require('../../../static/datasets/testescortlist.json')
    this.state.escorts = escorts
  }

  renderAvatarCard = (escort) => {
    return (
      <div className={style.recommendedCard}>
        <AvatarCard {...escort} row={6}/>
      </div>
    )
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      lazyLoad: true,
      speed: 700,
      slidesToShow: 6,
      slidesToScroll: 1,
      nextArrow: <Arrow />,
      prevArrow: <Arrow />,
      responsive: [
        
        {
          breakpoint: 9999,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div style={{position: 'relative'}}>
        <Slider {...settings}>
          {this.state.escorts.map((escort, i) => 
            this.renderAvatarCard(escort)
          )}
        </Slider>
      </div>
    );
  }
}