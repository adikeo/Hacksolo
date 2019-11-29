import React from "react";
import { withRouter, Link } from "react-router-dom";

function Intro() {
  return (
    <>
    <div className="fade">
    <div className="container">
      <img src="/mistletoe.svg" alt="mistletoe" id="mistletoe" />
      <img src="/mistletoe.svg" alt="mistletoe" id="mistletoe2" />
      <audio src='/theme.mp3' autoPlay loop />
      <h1>Xmas</h1>
        <Link to="/xmaspiano">
            <img src="/logo.jpg" alt="Logo" width="50%" />   
        </Link>
        <h1>Piano</h1>
        </div>
      </div>
    </>
  );
}

export default withRouter(Intro);