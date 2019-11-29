import React from 'react';
import { withRouter } from "react-router-dom";
import Teclado from "./piano";

function Xmaspiano() {
  return (
    <>
     {/* notes in top div */}
     
     <div className="container">
      <img src="/mistletoe.svg" alt="mistletoe" id="mistletoe" />
      <img src="/mistletoe.svg" alt="mistletoe" id="mistletoe2" />
      <div className="top">
      Jingle Bells
      <div class="grid-container">
        <div class="b0">&nbsp;&nbsp;</div>
        <div class="b1">&nbsp;</div>
        <div class="b2">&nbsp;</div>
        <div class="b3">&nbsp;</div>
        <div class="b4">&nbsp;</div>
        <div class="b5">&nbsp;</div>
        <div class="b6">&nbsp;</div>
        <div class="b7">&nbsp;</div>
        <div class="b8">&nbsp;</div>
        <div class="b9">&nbsp;</div>
        <div class="b10">&nbsp;</div>
        <div class="c0">&nbsp;</div>
        <div class="c1">&nbsp;</div>
        <div class="c2">&nbsp;</div>
        <div class="c3">&nbsp;</div>
        <div class="c4">&nbsp;</div>
        <div class="c5">&nbsp;</div>
        <div class="c6">&nbsp;</div>
        <div class="c7">&nbsp;</div>
        <div class="c8">&nbsp;</div>
        <div class="c9">&nbsp;</div>
        <div class="c10">&nbsp;</div>
        <div class="d0">&nbsp;</div>
        <div class="d1">&nbsp;</div>
        <div class="d2">&nbsp;</div>
        <div class="d3">&nbsp;</div>
        <div class="d4">&nbsp;</div>
        <div class="d5">&nbsp;</div>
        <div class="d6">&nbsp;</div>
        <div class="d7">&nbsp;</div>
        <div class="d8">&nbsp;</div>
        <div class="d9">&nbsp;</div>
        <div class="d10">&nbsp;</div>
        <div class="a0">&nbsp;</div>
        <div class="a1">&nbsp;</div>
        <div class="a2">&nbsp;</div>
        <div class="a3">&nbsp;</div>
        <div class="a4">&nbsp;</div>
        <div class="a5">&nbsp;</div>
        <div class="a6">&nbsp;</div>
        <div class="a7">&nbsp;</div>
        <div class="a8">&nbsp;</div>
        <div class="a9">&nbsp;</div>
        <div class="a10">&nbsp;</div>
      </div>
      </div>

      <div className="bottom">
        <Teclado className="PianoDarkTheme" />
      </div>

      
    </div>
    </>
  );
}

export default withRouter(Xmaspiano);