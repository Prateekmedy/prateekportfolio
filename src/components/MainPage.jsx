import React, { Component } from 'react';
import LandingPage from './LandingPage'
import ProjectPage from './ProjectPage';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
			isProjectOpen : false,
			selectedProject : [],
            portfolioSection: false
        }  
    }

    goToProject = (project, isProjectOpen, portfolioSection) => {
		this.setState({ isProjectOpen : isProjectOpen, selectedProject : project, portfolioSection });
	}

    render() { 
        // console.log("MainPage mounted");
        return ( 
            <>
                {
                    this.state.isProjectOpen?
                    <ProjectPage selectedProject={this.state.selectedProject} goToProject={this.goToProject}/>
                    :<LandingPage portfolioSection={this.state.portfolioSection} portfolioRecord={this.props.portfolioRecord} personalRecord={this.props.personalRecord} skillsRecord={this.props.skillsRecord} goToProject={this.goToProject}/>
                }
            </>
         );
    }
}
 
export default MainPage;