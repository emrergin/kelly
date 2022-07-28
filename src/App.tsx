import { useState } from "react";
import ChanceBar from "./components/ChanceBar";
import InvestBar from "./components/InvestBar";
import DataChart from "./components/DataChart";

function App() {
  // const [ratio, setRatio] = useState(50);
  const ratioToWin = 50;
  const multiplier = 2;
  const optimalRatio = ratioToWin - (100 - ratioToWin) / multiplier;
  const [result, setResult] = useState(50);
  const [wealth, setWealth] = useState(100);
  const [oWealth, setOWealth] = useState(100);
  const [invRatio, setInvRatio] = useState(0);
  const [chartData, setChartData] = useState([[wealth, oWealth]]);

  const calculateRound = (): void => {
    setResult(Math.floor(Math.random() * 100) + 1);
    setInvRatio(0);
    let newWealth: number, newOptimalWealth: number;
    if (result > 100 - ratioToWin) {
      newWealth = calculateLosing(invRatio, wealth);
      newOptimalWealth = calculateLosing(optimalRatio, oWealth);
    } else {
      newWealth = calculateWinning(invRatio, wealth);
      newOptimalWealth = calculateWinning(optimalRatio, oWealth);
    }
    setWealth(newWealth);
    setOWealth(newOptimalWealth);
    setChartData([...chartData, [newWealth, newOptimalWealth]]);

    function calculateWinning(ratio: number, wealth: number) {
      return Math.round(wealth + (multiplier * wealth * ratio) / 100);
    }

    function calculateLosing(ratio: number, wealth: number) {
      return Math.round((wealth * (100 - ratio)) / 100);
    }
  };

  return (
    <div className="App flex flex-wrap gap-8 p2 main-container justify-center my-0 mx-auto text-center">
      <div className="mt-5 items-center flex flex-col">
        <ChanceBar ratio={100 - ratioToWin} result={result} />
        <input
          type="range"
          min="0"
          max="100"
          className="mt-10"
          value={invRatio}
          onChange={(e) => setInvRatio(Number(e.target.value))}
          disabled={wealth > 0 ? false : true}
        />
        <div className="mt-5 wmax-ch60">
          If the arrow is in red, the investment is lost. If the arrow is in
          green, the investment is multipled by {multiplier + 1}.
        </div>
        <div className="flex mt-10 items-end">
          <div className="mr-5 w-1/3">
            <h3 className="font-semibold ">Wealth not Invested</h3>
            <p className="mt-5">
              {Math.round((wealth * (100 - invRatio)) / 100)}
            </p>
            <InvestBar ratio={100 - invRatio} />
          </div>
          <button
            className="btn w-1/3 self-center"
            onClick={calculateRound}
            disabled={wealth > 0 ? false : true}
          >
            Invest!
          </button>
          <div className="ml-5 w-1/3">
            <h3 className="font-semibold">Wealth Invested</h3>
            <p className="mt-5">{Math.round((wealth * invRatio) / 100)}</p>
            <InvestBar ratio={invRatio} />
          </div>
        </div>
      </div>
      <DataChart datatoChart={chartData} />
    </div>
  );
}

export default App;
