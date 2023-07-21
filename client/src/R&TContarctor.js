import React, { useState } from 'react';

const RTContractorPage = () => {
  const [roadTransportMoney, setRoadTransportMoney] = useState(900000); // Replace with the actual received money from the Road and Transport Sector Minister
  const [allocatedForRawMaterial, setAllocatedForRawMaterial] = useState(0);
  const [allocatedForLabor, setAllocatedForLabor] = useState(0);
  const [transferredToRawMaterial, setTransferredToRawMaterial] = useState(0);
  const [transferredToLabor, setTransferredToLabor] = useState(0);

  return (
    <div>
      <h1>Road & Transport-Contractor Page</h1>
      <p>Money Received from Road and Transport Sector Minister: {roadTransportMoney}</p>

      <h2>Allocate Funds:</h2>
      <label htmlFor="allocatedForRawMaterial">Allocate for Raw Material Supplier:</label>
      <input
        type="number"
        id="allocatedForRawMaterial"
        value={allocatedForRawMaterial}
        onChange={(e) => setAllocatedForRawMaterial(parseInt(e.target.value))}
      />

      <label htmlFor="allocatedForLabor">Allocate for Labor Supplier:</label>
      <input
        type="number"
        id="allocatedForLabor"
        value={allocatedForLabor}
        onChange={(e) => setAllocatedForLabor(parseInt(e.target.value))}
      />

      <h2>Transfer Funds:</h2>
      <label htmlFor="transferredToRawMaterial">Transfer to Raw Material Supplier:</label>
      <input
        type="number"
        id="transferredToRawMaterial"
        value={transferredToRawMaterial}
        onChange={(e) => setTransferredToRawMaterial(parseInt(e.target.value))}
      />

      <label htmlFor="transferredToLabor">Transfer to Labor Supplier:</label>
      <input
        type="number"
        id="transferredToLabor"
        value={transferredToLabor}
        onChange={(e) => setTransferredToLabor(parseInt(e.target.value))}
      />

      <h2>Funds Allocation and Transfer Summary:</h2>
      <p>Allocated for Raw Material Supplier: {allocatedForRawMaterial}</p>
      <p>Allocated for Labor Supplier: {allocatedForLabor}</p>
      <p>Transferred to Raw Material Supplier: {transferredToRawMaterial}</p>
      <p>Transferred to Labor Supplier: {transferredToLabor}</p>
    </div>
  );
};

export default RTContractorPage;
