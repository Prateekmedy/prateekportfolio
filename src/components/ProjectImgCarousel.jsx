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
        console.log(this.props.projectImages)
      return (
        <Flickity 
            className={'carousel'}      
            options={this.flickityOptions} 
        >
          {
            this.props.projectImages.map(image => {
              return(
                <div key={image} className="carousel-cell" style={{backgroundImage:`url(${image})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'}}></div>
              )
            })
          }
        </Flickity>
      )
    }
}

export default ProjectImgCarousel;