import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiLion } from "react-icons/gi";

const Footer = () => {

  // se toma el año actual 
  const years = new Date().getFullYear();
 
  return (
    <footer className="bg-dark text-white shadow text-center p-5 pt-auto">
      <div className="container">
        <div className="row">
          <div className="col">
            <div>
              <p className="mb-0 fs-5">
                © Copyrigth {years} AdriianFdez <GiLion /> | CoderHouse #1👑 |VLLC!!! 
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );  
};

export default Footer;
