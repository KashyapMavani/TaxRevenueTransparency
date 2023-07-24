import React, { useState } from 'react';
import CentralGov from './Components/CentralGov';
import StateGov from './Components/StateGov';
import DistrictGovernmentPage from './Components/DistrictGov';
import HealthCareSectorPage from './Components/HealthCare';
import MLAPage from './Components/MLA';
import RoadTransportSectorPage from './Components/Roads&Transport';
import ContractorPage from './Components/Contractor';
import MaterialSupplierPage from './Components/MaterialSupplier';
import LabourSupplierPage from './Components/LabourSupplier';


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
      <ContractorPage />
      <MaterialSupplierPage />
      <LabourSupplierPage />


    </div>
  );
};

export default App;