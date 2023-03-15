import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import Home from './components/home-v11';

import About from './components/about';
import TeamDetails from './components/team-details';
import ComingSoon from './components/coming-soon';
import Error  from './components/404';

import ProdductDetails from './components/product-details';
import ShopPage from './components/shop-left-sidebar';

import Contact from './components/contact';
import MyAccount from './components/my-account';
import Login from './components/login';
import Register from './components/register';
import AddListing from './components/add-listing';
import Wishlist from './components/wishlist';


class Root extends Component {
    render() {
        return(
                <HashRouter basename="/">
	                <div>
	                <Switch>
                        <Route exact path="/" component={Home} />

                        <Route path="/about" component={About} />
                        <Route path="/team-details" component={ TeamDetails } />
                        <Route path="/coming-soon" component={ ComingSoon } />
                        <Route path="/404" component={ Error } />
                        <Route path="/shop" component={ ShopPage } />

                        <Route path="/product-details" component={ ProdductDetails } />

                        <Route path="/contact" component={ Contact } />
                        <Route path="/my-account" component={ MyAccount } />
                        <Route path="/login" component={ Login } />
                        <Route path="/register" component={ Register } />
                        <Route path="/add-listing" component={ AddListing } />
                        <Route path="/wishlist" component={ Wishlist } />
	                </Switch>
	                </div>
                </HashRouter>
        )
    }
}



ReactDOM.render(<Root />, document.getElementById('quarter'));
