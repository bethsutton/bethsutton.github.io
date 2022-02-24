import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileHolder from '../layout/assets/profileHolder.png';

function Header() {
  return (
    <header id="about">
      <div className="row">
        <div className="col-md-12 text-center p-3">
          <h3>Designer, Front-end Web Developer, and Illustrator</h3>
        </div>
      </div>
      <div className="row align-items-center bg-dark-new p-3 extend-pb py-4">
        <div className="offset-md-2 col-md-8 offset-lg-2 col-lg-4 offset-xl-3 col-xl-3">
          <img
            src={profileHolder}
            alt=""
            className="img-fluid rounded-circle mb-2 profile-image mx-auto"
          />
        </div>
        <div className="offset-md-2 col-md-8 offset-lg-0 col-lg-4 col-xl-3 text-center">
          <h2 className="text-medium-new">Lorem ipsum dolor sit.</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            culpa commodi ab saepe cupiditate eaque eveniet nemo, eius, modi
            soluta et magnam recusandae natus iure aliquam sed voluptates
            reprehenderit molestiae facere reiciendis error magni deleniti in
            beatae! Impedit, nam cum.
          </p>
          {/* <!-- GITHUB AND LINKEDIN ICONS --> */}
          <div className="row">
            <div className="col-12">
              <a
                href="https://github.com/bethsutton"
                className="text-white mx-3"
              >
                <FaGithub className="fs-1" />
              </a>
              <a href="" className="text-white mx-3">
                <FaLinkedin className="fs-1" />
              </a>
            </div>
          </div>
        </div>
        <div className="extend-div"></div>
      </div>
    </header>
  );
}

export default Header;
