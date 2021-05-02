import React, { Component } from 'react';
import Flickity from 'react-flickity-component'

class ProjectImgCarousel extends React.Component {

    constructor(props){
        super(props)
        this.flickityOptions = {
            initialIndex: 0,
            cellSelector: '.carousel-cell',
            accessibility: true,
            pageDots: true,
            wrapAround: true
        }
    }  
  
    render() {
        console.log("ProjectImgCarousel mounted");
      return (
        <Flickity 
            className={'carousel'}      
            options={this.flickityOptions} 
        >
          <div className="carousel-cell"></div>
          <div className="carousel-cell"></div>
          <div className="carousel-cell"></div>
          <div className="carousel-cell"></div>
          <div className="carousel-cell"></div>
        </Flickity>
      )
    }
}

export default ProjectImgCarousel;