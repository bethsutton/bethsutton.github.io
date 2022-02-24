import React from 'react';

function About() {
  return (
    // <!-- ABOUT CARDS -->
    <section>
      <div className="container">
        <div className="row extend-mt mx-2">
          {/* <!-- DESIGNER CARD --> */}
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body text-center mx-2">
                <h3 className="card-title text-medium-new">Designer</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates nihil qui fugit mollitia quibusdam, cumque numquam
                  ut nostrum voluptatem tempore.
                </p>
                {/* <!-- ICONS WITHIN CARD --> */}
                <div className="row">
                  <div className="col-12">
                    <i className="fas fa-drafting-compass fa-3x text-medium-new mx-2"></i>
                    <i className="fas fa-tablet-alt fa-3x text-medium-new mx-2"></i>
                    <i className="fas fa-pencil-ruler fa-3x text-medium-new mx-2"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- WEB-DEVELOPER CARD --> */}
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body text-center mx-2">
                <h3 className="card-title text-medium-new">Web-Developer</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates nihil qui fugit mollitia quibusdam, cumque numquam
                  ut nostrum voluptatem tempore.
                </p>
                {/* <!-- ICONS WITHIN CARD --> */}
                <div className="row">
                  <div className="col-12">
                    <i className="fab fa-js-square fa-3x text-medium-new mx-2"></i>
                    <i className="fab fa-react fa-3x text-medium-new mx-2"></i>
                    <i className="fab fa-github fa-3x text-medium-new mx-2"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ILLUSTRATOR CARD --> */}
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body text-center mx-2">
                <h3 className="card-title text-medium-new">Illustrator</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates nihil qui fugit mollitia quibusdam, cumque numquam
                  ut nostrum voluptatem tempore.
                </p>
                {/* <!-- ICONS WITHIN CARD --> */}
                <div className="row">
                  <div className="col-12">
                    <i className="fas fa-paint-brush fa-3x text-medium-new mx-2"></i>
                    <i className="fas fa-palette fa-3x text-medium-new mx-2"></i>
                    <i className="fas fa-pencil-alt fa-3x text-medium-new mx-2"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- END CARDS --> */}
        </div>
      </div>
    </section>
  );
}

export default About;
