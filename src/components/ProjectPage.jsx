import React, { Component } from 'react';
import ProjectImgCarousel from './ProjectImgCarousel';
import Hi from '../svg/Hi.svg';
import MyName from '../svg/I-am-Prateek.svg';
import Designation from '../svg/a-Web-Creator.svg';
import LeftBlack from '../svg/Group2.svg';
import LogoConatiner from '../svg/Group1.svg';
import parse from 'html-react-parser';

class ProjectPage extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
    }

    state = {  }
    render() { 
        // console.log("ProjectPage mounted");
        let project_url = this.props.selectedProject.link;
        let project_github_url = this.props.selectedProject['github link'];
        let project_youtube_url = this.props.selectedProject.youtube_link;
        return ( 
            <div id="page-wrapper">
                <section id="header" className="wrapper">

                    <section className="row about-section">
                        <div className="col-6-xlarge col-6-large col-6-medium col-12-small landing-intro">
                            <div className="hi" style={{ backgroundImage: `url(${Hi})` }}></div>
                            <div className="my-name" style={{ backgroundImage: `url(${MyName})` }}></div>
                            <div className="designation" style={{ backgroundImage: `url(${Designation})` }}></div>
                        </div>
                        <div className="col-6-xlarge col-6-large col-6-medium col-12-small logo-container" style={{ backgroundImage: `url(${LogoConatiner})` }}></div>
                        <div className="col-12-xlarge col-12-large col-12-medium col-12-small parallel-design left-black" style={{ backgroundImage: `url(${LeftBlack})` }}></div>
                    </section>

                    <nav id="nav">
                        <ul>
                            <li className="current"><span onClick={() => this.props.goToProject([], false) }>Home</span></li>
                            <li><span onClick={() => this.props.goToProject([], false)} >About Me</span></li>
                            <li><span onClick={() => this.props.goToProject([], false)} >Portfolio</span></li>
                            <li><span onClick={() => this.props.goToProject([], false)} >Meet Me</span></li>
                        </ul>
                    </nav>						

                </section>

                <div id="project" className="wrapper style2">
                    <div className="title-black title">Portfolio</div>
                    <div className="container">

                         {/* Content */}
                            <div id="content">
                                <article className="box post">
                                    <header className="portfolio-title-name">
                                        <h2>{this.props.selectedProject.name}</h2>
                                        <p>{this.props.selectedProject.title}</p>
                                    </header>
                                    <div className="portfolio-gallary">
                                        <ProjectImgCarousel projectImages={this.props.selectedProject.images}/>
                                    </div>
                                    <div className="tech-badge-container2">
                                        {
                                            this.props.selectedProject.tools.map(tool => {
                                                return(
                                                    <div className="tech-badge2" key={tool}>{tool}</div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div>
                                        {
                                            (project_url !== '')
                                            && (
                                                <div className="project-link">Project Link: <a href={project_url} target="_blank" rel="noreferrer">{project_url}</a></div>
                                            ) 
                                        }
                                        {
                                            (project_youtube_url !== '')
                                            && (
                                                <div className="project-link">Project Youtube Link: <a href={project_youtube_url} target="_blank" rel="noreferrer">{project_youtube_url}</a></div>
                                            )
                                        }
                                        {
                                            (project_github_url !== '')
                                            && (
                                                <div className="project-link">Project Github Link: <a href={project_github_url} target="_blank" rel="noreferrer">{project_github_url}</a></div>
                                            )
                                        }
                                    </div>
                                    <div className="project-description">
                                        {
                                            parse(this.props.selectedProject.description)
                                        }
                                    </div>
                                </article>
                            </div>

                         {/* Social Icons  */}
                            <div className="social-icon-container">
                                <a className="social-icon-anchor" href="https://prateekmedy.github.io/prateekportfolio" target="_blank" rel="noreferrer"><span className="social-icon2"><svg style={{height: '25px',width: '25px',fill: '#fff'}} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 227.77 227.8"><style></style><path className="cls-1" d="M157.18,44.3A100.85,100.85,0,1,1,56.32,145.15,100.85,100.85,0,0,1,157.18,44.3h0m0-13a113.85,113.85,0,1,0,80.54,33.31h0a113.17,113.17,0,0,0-80.54-33.36Z" transform="translate(-43.31 -31.25)"/><path className="cls-1" d="M233.64,119.47c-.11-.64-2.42-3.54-3.92-5.37s-4.2-3.49-10.87-5.69c-4.11-1.35-7.59-1.69-12.7-2.11h-.57c-5.43-.44-8.55,0-10.57-.31s-7.39-.41-13.08-3.64h0a48.92,48.92,0,0,1-9.75-6.42,1.12,1.12,0,0,0-.14-.18l-.4-.39c-8.1-7.49-11.72-17.44-10.68-18.19.73-.53,3.22,3.89,9.77,7.47a37,37,0,0,0,12,3.83h.11c.87.15,1.77.31,2.7.38,3,.22,6,1,13.58,1.21,10.72.62,10.19.08,13.23.63,3.9.71,12.23,2.23,17.48,9.23,5.11,6.8,4.33,14.82,4,18.11C233.78,118.51,233.72,119,233.64,119.47Z" transform="translate(-43.31 -31.25)"/><path className="cls-1" d="M232.76,123.54a30.73,30.73,0,0,1-4,8.59,31.88,31.88,0,0,1-8.84,8.56,28.26,28.26,0,0,1-5.15,2.6c-8.76,2.79-18.09-.28-26.51-3.15-6.61-2.46-12.5-8.09-19.87-8.87a22.31,22.31,0,0,0-4.62-.15A19.1,19.1,0,0,0,151.19,137a18,18,0,0,0-2.43,3.67,18.4,18.4,0,0,0-1.26,3.39c-2.64,8.22,2.77,18,11.21,18.9a13.84,13.84,0,0,0,3.28,0,11.34,11.34,0,0,0,5.82-2.43,9.39,9.39,0,0,0,2.06-2.42c3.38-4.64-.34-9.3-3.81-13a1.32,1.32,0,0,1-.13-1.86,1.29,1.29,0,0,1,.64-.41,8.49,8.49,0,0,1,9.58,4.09,16.92,16.92,0,0,1-2.66,17.66,16.44,16.44,0,0,1-5.11,4,24.08,24.08,0,0,1-7.61,1.92,19.26,19.26,0,0,1-3.87-.06c-2.37.26-4.44-1.17-6.61-2.14,2.07,1.43,4.44,1.49,6.86,1.92a18.76,18.76,0,0,0,3.18,0,18,18,0,0,0,11.23-5,14,14,0,0,0,2.64-3.74c0-1.62,1.75-3.13,1.15-4.7a11.68,11.68,0,0,1-5.27,5.44,25.58,25.58,0,0,1-3.27,1.94,15.15,15.15,0,0,1-8.65,1.29c-11.23-1.26-16.73-14.93-11.72-24.45a17.68,17.68,0,0,1,2.38-3.93,20.71,20.71,0,0,1,11.4-6.87c1.48-.38,3.27-.82,4.8-1.05,4.95-.73,8.75-.56,14.12-1.24,9.61-1.23,30.63.93,34.29,1.13,0,0,1.24,0,4.41-.31,4.19-.42,8.51-.92,11.46-2.84C230.94,124.85,232.42,123.78,232.76,123.54Z" transform="translate(-43.31 -31.25)"/><path className="cls-1" d="M141.51,160.46c0,.14-.32-.42-.32-.42-5.14,7.91-11.64,15.51-16.16,24.07-.72,1.16-1.4,2.25-2,3.14a24.1,24.1,0,0,1-1.35,2c-.69.95-1.43,1.84-1.43,1.84l-.31.38a57,57,0,0,1-5.63,5.79c-2.22,1.65-3,2.31-3.78,2.91a72.8,72.8,0,0,1-14.25,8.92c12.41-9.66,19.44-17.43,23.64-23.39.6-.85,1.14-1.66,1.63-2.44,6.21-10.53,13.23-20.4,19.44-30.93.5,2-.47,4.19.25,6.26C141.34,159.25,141.42,159.87,141.51,160.46Z" transform="translate(-43.31 -31.25)"/><path className="cls-1" d="M108.17,182.4a22.58,22.58,0,0,0-5.24-7.4c-2-1.85-5.27-4.91-10.06-5.15-4-.2-7,1.7-9.31,3.14a23,23,0,0,0-5.86,5.36c.7-6.69,9-10.66,15.31-10.14s12.15,4.09,16.2,9.13C108.86,179,108.52,180.71,108.17,182.4Z" transform="translate(-43.31 -31.25)"/></svg></span></a>
                                <a className="social-icon-anchor" href="https://www.linkedin.com/in/prateekmedy/" target="_blank" rel="noreferrer"><span className="social-icon2"><svg className="svg-inline--fa fa-linkedin-in fa-w-14 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg></span></a>
                                <a className="social-icon-anchor" href="https://github.com/prateekmedy" target="_blank" rel="noreferrer"><span className="social-icon2"><svg className="svg-inline--fa fa-github-alt fa-w-15 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512" data-fa-i2svg=""><path fill="currentColor" d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path></svg></span></a>
                                <a className="social-icon-anchor" href="https://codepen.io/Prateekmedy" target="_blank" rel="noreferrer"><span className="social-icon2"><svg className="svg-inline--fa fa-codepen fa-w-16 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="codepen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"></path></svg></span></a>	    
                                <a className="social-icon-anchor" href="https://www.freecodecamp.org/prateekmedy" target="_blank" rel="noreferrer"><span className="social-icon2" style={{fontSize: '1.6em'}}><i className="fab fa-free-code-camp fa-w-16 fa-fw"></i></span></a>
                            
                            </div>

                         {/* Back Button */}
                            <div className="back_btn" onClick={() => this.props.goToProject([], false, true)}>
                                <span><i className="fas fa-arrow-left back_icon"></i></span>
                            </div>
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default ProjectPage;