import './App.css';
import './css/flickity.min.css'
import './css/main.css';
import './css/customcss.css';
import './css/filterGallary.css';

import React, { Component } from 'react';
import Loader from './components/Loader';
import DaoUtil from './js/daoUtil';
import MainPage from './components/MainPage'

class App extends Component {

	constructor(props) {
        super(props);
        this.state = {
			loader:true,
			isProjectOpen : false,
			selectedProject : [],
            personalRecord : {},
            skillsRecord : {},
            certRecord : {},
            contactRecord : {},
            socialRecord : {},
            portfolioRecord : {}
        }  
    }

    componentDidMount(){
        this.fetchCompleteData();
		setTimeout(() => {
			this.setState({ loader : false })
		}, 2000)
		// this.loading = setInterval(this.waitForData(), 500);
    }

	waitForData = () => {
		if(this.state.portfolioRecord.projects != undefined && this.state.portfolioRecord.projects.length > 0){
			console.log("yaaha aagaya");
			this.setState({loader:false});
			clearInterval(this.loading);
		}	
	}

	

    fetchCompleteData = async() => {
        const daoUtilObj = new DaoUtil();
        // console.log(daoUtilObj);
        
        await daoUtilObj.getPortfolioRecord.then(projects => {
            this.setState({ portfolioRecord : { ...this.state.portfolioRecord, projects} })
        },error => {
            console.log(error)
        })
        await daoUtilObj.getPersonalRecord.then(personal => {
            this.setState({ personalRecord : { ...this.state.personalRecord, personal} })
        },error => {
            console.log(error)
        })
        await daoUtilObj.getSkillsRecord.then(skill => {
            this.setState({ skillsRecord : { ...this.state.skillsRecord, skill} })
        },error => {
            console.log(error)
        })
        await daoUtilObj.getCertificatesRecord.then(cert => {
            this.setState({ certRecord : { ...this.state.certRecord, cert} })
        },error => {
            console.log(error)
        })
        await daoUtilObj.getContactRecord.then(contact => {
            this.setState({ contactRecord : { ...this.state.contactRecord, contact} })
        },error => {
            console.log(error)
        })
        await daoUtilObj.getSocialRecord.then(social => {
            this.setState({ socialRecord : { ...this.state.socialRecord, social} })
        },error => {
            console.log(error)
        })
    }	

	render(){
		console.log("App mounted");
	
		return (
			<>
				{
					this.state.loader?
					<Loader />
					:<MainPage portfolioRecord={this.state.portfolioRecord} />
				}
			</>
		)};
}

export default App;