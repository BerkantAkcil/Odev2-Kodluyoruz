import React from "react";

function Footer() {
  return (
    <div id="footer" className="container-fluid">
      <h3 className="text-center pt-3">
        Send us your email adress and we will send you a media markup.
      </h3>

      <div class="mb-3">
        <input
          type="email"
          class="form-control mx-auto d-block"
          id="exampleFormControlInput1"
          placeholder="xxxx@xxxxxx.com"
        />
        <br />
        <button type="submit" class="btn btn-dark d-block mx-auto">
          Send
        </button>
      </div>
      <div className="container-fluid pt-3 pb-3">
        <div className="row text-center" />
      </div>
    </div>
  );
}

export default Footer;
