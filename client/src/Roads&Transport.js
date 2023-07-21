import React, { useState } from 'react';

const RoadTransportSectorPage = () => {
  const [districtGovernmentMoney, setDistrictGovernmentMoney] = useState(1200000); // Replace with the actual received money from district government
  const [allocatedForContractor, setAllocatedForContractor] = useState(0);
  const [transferredToContractor, setTransferredToContractor] = useState(0);

  return (
    <div>
      <h1>Road and Transport Sector Page</h1>
      <p>Money Received from District Government: {districtGovernmentMoney}</p>

      <h2>Allocate Funds:</h2>
      <label htmlFor="allocatedForContractor">Allocate for Contractor:</label>
      <input
        type="number"
        id="allocatedForContractor"
        value={allocatedForContractor}
        onChange={(e) => setAllocatedForContractor(parseInt(e.target.value))}
      />

      <h2>Transfer Funds:</h2>
      <label htmlFor="transferredToContractor">Transfer to Contractor:</label>
      <input
        type="number"
        id="transferredToContractor"
        value={transferredToContractor}
        onChange={(e) => setTransferredToContractor(parseInt(e.target.value))}
      />

      <h2>Funds Allocation and Transfer Summary:</h2>
      <p>Allocated for Contractor: {allocatedForContractor}</p>
      <p>Transferred to Contractor: {transferredToContractor}</p>
    </div>
  );
};

export default RoadTransportSectorPage;
