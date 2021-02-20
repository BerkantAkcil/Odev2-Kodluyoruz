import React from "react";

function TechDemo() {
  return (
    <div id="techdemo" className="container-fluid text-center m-0 p-0">
      <h3 className="text-black pb-4 pt-4">Sukhoi Technologies</h3>
      <div className="container">
        <div className="row pt-6">
          <div className="col-sm pb-6">
            <a href="https://tr.wikipedia.org/wiki/Suhoy_Su-57">
              <img
                src="https://www.airrecognition.com/images/stories/news/2020/february/Russia_develops_hypersonic_missile_prototype_for_Sukhoi_Su-57_fighter_jets_925_001.jpg"
                alt="Pakfa"
              />
            </a>
            <h2> Pak-Fa 5th Gen Multirole Stealth Fighter </h2>
          </div>

          <div className="col-sm pb-6">
            <a href="https://tr.wikipedia.org/wiki/Suhoy_Su-35">
              <img
                src="https://www.trmilitarynews.com/wp-content/uploads/2019/07/1032037766.jpg"
                alt="Su35"
              />
            </a>
            <h2> Sukhoi Su-35 Multirole 4.5th++ Gen Figter </h2>
          </div>
          <div className="col-sm pb-6">
            <a href="https://tr.wikipedia.org/wiki/Suhoy_Su-33">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Sukhoi_Su-33_77_RED_%2830268117476%29.jpg"
                alt="Su33"
              />
            </a>
            <h2> Sukhoi Su-33 Multirole 4.5th Gen Naval Fighter </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechDemo;
