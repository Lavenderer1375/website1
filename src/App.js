import React, { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Products from './components/Products';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import DetailsPage from './components/DetailsPage';
import NotFound from './components/NotFound';
import Programmers from './components/Programmers';
import Drivers from './components/Drivers';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<DetailsPage />} />
          <Route path="/aboutus/*" element={<AboutUs />}>
            <Route path="programmers" element={<Programmers />} />
            <Route path="drivers" element={<Drivers />} />
          </Route>
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/*" element={<Navigate to="/notfound" />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
