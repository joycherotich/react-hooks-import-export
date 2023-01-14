import React from "react";
import ReactDOM from "react-dom";
import ColoradoStateParks from "./ColoradoStateParks";
import Hufflepuff from "./Houses/Hufflepuff";
import MesaVerde from "./parks/MesaVerde";

ReactDOM.render(<ColoradoStateParks />, document.getElementById("root"));
ReactDOM.render(<Hufflepuff />, document.getElementById("root"));
ReactDOM.render(<MesaVerde />, document.getElementById("root"));
