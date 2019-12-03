import React, {Component} from 'react';
import Grid from './Grid';
import '../style/styles.css';
import { BrowserRouter as Router,Link} from 'react-router-dom';
import $ from 'jquery';
window.jQuery  = $;
window.$ = $;
global.jQuery = $;


class app extends Component {
    render() {
      return (
        <Router>
        <div className="header">
          <div className="container warna">
            <nav className="navbar navbar-expand-lg navbar-light warna">
              <Link className="navbar-brand" href="#"><img className="logo" src={require('../logo/Indihome-Logo-Header.jpg')} /></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-control="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      PROMO
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">PROMO</a>
                      <a class="dropdown-item" href="#">partnership</a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      PAKET & ADD-ON
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another Action</a>
                    <div className="drodown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">PUSAT BANTUAN</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="">
            <Grid/>
          </div>
          
        </div>
        </Router>
      )
    }
}

export default app; 