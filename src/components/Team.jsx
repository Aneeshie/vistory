import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            We are a team of passionate individuals dedicated to bringing you
            the best experience possible. Our diverse backgrounds and expertise
            come together to create something truly special.
          </p>
        </div>
        {/* First row - 2 members */}
        <div className="row">
          {props.data
            ? props.data.slice(0, 2).map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-6 col-sm-6 team">
                  <div className="thumbnail">
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
        {/* Second row - 3 members */}
        <div className="row" style={{ marginTop: "30px" }}>
          {props.data
            ? props.data.slice(2, 5).map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4 col-sm-6 team">
                  <div className="thumbnail">
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
