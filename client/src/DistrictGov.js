import React, { useState } from 'react';

const DistrictGovernmentPage = () => {
  const [stateGovernmentMoney, setStateGovernmentMoney] = useState(500000); // Replace with the actual received money from state government
  const [allocatedForMLA, setAllocatedForMLA] = useState(0);
  const [allocatedForHealthCare, setAllocatedForHealthCare] = useState(0);
  const [allocatedForRoadTransport, setAllocatedForRoadTransport] = useState(0);

  const [transferredToMLA, setTransferredToMLA] = useState(0);
  const [transferredToHealthCare, setTransferredToHealthCare] = useState(0);
  const [transferredToRoadTransport, setTransferredToRoadTransport] = useState(0);

  return (
    <div>
      <h1>District Government Page</h1>
      <p>Money Received from State Government: {stateGovernmentMoney}</p>

      <h2>Allocate Funds:</h2>
      <label htmlFor="allocatedForMLA">Allocate for MLA's:</label>
      <input
        type="number"
        id="allocatedForMLA"
        value={allocatedForMLA}
        onChange={(e) => setAllocatedForMLA(parseInt(e.target.value))}
      />

      <label htmlFor="allocatedForHealthCare">Allocate for Health Care Sector:</label>
      <input
        type="number"
        id="allocatedForHealthCare"
        value={allocatedForHealthCare}
        onChange={(e) => setAllocatedForHealthCare(parseInt(e.target.value))}
      />

      <label htmlFor="allocatedForRoadTransport">Allocate for Road & Transport Sector:</label>
      <input
        type="number"
        id="allocatedForRoadTransport"
        value={allocatedForRoadTransport}
        onChange={(e) => setAllocatedForRoadTransport(parseInt(e.target.value))}
      />

      <h2>Transfer Funds:</h2>
      <label htmlFor="transferredToMLA">Transfer to MLA's:</label>
      <input
        type="number"
        id="transferredToMLA"
        value={transferredToMLA}
        onChange={(e) => setTransferredToMLA(parseInt(e.target.value))}
      />

      <label htmlFor="transferredToHealthCare">Transfer to Health Care Sector:</label>
      <input
        type="number"
        id="transferredToHealthCare"
        value={transferredToHealthCare}
        onChange={(e) => setTransferredToHealthCare(parseInt(e.target.value))}
      />

      <label htmlFor="transferredToRoadTransport">Transfer to Road & Transport Sector:</label>
      <input
        type="number"
        id="transferredToRoadTransport"
        value={transferredToRoadTransport}
        onChange={(e) => setTransferredToRoadTransport(parseInt(e.target.value))}
      />

      <h2>Funds Allocation and Transfer Summary:</h2>
      <p>Allocated for MLA's: {allocatedForMLA}</p>
      <p>Allocated for Health Care Sector: {allocatedForHealthCare}</p>
      <p>Allocated for Road & Transport Sector: {allocatedForRoadTransport}</p>                                                                                                                                                                                                                                                                                                                                                         

      <p>Transferred to MLA's: {transferredToMLA}</p>
      <p>Transferred to Health Care Sector: {transferredToHealthCare}</p>
      <p>Transferred to Road & Transport Sector: {transferredToRoadTransport}</p>
    </div>
  );
};

export default DistrictGovernmentPage;
                                