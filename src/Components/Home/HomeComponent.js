import React, { Component } from 'react';
import NavbarComponent from '../Navbar/NavbarComponent';
import CarouselComponent from '../Carousel/CarouselComponent';

export default class HomeComponent extends Component {
  render() {
    return (
      <div>
        <CarouselComponent />
      </div>
    );
  }
}
