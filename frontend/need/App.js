import React, { useState } from "react";
import Web3 from "web3";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Heading,
} from "@chakra-ui/react";
require("dotenv").config();
const { ABI } = process.env;

const web3 = new Web3("http://localhost:8545"); // Update the URL to your local network

// Replace with the ABI of your FundMonitor contract
const contractABI = ABI;

const contractAddress = "0x4711CAB8cc28191F16D40eA850b7677BA0cb6c8e"; // Replace with the actual address of your contract

const fundMonitorContract = new web3.eth.Contract(contractABI, contractAddress);

function App() {
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [fundsReceived, setFundsReceived] = useState(0);
  const [fundsAllocated, setFundsAllocated] = useState(0);
  const [fundsTransferred, setFundsTransferred] = useState(0);

  const handleGetFunds = async () => {
    try {
      // Connect to the Ethereum wallet using the provided password
      const wallet = web3.eth.accounts.wallet.create(1);
      wallet.add(web3.eth.accounts.privateKeyToAccount(password).privateKey);

      // Get the funds for the provided address
      const receivedAmount = await fundMonitorContract.methods
        .receivedFunds(address)
        .call({ from: wallet[0].address });
      const allocatedAmount = await fundMonitorContract.methods
        .allocatedFunds(address)
        .call({ from: wallet[0].address });
      const transferredAmount = await fundMonitorContract.methods
        .transferredFunds(address)
        .call({ from: wallet[0].address });

      setFundsReceived(receivedAmount);
      setFundsAllocated(allocatedAmount);
      setFundsTransferred(transferredAmount);
    } catch (error) {
      console.error("Error getting funds:", error);
    }
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        FundMonitor Contract Frontend
      </Heading>

      <FormControl id="address" mb={4}>
        <FormLabel>Address</FormLabel>
        <Input
          type="text"
          placeholder="Enter the address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" mb={4}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          placeholder="Enter the password for the address"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>

      <Button onClick={handleGetFunds}>Get Funds</Button>

      <Box mt={4}>
        <Text>Received Amount: {fundsReceived} ETH</Text>
        <Text>Allocated Amount: {fundsAllocated} ETH</Text>
        <Text>Transferred Amount: {fundsTransferred} ETH</Text>
      </Box>
    </Box>
  );
}

export default App;
