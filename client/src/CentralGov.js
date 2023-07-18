import React, { useState } from 'react';

const CentralGov = () => {
  const [taxCollected, setTaxCollected] = useState(1000000); // Replace with the actual tax collected value
  const [allocatedAmount, setAllocatedAmount] = useState(0);
  const [transferredAmount, setTransferredAmount] = useState(0);

  const handleAmountChange = (e) => {
    const amount = parseInt(e.target.value);
    setAllocatedAmount(amount);
  };

  const handleTransferChange = (e) => {
    const amount = parseInt(e.target.value);
    setTransferredAmount(amount);
  };

  return (
    <div>
      <h1>Central Government Page</h1>
      <p>Total Tax Collected: {taxCollected}</p>

      <label htmlFor="allocatedAmount">Amount Allocated for State Government:</label>
      <input
        type="number"
        id="allocatedAmount"
        value={allocatedAmount}
        onChange={handleAmountChange}
      />

      <label htmlFor="transferredAmount">Amount to Transfer to State Government:</label>
      <input
        type="number"
        id="transferredAmount"
        value={transferredAmount}
        onChange={handleTransferChange}
      />

      <p>Amount Transferred to State Government: {transferredAmount}</p>
    </div>
  );
};

export default CentralGov;
