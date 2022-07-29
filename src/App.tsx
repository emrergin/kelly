import { useState } from "react";
import ChanceBar from "./components/ChanceBar";
import InvestBox from "./components/InvestBox";
import DataChart from "./components/DataChart";
import ConfigModal from "./components/ConfigModal";

function App() {
  const [ratioToWin, setRatioToWin] = useState(50);
  const [multiplier, setMultiplier] = useState(2);
  let optimalRatio = ratioToWin - (100 - ratioToWin) / multiplier;
  const [result, setResult] = useState(50);
  const [wealth, setWealth] = useState(100);
  const [oWealth, setOWealth] = useState(100);

  const [invRatio, setInvRatio] = useState(0);
  const [chartData, setChartData] = useState([[wealth, oWealth]]);

  const calculateRound = (): void => {
    
    let newResult = Math.floor(Math.random() * 100) + 1;
    setResult(newResult);
    let newWealth: number, newOptimalWealth: number;
    if (newResult > ratioToWin) {
      newWealth = calculateLosing(invRatio, wealth);
      newOptimalWealth = calculateLosing(optimalRatio, oWealth);
    } else {
      newWealth = calculateWinning(invRatio, wealth);
      newOptimalWealth = calculateWinning(optimalRatio, oWealth);
    }
    setWealth(newWealth);
    setOWealth(newOptimalWealth);
    console.log(newResult,ratioToWin,'wealth:',wealth,newWealth,'optimal',oWealth,newOptimalWealth,optimalRatio);
    setChartData([...chartData, [newWealth, newOptimalWealth]]);
    setInvRatio(0);

    function calculateWinning(ratio: number, wealth: number) {
      return Math.round(wealth + (multiplier * wealth * ratio) / 100);
    }

    function calculateLosing(ratio: number, wealth: number) {
      return Math.round((wealth * (100 - ratio)) / 100);
    }
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(): void {
    setIsOpen(true);
  }

  function closeModal(): void {
    setIsOpen(false);
  }

  function restartWithNewParameters(
    e: React.MouseEvent<HTMLButtonElement>,
    inputRatio: HTMLInputElement,
    inputOdds: HTMLInputElement
  ): void {
    e.preventDefault();
    inputRatio.reportValidity();
    inputOdds.reportValidity();
    if (!inputRatio.checkValidity() || !inputOdds.checkValidity()){
      return;
    }
    setRatioToWin(Number(inputRatio.value));
    setMultiplier(Number(inputOdds.value));
    setResult(50);
    setWealth(100);
    setOWealth(100);
    setInvRatio(0);
    setChartData([[100, 100]]);
    optimalRatio = ratioToWin - (100 - ratioToWin) / multiplier;
    setIsOpen(false);
  }

  return (
    <div className="App flex flex-wrap gap-8 p2 main-container justify-center my-0 mx-auto text-center">
      <ConfigModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        restartWithNewParameters={restartWithNewParameters}
        currentOdds={multiplier}
        currentRatio={ratioToWin}
      />
      <div className="mt-5 items-center flex flex-col">
        <ChanceBar ratio={100-ratioToWin} result={result} />
        <InvestBox
          invRatio={invRatio}
          wealth={wealth}
          multiplier={multiplier}
          setInvRatio={setInvRatio}
          calculateRound={calculateRound}
        />
      </div>
      <div className="self-center">
        <button className="btn" onClick={openModal}>
          Config
        </button>
        <DataChart datatoChart={chartData} />
      </div>
    </div>
  );
}

export default App;
