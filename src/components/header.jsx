import React from "react";

export const Header = (props) => {
  const headerStyle = {
    background: `url(${process.env.PUBLIC_URL}/img/intro-bg.jpg) center center no-repeat`,
    backgroundSize: 'cover'
  };

  return (
    <header id="header">
      <div className="intro" style={headerStyle}>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
                <a
                  href="https://ruthlesstoucan.itch.io/vis-tory" // Replace with your desired URL
                  className="btn btn-custom btn-lg page-scroll"
                  target="_blank"  // Opens in new tab
                  rel="noopener noreferrer"  // Security best practice for external links
                >
                  PLAY NOW
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
