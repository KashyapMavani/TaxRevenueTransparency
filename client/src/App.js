import React, { useState } from 'react';
import CentralGov from './CentralGov';
import StateGov from './StateGov';
import DistrictGovernmentPage from './DistrictGov';
import HealthCareSectorPage from './HealthCare';
import MLAPage from './MLA';
import RoadTransportSectorPage from './Roads&Transport';
import MLAContractorPage from './MLAContractor';
import HCContractorPage from './HealthCareContractor';
import RTContractorPage from './R&TContarctor';

const App = () => {
  // const [transferredAmount, setTransferredAmount] = useState(0);

  return (
    <div>
      {/* <CentralGov setTransferredAmount={setTransferredAmount} />
      <StateGov transferredAmount={transferredAmount} />
      <DistrictGov transferredAmount={transferredAmount} /> */}
      <CentralGov />
      <StateGov />
      <DistrictGovernmentPage />
      <MLAPage />
      <HealthCareSectorPage />
      <RoadTransportSectorPage />
      <MLAContractorPage />
      <HCContractorPage />
      <RTContractorPage />
    </div>
  );
};

export default App;