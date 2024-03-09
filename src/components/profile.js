import React from 'react';

class Profile extends React.Component {

    state = {
        name: 'Nguyen Huu Do',
        job: 'Web Developer',
        phone: '0879638855',
        mail: 'nguyenhuudo1206@gmail.com',
        website: 'www.mywebsite.com',
        youtube: 'www.youtube.com',
        address: 'Lien Son, Dak Lak, Viet Nam',
        education_time_1: '2022 - 2025',
        education_graduate_1: 'Graduated with a college degree',
        education_school_1: 'FPT Polytechnic',
        education_time_2: '2022 - 2025',
        education_graduate_2: 'Graduated with a college degree',
        education_school_2: 'FPT Polytechnic',
        english: '90',
        japanese: '80',
        about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        experience_time_1: '2020 - PRECENT',
        experience_company_1: 'COMPANY NAME',
        experience_job_1: 'INTERN BACKEND DEVELOPER',
        experience_des_1: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        experience_time_2: '2020 - PRECENT',
        experience_company_2: 'COMPANY NAME',
        experience_job_2: 'INTERN BACKEND DEVELOPER',
        experience_des_2: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        experience_time_3: '2020 - PRECENT',
        experience_company_3: 'COMPANY NAME',
        experience_job_3: 'INTERN BACKEND DEVELOPER',
        experience_des_3: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        html: '90',
        css: '85',
        javascript: '75',
        php: '80',
    }

    handleValue = (event) => {
        let { name, value } = event.target;
        if (name == 'english' || name == 'japanese' || name == 'html' || name == 'css' || name == 'javascript' || name == 'php') {
            if (value < 0) {
                value = 0;
                this.setState({ [name]: value });
            } else if (value > 100) {
                value = 100;
                this.setState({ [name]: value });
            } else {
                this.setState({ [name]: value });
            }
        } else {
            this.setState({ [name]: value });
        }

    }

    displayConfig = (event) => {
        let wrapper = document.querySelector(".wrapper");
        wrapper.style.display = 'block';
    }

    hideConfig = (event) => {
        let wrapper = document.querySelector(".wrapper");
        wrapper.style.display = 'none';
    }

