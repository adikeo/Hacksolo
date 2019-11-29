//import everything

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Intro from "./intro";
import Xmaspiano from "./xmaspiano";

/* import Songmatrix from "./songmatrix.js"; */

//components

const App = () => (

<BrowserRouter>
      <div className="App">
        {/* animated snowflakes */}
        <div className="snowflakes">
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❆</div>
        </div>

        <Switch>

          <Route exact path="/" render={() => {
            return <Intro></Intro>
           }} />

          <Route exact path="/xmaspiano" render={() => {
            return <Xmaspiano></Xmaspiano>
           }} />

        </Switch>
      </div>
  </BrowserRouter>
  );

export default App;