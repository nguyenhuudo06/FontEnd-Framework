function Profile() {
    return (
        <div className="container">
            <div className="left-side">
                <div className="profileText">
                    <div className="imgBx">
                        <img src={require('../avatar.jpg')} />
                    </div>
                    <h2>Nguyen Huu Do<br></br><span>Web Developer</span></h2>
                </div>
                <div className="contactInfo">
                    <h3 className="title">Contact Info</h3>
                    <ul>
                        <li>
                            <span className="icon"><i class="fa fa-phone" aria-hidden="true"></i></span>
                            <span className="text">0879638855</span>
                        </li>
                        <li>
                            <span className="icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                            <span className="text">nguyenhuudo1206@gmail.com</span>
                        </li>
                        <li>
                            <span className="icon"><i class="fa fa-globe" aria-hidden="true"></i></span>
                            <span className="text">www.mywebsite.com</span>
                        </li>
                        <li>
                            <span className="icon"><i class="fa fa-youtube-play" aria-hidden="true"></i></span>
                            <span className="text">www.youtube.com</span>
                        </li>
                        <li>
                            <span className="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                            <span className="text">Lien Son, Dak Lak, Viet Nam</span>
                        </li>
                    </ul>
                </div>
                <div className="contactInfo education">
                    <h3 className="title">Education</h3>
                    <ul>
                        <li>
                            <h5>2022 - 2025</h5>
                            <h4>Graduated with a college degree</h4>
                            <h4>FPT Polytechnic</h4>
                        </li>
                        <li>
                            <h5>2022 - 2025</h5>
                            <h4>Graduated with a college degree</h4>
                            <h4>FPT Polytechnic</h4>
                        </li>
                    </ul>
                </div>
                <div className="contactInfo language">
                    <h3 className="title">Languages</h3>
                    <ul>
                        <li>
                            <span className="text">English</span>
                            <span className="percent">
                                <div style={{ width: "90%" }}></div>
                            </span>
                        </li>
                        <li>
                            <span className="text">Japanese</span>
                            <span className="percent">
                                <div style={{ width: "80%" }}></div>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="right-side">
                <div className="about">
                    <h2 className="title2">About</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel quas reiciendis itaque unde quam quasi qui iure quidem esse repudiandae debitis cum reprehenderit nulla, distinctio dicta mollitia culpa nisi expedita?</p>
                </div>
                <div className="about">
                    <h2 className="title2">Experience</h2>
                    <div className="box">
                        <div className="year_company">
                            <h5>2020 - Precent</h5>
                            <h5>Company name</h5>
                        </div>
                        <div className="text">
                            <h4>Intern Backend Developer</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel quas reiciendis itaque unde quam quasi qui iure quidem esse repudiandae debitis cum reprehenderit nulla</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="year_company">
                            <h5>2020 - Precent</h5>
                            <h5>Company name</h5>
                        </div>
                        <div className="text">
                            <h4>Intern Backend Developer</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel quas reiciendis itaque unde quam quasi qui iure quidem esse repudiandae debitis cum reprehenderit nulla</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="year_company">
                            <h5>2020 - Precent</h5>
                            <h5>Company name</h5>
                        </div>
                        <div className="text">
                            <h4>Intern Backend Developer</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel quas reiciendis itaque unde quam quasi qui iure quidem esse repudiandae debitis cum reprehenderit nulla</p>
                        </div>
                    </div>
                </div>
                <div className="about skills">
                    <h2 className="title2">Professional Skills</h2>
                    <div className="box">
                        <h4>Html</h4>
                        <div className="percent">
                            <div style={{ width: "90%" }}></div>
                        </div>
                    </div>
                    <div className="box">
                        <h4>Css</h4>
                        <div className="percent">
                            <div style={{ width: "85%" }}></div>
                        </div>
                    </div>
                    <div className="box">
                        <h4>Javascript</h4>
                        <div className="percent">
                            <div style={{ width: "75%" }}></div>
                        </div>
                    </div>
                    <div className="box">
                        <h4>Php</h4>
                        <div className="percent">
                            <div style={{ width: "80%" }}></div>
                        </div>
                    </div>
                </div>
                <div className="about interest">
                    <h2 className="title2">Interest</h2>
                    <ul>
                        <li><i class="fa fa-gamepad" aria-hidden="true"></i>Gaming</li>
                        <li><i class="fa fa-music" aria-hidden="true"></i>Music</li>
                        <li><i class="fa fa-film" aria-hidden="true"></i>Movie</li>
                        <li><i class="fa fa-handshake-o" aria-hidden="true"></i>Collecting</li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Profile;