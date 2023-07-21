import React, { useState } from 'react';

const StateGov = () => {
  const [centralGovernmentMoney, setCentralGovernmentMoney] = useState(2000000); // Replace with the actual received money from central government
  const [allocatedToDistricts, setAllocatedToDistricts] = useState(0);
  const [transferredToDistrict, setTransferredToDistrict] = useState(0);

  const handleAllocatedAmountChange = (e) => {
    const amount = parseInt(e.target.value);
    setAllocatedToDistricts(amount);
  };

  const handleTransferAmountChange = (e) => {
    const amount = parseInt(e.target.value);
    setTransferredToDistrict(amount);
  };

  return (
    <div>
      <h1>State Government Page</h1>
      <p>Money Received from Central Government: {centralGovernmentMoney}</p>

      <label htmlFor="allocatedToDistricts">Amount Allocated to Districts:</label>
      <input
        type="number"
        id="allocatedToDistricts"
        value={allocatedToDistricts}
        onChange={handleAllocatedAmountChange}
      />

      <label htmlFor="transferredToDistrict">Amount to Transfer to District:</label>
      <input
        type="number"
        id="transferredToDistrict"
        value={transferredToDistrict}
        onChange={handleTransferAmountChange}
      />

      <p>Amount Transferred to District: {transferredToDistrict}</p>
    </div>
  );
};

export default StateGov;
