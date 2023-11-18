type ResultRowProps = {
  loading?: boolean;
  provaiderName?: string;
  btc?: string ;
};

export default function ResultRow({loading , provaiderName , btc}:ResultRowProps) {
  return (
    <div className="relative border min-h-[64px] border-white/10 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-4 my-2 overflow-hidden">
      <div className="flex gap-4">
        {provaiderName && (
          <div>logo</div>
        )}
        <div className="grow">{provaiderName || ""}</div>
        {btc && (
           <div className="flex gap-2">
           <span className="text-xl text-purple-200/80">0.001</span>
           <span className="text-xl text-purple-300/50">BTC</span>
       </div>
        )}
      </div>
      {loading && (
        <div className="inset-0 absolute bg-gradient-to-r from-transparent via-blue-800/50 to-transparent skeleton-animation"></div>
      )}
    </div>
  );
}
