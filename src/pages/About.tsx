import React, { Component } from 'react';
import Header from '../components/Header';

export default class About extends Component
{

  render() 
  {
    return (
      <div className="AboutPage">
        <Header />
        <main className="container">
          <h1>About</h1>
          <p className="lead">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, asperiores nihil numquam dolore voluptas aspernatur exercitationem non obcaecati sed maiores deleniti corrupti. Nulla qui nisi fuga labore ab voluptates quos.
          </p>
        </main>
      </div>
    )
  }
}