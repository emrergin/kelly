import InvestBar from "./InvestBar";

interface Props {
  invRatio: number;
  wealth: number;
  multiplier: number;
  setInvRatio: React.Dispatch<React.SetStateAction<number>>;
  calculateRound: () => void;
}

const InvestBox = ({
  invRatio,
  wealth,
  multiplier,
  setInvRatio,
  calculateRound,
}: Props) => {
  return (
    <>
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
        green, the investment is multiplied by {multiplier + 1}.
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
    </>
  );
};

export default InvestBox;
