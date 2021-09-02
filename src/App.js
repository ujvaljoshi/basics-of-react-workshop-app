import React, { useState } from "react";
import ReactDOM from "react-dom";
import MatchList from "./MatchList";
import BetSlip from "./BetSlip";

const App = () => {
  const [bet, setBet] = useState(0);

  return (
    <div>
      <h1>React Workshop!</h1>
      <div className="container">
        <MatchList setBet={setBet} />
        <BetSlip betValue={bet} />
      </div>
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
