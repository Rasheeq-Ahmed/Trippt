import React from 'react';
import NavBar from '../nav/navbar_container';
import { Link } from 'react-router-dom';
import './about.css'
class About extends React.Component {

    render() {
        return (
            <div className="about-all">
                <div className="about-header">
                    <NavBar />
                </div>
                <div className="about-body">
                    
                    <div className="about-people-all">
                        <h1 id='team'>Team</h1>
                        <div className="about-team-members">
                            
                            <div className="person">
                                <div className="person-pic">
                                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQE2m-9v0zZZ7g/profile-displayphoto-shrink_800_800/0?e=1604534400&v=beta&t=kTrQKP9p38X9Mny3Nmfw2e7kCTDRdDtKJ4iRLeLI-84" alt=""/>
                                </div>
                                <div className="person-name">Rasheeq Ahmed</div>
                                <div className="person-links">
                                    <a href="https://www.linkedin.com/in/rasheeq-ahmed-53b7aa91/" target="_blank">
                                        <img id="linked-icon" src="https://i.imgur.com/Xm1qtqN.png" />
                                    </a>
                                    <a href="https://github.com/Rasheeq-Ahmed" target="_blank">
                                        <img id="git-icon" src="https://i.imgur.com/vwPks93.png" />
                                    </a>
                                </div>

                            </div>
                            <div className="person">
                                <div className="person-pic">
                                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHpVC12czSFEQ/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=LZCCOIV9PXZBlznYV1igk5oSjbYodkH4QWiyvpBygoM" alt="" />
                                </div>
                                <div className="person-name">Eric Chen</div>

                                <div className="person-links">
                                    <a href="https://www.linkedin.com/in/eric-chen-782b951a9/" target="_blank">
                                    <img id="linked-icon" src="https://i.imgur.com/Xm1qtqN.png" />     
                                    </a>
                                    <a href="https://github.com/echen831" target="_blank">
                                    <img id="git-icon" src="https://i.imgur.com/vwPks93.png" />
                                </a>
                                </div>
                            </div>
                            <div className="person">
                                <div className="person-pic">
                                    <img src="https://i.imgur.com/mazuIha.png" alt="" />
                                </div>
                                <div className="person-name">Hari Sachdeva</div>

                                <div className="person-links">
                                    <a href="https://www.linkedin.com/in/hari-sachdeva-8748051a6/" target="_blank">
                                        <img id="linked-icon" src="https://i.imgur.com/Xm1qtqN.png" />     
                                    </a>
                                    <a href="https://github.com/hsachdeva01/" target="_blank">
                                        <img id="git-icon" src="https://i.imgur.com/vwPks93.png"/>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="about-proj">
                        <div className="about-proj-tech">
                                <div className="tech-title">
                                    <h1>Technology Stack</h1>
                                </div>
                                <div className="tech-icons">
                                <ul>
                                    <li><img id='mongo-icon' src="https://i.imgur.com/jxRlWB8.png?1" alt="" /></li>
                                    <li><img id='express-icon' src="https://i.imgur.com/kzwtQKS.png" alt="" /></li>
                                    <li><img src="https://i.imgur.com/8FAHjk2.png" alt="" /></li>
                                    <li><img src="https://i.imgur.com/aRRChFH.png" alt="" /></li>
                                </ul>
                                </div>
                           
                        </div>
                    </div>
                </div>

                <div className="about-footer"></div>
            </div>
        );
    }
}

export default About;