import React, { Component } from 'react';
import LandingPage from './LandingPage'
import ProjectPage from './ProjectPage';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
			isProjectOpen : false,
			selectedProject : []
        }  
    }

    goToProject = (project, isProjectOpen) => {
		console.log(project);
		this.setState({ isProjectOpen : isProjectOpen, selectedProject : project });
	}

    render() { 
        console.log("MainPage mounted");
        return ( 
            <>
                {
                    this.state.isProjectOpen?
                    <ProjectPage selectedProject={this.state.selectedProject} goToProject={this.goToProject}/>
                    :<LandingPage portfolioRecord={this.props.portfolioRecord} personalRecord={this.props.personalRecord} goToProject={this.goToProject}/>
                }
            </>
         );
    }
}
 
export default MainPage;