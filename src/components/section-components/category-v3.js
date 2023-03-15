import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CategoryV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__banner-area pt-120 go-top">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="section-title-area ltn__section-title-2--- text-center">
						<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Property</h6>
						<h1 className="section-title">Property By Categories</h1>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8 col-md-6">
					<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {publicUrl+"assets/img/gallery/2.png"} >                        
						<div className="ltn__banner-info">
						<h3><Link to="/login"> Shebin ElKom </Link></h3>
						<p> Great Deals Available</p>
						<mark> 13 Listings</mark>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {publicUrl+"assets/img/gallery/3.png"} >                        
						<div className="ltn__banner-info">
						<h3><Link to="/login"> Asyut</Link></h3>
						<p> Great Deals Available</p>
						<mark> 10 Listings</mark>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {publicUrl+"assets/img/gallery/7.png"} >                        
						<div className="ltn__banner-info">
						<h3><Link to="/login">  Helwan</Link></h3>
						<p> Great Deals Available</p>
						<mark> 11 Listings</mark>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {publicUrl+"assets/img/gallery/8.png"} >                        
						<div className="ltn__banner-info">
						<h3><Link to="/login">  Ain Shams</Link></h3>
						<p> Great Deals Available</p>
						<mark> 13 Listings</mark>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {publicUrl+"assets/img/gallery/9.png"} >                        
						<div className="ltn__banner-info">
						<h3><Link to="/login">  Banha</Link></h3>
						<p> Great Deals Available</p>
						<mark> 13 Listings</mark>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
			
        }
}

export default CategoryV3