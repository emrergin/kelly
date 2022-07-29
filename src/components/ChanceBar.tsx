const ChanceBar = ({ ratio, result }: { ratio: number; result: number }) => {
  return (
    <div className="h-8 w-full bg-green-400 relative rounded-md">
      <div className="absolute translate-y-1/2 left-2">{100 - ratio}%</div>
      <div className="absolute translate-y-1/2 right-2 z-10">{ratio}%</div>
      <div
        className={`h-8 wp-${ratio} bg-red-500 absolute border-l-4 rounded-r-md right-0`}
      ></div>
      <div
        className={`top-8 relative -translate-x-1/2 leftp-${result} select-none text-2xl`}
      >
        ▲
      </div>
    </div>
  );
};

export default ChanceBar;
