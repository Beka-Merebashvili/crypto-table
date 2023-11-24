import { useEffect, useState } from "react";
import axios from "axios";
import AmountInput from "./components/AmountInput";
import ResultRow from "./components/ResultRow";
import { sortBy } from "lodash";

type CashedResult = {
  provaider: string;
  btc: string;
}

function App() {
  const [amount, setAmount] = useState("100");
  const [cachedResults, setCschedResults] = useState<CashedResult[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("https://rds54favbg.us.aircode.run/cachedValues").then((res) => {
      setCschedResults(res.data);
      setLoading(false);
    });
  }, []);

const sortedCashe = sortBy(cachedResults, 'btc').reverse();

  return (
    <main className="max-w 2xl mx-auto px-4 py-8">
      <h1 className="uppercase text-6xl text-center font-bold bg-gradient-to-br from-purple-600 to-sky-400 bg-clip-text text-transparent from-30%">
        Find cheapest BTC
      </h1>
      <div className="flex justify-center mt-8">
        <AmountInput
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="mt-6">
        {loading && (
          <>
            <ResultRow loading={true} />
            <ResultRow loading={true} />
            <ResultRow loading={true} />
            <ResultRow loading={true} />
          </>
        )}
       {!loading && sortedCashe.map((result:CashedResult) => (
        <ResultRow 
        kay={result.provaider}
        // provaiderName={result.provaider} 
        btc={result.btc}
        />
       ))}
      </div>
    </main>
  );
}

export default App;
