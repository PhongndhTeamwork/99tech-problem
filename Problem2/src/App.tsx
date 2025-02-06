import { useState, useEffect } from "react";


function App() {

  const [fromToken, setFromToken] = useState("ETH");
  const [toToken, setToToken] = useState("USDT");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("0");

  const prices = {
    ETH: 3000,
    USDT: 1,
    BTC: 45000,
    BNB: 400,
  };

  useEffect(() => {
    const fromPrice = prices[fromToken as keyof typeof prices] || 0;
    const toPrice = prices[toToken as keyof typeof prices] || 0;
    if (fromPrice && toPrice && amount) {
      setConvertedAmount(((+amount * fromPrice) / toPrice).toFixed(6));
    } else {
      setConvertedAmount("0");
    }
  }, [fromToken, toToken, amount]);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw" }}>
      <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h2 style={{ textAlign: "center" }}>Currency Swap</h2>
        <div style={{ marginBottom: "10px" }}>
          <label>From</label>
          <select value={fromToken} onChange={(e) => setFromToken(e.target.value)} style={{ width: "100%", padding: "8px", marginTop: "4px" }}>
            {Object.keys(prices).map((token) => (
              <option key={token} value={token}>{token}</option>
            ))}
          </select>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>To</label>
          <select value={toToken} onChange={(e) => setToToken(e.target.value)} style={{ width: "100%", padding: "8px", marginTop: "4px" }}>
            {Object.keys(prices).map((token) => (
              <option key={token} value={token}>{token}</option>
            ))}
          </select>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Amount</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} style={{ width: "100%", padding: "8px", marginTop: "4px", border: "1px solid #ccc", borderRadius: "4px" }} placeholder="Enter amount" />
        </div>
        <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
          Converted Amount: {convertedAmount} {toToken}
        </div>
        <button style={{ width: "100%", padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Swap</button>
      </div>
    </div>

  )
}

export default App
