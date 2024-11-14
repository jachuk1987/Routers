import { Component } from "react";
import { Link } from 'react-router-dom';


export class Header extends Component {
    constructor() {
        super()
    }
    render() {
        return <header class="header" >


            <div class="header-inner">
                <div class="container">
                    <div class="inner">
                        <div class="row">
                            <div class="col-lg-3 col-md-3 col-12">
                                <div class="logo">
                                    <a href="index.html"><img src="img/logo.png" alt="#" /></a>
                                </div>

                                <div class="mobile-nav"></div>
                            </div>
                            <div class="col-lg-7 col-md-9 col-12">

                                <div class="main-menu">
                                    <nav class="navigation">
                                        <ul class="nav menu">


                                            {/* <a href="#">Home</a> */}
                                            <li class="active">
                                                <Link to={'Headerarea'}>
                                                    Home
                                                </Link>
                                            </li>



                                            {/* <a href="Headerarea.jsx">Doctos </a> */}
                                            <li>  <Link to={'Doctorss'}>
                                                Doctos
                                            </Link></li>





                                            {/* <li><a href="#">Services </a></li> */}
                                            {/* <li><a href="#">Pages <i class="icofont-rounded-down"></i></a>
                                                <ul class="dropdown">
                                                    <li><a href="404.html">404 Error</a></li>
                                                </ul>
                                            </li> */}

                                            {/* <a href="Startblogarea.jsx">Blogs</a> */}

                                            <li>
                                                <Link to={'Startblogarea'}>
                                                    Blogs
                                                </Link>
                                            </li>


                                            {/* <a href="Startcalltoaction.jsx">Contact Us</a> */}
                                            <li>
                                                <Link to={'Startcalltoaction'}>
                                                    Contact Us
                                                </Link>
                                            </li>

                                        </ul>
                                    </nav>
                                </div>

                            </div>
                            <div class="col-lg-2 col-12">
                                <div class="get-quote">
                                    <a href="Startappoint.jsx" class="btn">
                                        <Link to={'Startappoint'}>
                                            Book Appointment
                                        </Link>
                                    </a>
                                    {/* <Link to={'Startappoint'}>
                                    Book Appointment
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>








    }
}