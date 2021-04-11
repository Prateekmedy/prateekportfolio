import React, { Component } from 'react';
import Tilt from 'react-tilt';

class PortfolioGallary extends Component {
    
    constructor(props){
        super(props);
        console.log(props.portfolioRecord.projects);
        this.state = {
            projects : props.portfolioRecord.projects
        }
    }

    componentDidMount(){
        this.filterSelection('all');
        this.addActiveClass();
    }
    
    filterSelection = c => {
        let x, i;
        x = document.getElementsByClassName("card-conatiner");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
            this.removeClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) this.addClass(x[i], "show");
        }
    }

    addClass = (element, name) => {
        let i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
        }
    }

    removeClass = (element, name) => {
        let i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);     
            }
        }
        element.className = arr1.join(" ");
    }

    addActiveClass = () => {
        let btns = document.getElementsByClassName("filter-btn");
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function(){
                let current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
    }
    

    render() { 
        return ( 
            <div className="container">
							  
                <div className="filters">
                <ul>
                    <li className="filter-btn active" data-filter="*" onClick={() => this.filterSelection('all')}>ALL</li>
                    <li className="filter-btn" data-filter=".corporate" onClick={() => this.filterSelection('web')}>WEB DEV</li>
                    <li className="filter-btn" data-filter=".personal" onClick={() => this.filterSelection('ui')}>UI/UX</li>
                    <li className="filter-btn" data-filter=".agency" onClick={() => this.filterSelection('blockchain')}>BLOCKCHAIN</li>
                </ul>
                </div>
                
                <div className="filters-content">
                    <div className="portfolio-card-container grid">
                        {
                            this.state.projects.map(project => {
                                return(
                                    <div key={project.id} className={`card-conatiner ${project.data.tag}`}>
                                    <a href="./no-sidebar.html">
                                        <Tilt className="card" options={{maxTilt:20,glare:true,maxGlare:0.25,axis:'x'}}  > 
                                            <div className="background-img"></div>
                                            <div className="title-plate">
                                                <div className="portfolio-title">DigiVote</div>
                                                <div className="tech-badge-container">
                                                    {
                                                        project.data.tools.map(tool=>{
                                                            return( 
                                                                <div key={tool} className="tech-badge">{tool}</div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </Tilt>
                                    </a>
                                </div>
                                )
                            })
                        }     
                    </div>
                </div> 

            </div>
						
         );
    }
}
 
export default PortfolioGallary;