import React from "react";
import Header from "../containers/Header";
import Footer from "../containers/Footer";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div
                style={{
                    height: '100vh',
                    width: '100vw',
                    backgroundImage: `url(${require('../img/blob-scene-haikei.png')})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <div className="container d-flex justify-content-around">
                    <div>
                        <img
                            src={require("../img/art.png")}
                            alt=""
                            style={{
                                width: '450px'
                            }}/>
                    </div>
                    <div
                        className="text-end d-flex flex-column justify-content-center"
                        style={{
                            width: '600px',
                            height: '100vh',
                            color: 'white'
                        }}>
                        <p className="fs-2 fw-bolder">
                            How important <span
                                style={{
                                    color: '#E2BBE9'
                                }}>
                                Arts</span> are in our life?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, pariatur
                            quis, hic dolore rem nemo exercitationem modi sequi provident aspernatur
                            ducimus? Cupiditate minima iste minus, dolorum fuga, tempora recusandae possimus
                            ducimus aliquam mollitia, eos illo officiis similique porro accusantium.
                            Assumenda ipsa aspernatur qui. Repellendus tempore quaerat iure eligendi animi
                            veritatis?</p>
                    </div>
                </div>
            </div>
            <div
                style={{
                    height: '100vh',
                    width: '100vw',
                    backgroundColor: '#f8eaff',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <h1 className="text-center pt-5" style={{  color: '#B692C2' }}>Articles</h1>
                <div className="container d-flex justify-content-center">
                    <div
                        className="card"
                        style={{
                            width: '18rem',
                            margin: '50px'
                        }}>
                        <img src={require('../img/crochet.jpg')} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Easy Way to Crochet</h5>
                            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing
                                elit. Rem quos, sed tempora impedit praesentium blanditiis.</p>
                            <a href="#" className="btn btn-primary">Read</a>
                        </div>
                    </div>
                    <div
                        className="card"
                        style={{
                            width: '18rem',
                            margin: '50px'
                        }}>
                        <img src={require('../img/painting.jpg')} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Relief Stress with Painting</h5>
                            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing
                                elit. Reiciendis doloremque, maiores earum porro soluta quibusdam?</p>
                            <a href="#" className="btn btn-primary">Read</a>
                        </div>
                    </div>
                    <div
                        className="card"
                        style={{
                            width: '18rem',
                            margin: '50px'
                        }}>
                        <img src={require('../img/beaded.jpg')} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Make Your Income!</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Exercitationem alias culpa eaque accusantium animi dicta!</p>
                            <a href="#" className="btn btn-primary">Read</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Main;