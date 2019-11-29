import React from "react";
import Matrix from "react-matrix";

class Songmatrix extends React.Component {
    getInitialState () {
      return {
        matrix: [
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
        ]
      }
    };
  
    render (props) {
      return (
          <div className="griddiv">
        <Matrix 
            squareSize={10} 
            matrix={this.state.matrix} 
            {...props}
        />
        </div>
      );
    };
  }

  export default Songmatrix;