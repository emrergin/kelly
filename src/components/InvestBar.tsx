const InvestBar = ({ ratio }: { ratio: number }) => {
  return (
    <div className="h-64 w-32 bg-slate-400 relative rounded-md mx-auto">
      <div
        className={`w-32 hp-${ratio} bg-blue-500 absolute border-t-4 rounded-b-md bottom-0 ${
          ratio === 100 ? "rounded-md" : ""
        }`}
      ></div>
    </div>
  );
};

export default InvestBar;
