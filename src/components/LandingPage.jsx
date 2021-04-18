import React, { Component } from 'react';
import RadarSkillsChart from './RadarSkillsChart'
import PortfolioGallary from './PortfolioGalary'
import Hi from '../svg/Hi.svg';
import MyName from '../svg/I-am-Prateek.svg';
import Designation from '../svg/a-Web-Creator.svg';
import LeftBlack from '../svg/Group2.svg';
import Right from '../svg/Group3.svg';
import Left from '../svg/Group4.svg';
import PhotoContainer from '../svg/image1-removebg-preview.svg';
import NamePlate from '../svg/Line1.svg';
import LogoConatiner from '../svg/Group1.svg';

class LandingPage extends Component {
    constructor(props){
        super(props);
    }
    state = {  }
    render() { 
        console.log("Landing Page mounted");
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
                            <li className="current"><a href="#">Home</a></li>
                            <li><a href="#main">About Me</a></li>
                            <li><a href="#highlights">Portfolio</a></li>
                            <li><a href="#footer">Meet Me</a></li>
                        </ul>
                    </nav>						

                </section>

                <section id="main" className="wrapper style2">
                    <div id="about-title" className="title">About Me</div>
                    <div className="parallel-design right" style={{ backgroundImage: `url(${Right})` }}></div>
                    <div className="about-me-container">
                        <section className="row about-section">
                            <div className="col-6-xlarge col-6-large col-6-medium col-12-small photo-container" style={{ backgroundImage: `url(${PhotoContainer})` }}></div>
                            <div className="col-6-xlarge col-6-large col-6-medium col-12-small discription">
                                <div className="name">Prateek Patel</div>
                                <div className="name-plate" style={{ backgroundImage: `url(${NamePlate})` }}></div>
                                <div className="about-discription">
                                    I love Web Development as profession and 
                                    Designing as passion. I like to keep learning, 
                                    continue challenging myself, and do something
                                    interesting with paper & pencil that matters.
                                    <br />
                                    <br />
                                    I am Fuelled with high level of enthusiasm and 
                                    willing to follow my passion wherever it takes 
                                    me. I am honest and committed to my work.
                                </div>
                                <div className="resume-btn-container">
                                    <a href="https://prateekmedy.github.io/prateekresume" target="_blank" className="btn resume-btn">View Resume</a>
                                    <div className="fab_icon">
                                        <a href="/build/assets/documents/MyResume.pdf" download="Prateek_Patel_Resume_Web_Developer"><i className="fas fa-cloud-download-alt save_icon"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12-xlarge col-12-large col-12-medium col-12-small skills-chart">
                                <div id="skillsChart"><RadarSkillsChart /></div>
                            </div>
                        </section>
                        
                    </div>
                    <div className="parallel-design left" style={{ backgroundImage: `url(${Left})` }}></div>
                </section>

                <section id="highlights" className="wrapper style3">
                    <div className="title">Portfolio</div>
                    <div className="container">
                        <section className="portfolio section">
                            <PortfolioGallary portfolioRecord={this.props.portfolioRecord} goToProject={this.props.goToProject} />
                        </section>

                    </div>
                </section>

                <section id="footer" className="wrapper">
                    <div className="title">Want to Meet</div>
                    <div className="container">
                        <header className="style1">
                            <h2>Let's Explore Me More</h2>
                        </header>
                        <div className="row">
                            <div className="col-6 col-12-medium">

                                    <section>
                                        <form method="post" action="#">
                                            <div className="row gtr-50">
                                                <div className="col-6 col-12-small">
                                                    <input type="text" name="name" id="contact-name" placeholder="Name" />
                                                </div>
                                                <div className="col-6 col-12-small">
                                                    <input type="text" name="email" id="contact-email" placeholder="Email" />
                                                </div>
                                                <div className="col-12">
                                                    <textarea name="message" id="contact-message" placeholder="Message" rows="4"></textarea>
                                                </div>
                                                <div className="col-12">
                                                    <ul className="actions">
                                                        <li><input type="submit" className="style1" value="Send" /></li>
                                                        <li><input type="reset" className="style2" value="Reset" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </form>
                                    </section>

                            </div>
                            <div className="col-6 col-12-medium">

                                    <section className="feature-list small">
                                        <div className="row margin-left-2em">
                                            <div className="col-12 col-12-small">
                                                <section>
                                                    <h3 className="icon solid fa-comment">Social</h3>
                                                    <p>
                                                        <a className="social-icon-anchor" href="https://www.linkedin.com/in/prateekmedy/" target="_blank"><span className="fa-container text-center mr-2 social-icon"><svg className="svg-inline--fa fa-linkedin-in fa-w-14 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg></span>linkedin.com/in/prateekmedy</a>
                                                        <br/>
                                                        <a className="social-icon-anchor" href="https://github.com/prateekmedy" target="_blank"><span className="fa-container text-center mr-2 social-icon"><svg className="svg-inline--fa fa-github-alt fa-w-15 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512" data-fa-i2svg=""><path fill="currentColor" d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path></svg></span>github.com/prateekmedy</a>
                                                        <br/>
                                                        <a className="social-icon-anchor" href="https://codepen.io/Prateekmedy" target="_blank"><span className="fa-container text-center mr-2 social-icon"><svg className="svg-inline--fa fa-codepen fa-w-16 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="codepen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"></path></svg></span>codepen.io/prateekmedy/</a>
                            
                                                    </p>
                                                </section>
                                            </div>
                                            <div className="col-12 col-12-small">
                                                <section>
                                                    <h3 className="icon solid fa-envelope">Email</h3>
                                                    <p>
                                                        prateekmedy@gmail.com
                                                    </p>
                                                </section>
                                            </div>
                                        </div>
                                    </section>

                            </div>
                        </div>
                        <div id="copyright">
                            <ul>
                                <li>&copy; Prateek Patel 2021.</li><li>Re-design By: Prateek Patel</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default LandingPage;