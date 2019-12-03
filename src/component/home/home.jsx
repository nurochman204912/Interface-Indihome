import  React, { Component } from 'react';
import '../../style/styles.css';

class home extends Component {
    render () {
        return (
            <div className="slider">
                <div className="container sliderimage">
                    <div className="row">
                        <img src={require('../../gambar/My_Indihome_Baru.jpg')} alt="Responsive image" className="img-fluid rounded slide"/>
                    </div>
                </div>
                <div className="container notive">
                    <div className="row">
                        <div className="cool-md-12">
                            <div className="alert alert-danger danger" role="alert">
                                <p className="text-white text-center"> A simple succes alert-check it out!</p>
                            </div>
                        </div>
                    </div>

                </div>
                    {/* end slider */}
                <div className="container slide">
                    <div className="row">
                        <div className="col-md-8">
                            <div id="carauselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={require('../../gambar/indihome.png')}  className="img-fluid d-block w-100"/>
                                    </div>
                                    <div className="carousel-item ">
                                        <img src={require('../../gambar/Paket IndiHome New Premium.jpg')}  className="img-fluid d-block w-100"/>
                                    </div>
                                    <div className="carousel-item ">
                                        <img src={require('../../gambar/tripelplay-premium.jpg')}  className="img-fluid d-block w-100"/>
                                    </div>
                                    <a className="caraousel-control-prev" href="#carauselExampleIndicators" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">previous</span>
                                    </a>
                                    <a className="caraousel-control-next" href="#carauselExampleIndicators" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={require('../../gambar/indihome.png')} alt="Responsive image" className="img-fluid rounded slide"/>
                            <img src={require('../../gambar/tripelplay-premium.jpg')} alt="Responsive image" className="img-fluid rounded slide"/>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default home;