    render() {
        return (
            <>
                <div className="container">
                    <button className='config button-30' onClick={(event) => this.displayConfig(event)}>Config</button>
                    <div className="left-side">
                        <div className="profileText">
                            <div className="imgBx">
                                <img src={require('../avatar.jpg')} />
                            </div>
                            <h2>{this.state.name}<br></br><span>{this.state.job}</span></h2>
                        </div>
                        <div className="contactInfo">
                            <h3 className="title">Contact Info</h3>
                            <ul>
                                <li>
                                    <span className="icon"><i className="fa fa-phone" aria-hidden="true"></i></span>
                                    <span className="text">{this.state.phone}</span>
                                </li>
                                <li>
                                    <span className="icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                                    <span className="text">{this.state.mail}</span>
                                </li>
                                <li>
                                    <span className="icon"><i className="fa fa-globe" aria-hidden="true"></i></span>
                                    <span className="text">{this.state.website}</span>
                                </li>
                                <li>
                                    <span className="icon"><i className="fa fa-youtube-play" aria-hidden="true"></i></span>
                                    <span className="text">{this.state.youtube}</span>
                                </li>
                                <li>
                                    <span className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                                    <span className="text">{this.state.address}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="contactInfo education">
                            <h3 className="title">Education</h3>
                            <ul>
                                <li>
                                    <h5>{this.state.education_time_1}</h5>
                                    <h4>{this.state.education_graduate_1}</h4>
                                    <h4>{this.state.education_school_1}</h4>
                                </li>
                                <li>
                                    <h5>{this.state.education_time_2}</h5>
                                    <h4>{this.state.education_graduate_2}</h4>
                                    <h4>{this.state.education_school_2}</h4>
                                </li>
                            </ul>
                        </div>
                        <div className="contactInfo language">
                            <h3 className="title">Languages</h3>
                            <ul>
                                <li>
                                    <span className="text">English</span>
                                    <span className="percent">
                                        <div style={{ width: `${this.state.english}%` }}></div>
                                    </span>
                                </li>
                                <li>
                                    <span className="text">Japanese</span>
                                    <span className="percent">
                                        <div style={{ width: `${this.state.japanese}%` }}></div>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="about">
                            <h2 className="title2">About</h2>
                            <p>{this.state.about}</p>
                        </div>
                        <div className="about">
                            <h2 className="title2">Experience</h2>
                            <div className="box">
                                <div className="year_company">
                                    <h5>{this.state.experience_time_1}</h5>
                                    <h5>{this.state.experience_company_1}</h5>
                                </div>
                                <div className="text">
                                    <h4>{this.state.experience_job_1}</h4>
                                    <p>{this.state.experience_des_1}</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="year_company">
                                    <h5>{this.state.experience_time_2}</h5>
                                    <h5>{this.state.experience_company_2}</h5>
                                </div>
                                <div className="text">
                                    <h4>{this.state.experience_job_2}</h4>
                                    <p>{this.state.experience_des_2}</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="year_company">
                                    <h5>{this.state.experience_time_3}</h5>
                                    <h5>{this.state.experience_company_3}</h5>
                                </div>
                                <div className="text">
                                    <h4>{this.state.experience_job_3}</h4>
                                    <p>{this.state.experience_des_3}</p>
                                </div>
                            </div>
                        </div>
                        <div className="about skills">
                            <h2 className="title2">Professional Skills</h2>
                            <div className="box">
                                <h4>Html</h4>
                                <div className="percent">
                                    <div style={{ width: `${this.state.html}%` }}></div>
                                </div>
                            </div>
                            <div className="box">
                                <h4>Css</h4>
                                <div className="percent">
                                    <div style={{ width: `${this.state.css}%` }}></div>
                                </div>
                            </div>
                            <div className="box">
                                <h4>Javascript</h4>
                                <div className="percent">
                                    <div style={{ width: `${this.state.javascript}%` }}></div>
                                </div>
                            </div>
                            <div className="box">
                                <h4>Php</h4>
                                <div className="percent">
                                    <div style={{ width: `${this.state.php}%` }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="about interest">
                            <h2 className="title2">Interest</h2>
                            <ul>
                                <li><i className="fa fa-gamepad" aria-hidden="true"></i>Gaming</li>
                                <li><i className="fa fa-music" aria-hidden="true"></i>Music</li>
                                <li><i className="fa fa-film" aria-hidden="true"></i>Movie</li>
                                <li><i className="fa fa-handshake-o" aria-hidden="true"></i>Collecting</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='wrapper'>
                    <div className="container configLayout">
                        <button className='hide button-30' onClick={(event) => this.hideConfig(event)}>Hide</button>
                        <div className="left-side">
                            <div className="profileText">
                                <div className="imgBx">
                                    <img src={require('../avatar.jpg')} />
                                </div>
                                <h2><input name='name' onChange={(event) => this.handleValue(event)} value={this.state.name} /><br></br><span><input name='job' onChange={(event) => this.handleValue(event)} value={this.state.job} /></span></h2>
                            </div>
                            <div className="contactInfo">
                                <h3 className="title">Contact Info</h3>
                                <ul>
                                    <li>
                                        <span className="icon"><i className="fa fa-phone" aria-hidden="true"></i></span>
                                        <span className="text"><input name='phone' onChange={(event) => this.handleValue(event)} value={this.state.phone} /></span>
                                    </li>
                                    <li>
                                        <span className="icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                                        <span className="text"><input name='mail' onChange={(event) => this.handleValue(event)} value={this.state.mail} /></span>
                                    </li>
                                    <li>
                                        <span className="icon"><i className="fa fa-globe" aria-hidden="true"></i></span>
                                        <span className="text"><input name='website' onChange={(event) => this.handleValue(event)} value={this.state.website} /></span>
                                    </li>
                                    <li>
                                        <span className="icon"><i className="fa fa-youtube-play" aria-hidden="true"></i></span>
                                        <span className="text"><input name='youtube' onChange={(event) => this.handleValue(event)} value={this.state.youtube} /></span>
                                    </li>
                                    <li>
                                        <span className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                                        <span className="text"><input name='address' onChange={(event) => this.handleValue(event)} value={this.state.address} /></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="contactInfo education">
                                <h3 className="title">Education</h3>
                                <ul>
                                    <li>
                                        <h5><input name='education_time_1' onChange={(event) => this.handleValue(event)} value={this.state.education_time_1} /></h5>
                                        <h4><input name='education_graduate_1' onChange={(event) => this.handleValue(event)} value={this.state.education_graduate_1} /></h4>
                                        <h4><input name='education_school_1' onChange={(event) => this.handleValue(event)} value={this.state.education_school_1} /></h4>
                                    </li>
                                    <li>
                                        <h5><input name='education_time_2' onChange={(event) => this.handleValue(event)} value={this.state.education_time_2} /></h5>
                                        <h4><input name='education_graduate_2' onChange={(event) => this.handleValue(event)} value={this.state.education_graduate_2} /></h4>
                                        <h4><input name='education_school_2' onChange={(event) => this.handleValue(event)} value={this.state.education_school_2} /></h4>
                                    </li>
                                </ul>
                            </div>
                            <div className="contactInfo language">
                                <h3 className="title">Languages</h3>
                                <ul>
                                    <li>
                                        <span className="text">English</span>
                                        <span className="percent">
                                            <input name='english' onChange={(event) => this.handleValue(event)} value={this.state.english} />
                                        </span>
                                    </li>
                                    <li>
                                        <span className="text">Japanese</span>
                                        <span className="percent">
                                            <input name='japanese' onChange={(event) => this.handleValue(event)} value={this.state.japanese} />
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="about">
                                <h2 className="title2">About</h2>
                                <p><input name='about' onChange={(event) => this.handleValue(event)} value={this.state.about} /></p>
                            </div>
                            <div className="about">
                                <h2 className="title2">Experience</h2>
                                <div className="box">
                                    <div className="year_company">
                                        <h5><input name='experience_time_1' onChange={(event) => this.handleValue(event)} value={this.state.experience_time_1} /></h5>
                                        <h5><input name='experience_company_1' onChange={(event) => this.handleValue(event)} value={this.state.experience_company_1} /></h5>
                                    </div>
                                    <div className="text">
                                        <h4><input name='experience_job_1' onChange={(event) => this.handleValue(event)} value={this.state.experience_job_1} /></h4>
                                        <p><input name='experience_des_1' onChange={(event) => this.handleValue(event)} value={this.state.experience_des_1} /></p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="year_company">
                                        <h5><input name='experience_time_2' onChange={(event) => this.handleValue(event)} value={this.state.experience_time_2} /></h5>
                                        <h5><input name='experience_company_2' onChange={(event) => this.handleValue(event)} value={this.state.experience_company_2} /></h5>
                                    </div>
                                    <div className="text">
                                        <h4><input name='experience_job_2' onChange={(event) => this.handleValue(event)} value={this.state.experience_job_2} /></h4>
                                        <p><input name='experience_des_2' onChange={(event) => this.handleValue(event)} value={this.state.experience_des_2} /></p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="year_company">
                                        <h5><input name='experience_time_3' onChange={(event) => this.handleValue(event)} value={this.state.experience_time_3} /></h5>
                                        <h5><input name='experience_company_3' onChange={(event) => this.handleValue(event)} value={this.state.experience_company_3} /></h5>
                                    </div>
                                    <div className="text">
                                        <h4><input name='experience_job_3' onChange={(event) => this.handleValue(event)} value={this.state.experience_job_3} /></h4>
                                        <p><input name='experience_des_3' onChange={(event) => this.handleValue(event)} value={this.state.experience_des_3} /></p>
                                    </div>
                                </div>
                            </div>
                            <div className="about skills">
                                <h2 className="title2">Professional Skills</h2>
                                <div className="box">
                                    <h4>Html</h4>
                                    <div className="percent">
                                        <input name='html' onChange={(event) => this.handleValue(event)} value={this.state.html} />
                                    </div>
                                </div>
                                <div className="box">
                                    <h4>Css</h4>
                                    <div className="percent">
                                        <input name='css' onChange={(event) => this.handleValue(event)} value={this.state.css} />
                                    </div>
                                </div>
                                <div className="box">
                                    <h4>Javascript</h4>
                                    <div className="percent">
                                        <input name='javascript' onChange={(event) => this.handleValue(event)} value={this.state.javascript} />
                                    </div>
                                </div>
                                <div className="box">
                                    <h4>Php</h4>
                                    <div className="percent">
                                        <input name='php' onChange={(event) => this.handleValue(event)} value={this.state.php} />
                                    </div>
                                </div>
                            </div>
                            <div className="about interest">
                                <h2 className="title2">Interest</h2>
                                <ul>
                                    <li><i className="fa fa-gamepad" aria-hidden="true"></i>Gaming</li>
                                    <li><i className="fa fa-music" aria-hidden="true"></i>Music</li>
                                    <li><i className="fa fa-film" aria-hidden="true"></i>Movie</li>
                                    <li><i className="fa fa-handshake-o" aria-hidden="true"></i>Collecting</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Profile;