import React from "react";

function Us() {
  return (
    <div id="about" className="container-fluid">
      <h3 id="founder" className="pt-3 text-center">
        Founder
      </h3>
      <div className="row text-center">
        <div className="col-sm">
          <img
            className="pt-5"
            id="pavelsrc"
            src="https://media.sciencephoto.com/c0/21/30/87/c0213087-400px-wm.jpg"
          />
        </div>
        <div className="col-sm">
          <p id="founderinf" className="pt-5 mx-auto d-block">
            "Pavel Osipovich Sukhoi , Paviel Vosipavič Suchi; 22 July 1895 – 15
            September 1975) was a Soviet aerospace engineer and aircraft
            designer known as the founder of the Sukhoi Design Bureau. Sukhoi
            designed military aircraft with Tupolev and Sukhoi for 50 years, and
            produced many notable Soviet planes such as the Sukhoi Su-7, Su-17,
            and Su-24. His planes set two altitude world records (1959, 1962)
            and two world speed records (1960, 1962). Sukhoi was honored in the
            Soviet Union as a Hero of Socialist Labor and awarded the Order of
            Lenin three times
          </p>
        </div>
      </div>
      <br />
      <hr />
      <h3 id="history" className="pt-4 text-center">
        History
      </h3>
      <div className="row text-center">
        <div className="col-sm order-xl-1 order-lg-1 order-md-1 order-sm-2 order-xs-2">
          <p id="gideoninfo" className="pt-5 mx-auto d-block">
            Nine years prior to the creation of the bureau, Pavel Sukhoi, a
            Soviet Russian aerospace engineer, took over team no. 4 of the
            CAHI's AGOS aviation, flying boat aviation and aircraft prototype
            engineering facility, in March 1930. Under Sukhoi's leadership, the
            team of the future design bureau started to take shape. The team,
            under the Tupolev OKB, produced experimental fighters such as the
            I-3, I-14, and the DIP, a record-breaking RD aircraft, the Tupolev
            ANT-25, flown by famous Soviet aviators, Valery Chkalov and Mikhail
            Gromov, and the long-range bombers such as the Tupolev TB-1 and the
            Tupolev TB-3.
          </p>
        </div>
        <div className="col-sm order-xl-2 order-lg-2 order-md-2 order-sm-1 order-xs-1">
          <img
            className="pt-5"
            id="firstfac"
            src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Sukhoi-okb.JPG"
          />
        </div>
      </div>
      <br />
      <hr />
      <br />
    </div>
  );
}

export default Us;
