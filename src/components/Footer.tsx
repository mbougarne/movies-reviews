import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer()
{
  return (
    <footer className="Footer text-center">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="copyrights">
              &copy; All Rights Reserved ~ MR 2020 <br/>
              <ul className="list-unstyled">
                <li className="list-unstyled-item">
                  <NavLink 
                    exact
                    to="/about"
                    style={{color: '#9C27B0'}}
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}