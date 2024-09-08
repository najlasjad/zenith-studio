import React from "react";
import Header from "../containers/Header";
import Footer from "../containers/Footer";

const About = () => {
    return (
        <div>
            <Header></Header>
            <div
                style={{
                    backgroundImage: `url(${require('../img/bg-about.jpg')})`,
                    height: '100vh',
                    width: '100vw',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <div className="container">
                    <h1
                        className="text-end"
                        style={{
                            color: 'white',
                            fontSize: '75px'
                        }}>Zenith Story</h1>
                </div>
            </div>
            <div
                className="p-5"
                style={{
                    width: '100vw',
                    backgroundColor: '#aca3de',
                    height: '100vh',
                    color: 'white'
                }}>
                <h1 style={{
                        textAlign: 'center'
                    }}>MILESTONE</h1>
                <div
                    className="container"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                    <div
                        className="card"
                        style={{
                            width: '75vw',
                            margin: '30px',
                            borderRadius: '10px',
                            boxShadow: '0px 0px 10px 1px white',
                            border: '0px'
                        }}>
                        <div className="card-body">
                            <h5 className="card-title">2021</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Dolores architecto dolor sapiente. Incidunt eligendi harum id cum sint
                                quidem perferendis illum ducimus atque ipsa iusto repellat esse eveniet vitae
                                natus, praesentium impedit fugit in quas temporibus tenetur debitis. Vel libero
                                perferendis nam repellendus enim, nisi ipsam atque veniam culpa nobis!</p>
                        </div>
                    </div>

                    <div
                        className="card"
                        style={{
                            width: '75vw',
                            margin: '30px',
                            borderRadius: '10px',
                            boxShadow: '0px 0px 10px 1px white',
                            border: '0px'
                        }}>
                        <div className="card-body">
                            <h5 className="card-title">2022</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Dolores architecto dolor sapiente. Incidunt eligendi harum id cum sint
                                quidem perferendis illum ducimus atque ipsa iusto repellat esse eveniet vitae
                                natus, praesentium impedit fugit in quas temporibus tenetur debitis. Vel libero
                                perferendis nam repellendus enim, nisi ipsam atque veniam culpa nobis!</p>
                        </div>
                    </div>

                    <div
                        className="card"
                        style={{
                            width: '75vw',
                            margin: '30px',
                            borderRadius: '10px',
                            boxShadow: '0px 0px 10px 1px white',
                            border: '0px'
                        }}>
                        <div className="card-body">
                            <h5 className="card-title">2023</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Dolores architecto dolor sapiente. Incidunt eligendi harum id cum sint
                                quidem perferendis illum ducimus atque ipsa iusto repellat esse eveniet vitae
                                natus, praesentium impedit fugit in quas temporibus tenetur debitis. Vel libero
                                perferendis nam repellendus enim, nisi ipsam atque veniam culpa nobis!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    backgroundImage: `url(${require('../img/about-bg.png')})`,
                    height: '100vh',
                    width: '100vw',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                <h1
                    style={{
                        textAlign: 'center',
                        color: 'white',
                        marginTop: '75px'
                    }}>LOCATION</h1>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8381532848152!2d107.16797137503514!3d-6.284994961518935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6984caf54df305%3A0xb7156354ad963e4d!2sPresident%20University%2C%20Jababeka%20Education%20Park%2C%20Cikarang%2C%20Bekasi!5e0!3m2!1sen!2sid!4v1725696775375!5m2!1sen!2sid"
                        width={1000}
                        height={500}
                        style={{
                            border: 0,
                            margin: '50px'

                        }}
                        allowFullScreen="allowFullScreen"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"/>
                </div>
            </div>

            <div style={{
                    backgroundColor: '#4a3d6e',
                    color: 'white',
                    height: '100vh',
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: '100vh'
                }}>
                <h1
                    style={{
                        textAlign: 'center',
                        padding: '50px'
                    }}>CONTACT US</h1>

                <form className="form" style={{ 
                    width: '50%', 
                    margin: '0 auto',
                    color: 'black',
                    backgroundColor: 'white',
                    border: '1px solid white',
                    borderRadius: '20px',
                    boxShadow: '0px 0px 10px 1px white',
                    padding: '20px'
                }}>
                    <div className="px-3 py-2">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="px-3 py-2">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="px-3 py-2">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea 
                            className="form-control" 
                            id="message" 
                            style={{ width: '100%', height: '100px' }} 
                        />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '15px' }}> 
                        <button type="submit" className="btn btn-primary">Submit</button> 
                    </div>
                </form>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default About;