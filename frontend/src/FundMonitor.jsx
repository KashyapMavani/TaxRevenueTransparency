import { useState, useEffect } from "react";
import getEthereumClient from "./ethereum";

const FundMonitor = () => {
  const [loading, setLoading] = useState(true);
  const [receivedAmount, setReceivedAmount] = useState(0);
  const [allocatedAmount, setAllocatedAmount] = useState(0);
  const [transferredAmount, setTransferredAmount] = useState(0);

  useEffect(() => {
    const loadFundsData = async () => {
      const ethereumClient = await getEthereumClient();
      if (!ethereumClient) {
        setLoading(false);
        return;
      }

      try {
        const { contract } = ethereumClient;

        // Replace this with the address you want to monitor
        const addressToMonitor = "ADDRESS_TO_MONITOR";

        // Get the received amount for the provided address
        const received = await contract.getReceivedAmount(addressToMonitor);
        setReceivedAmount(received.toNumber());

        // Get the allocated amount for the provided address
        const allocated = await contract.getAllocatedAmount(addressToMonitor);
        setAllocatedAmount(allocated.toNumber());

        // Get the transferred amount for the provided address
        const transferred = await contract.getTransferredAmount(
          addressToMonitor
        );
        setTransferredAmount(transferred.toNumber());

        setLoading(false);
      } catch (error) {
        console.error("Error fetching funds data:", error);
        setLoading(false);
      }
    };

    loadFundsData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Fund Monitor</h1>
      <div>
        <strong>Received Amount:</strong> {receivedAmount} Wei
      </div>
      <div>
        <strong>Allocated Amount:</strong> {allocatedAmount} Wei
      </div>
      <div>
        <strong>Transferred Amount:</strong> {transferredAmount} Wei
      </div>
    </div>
  );
};

export default FundMonitor;
