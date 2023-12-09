import { Signer, Contract } from "ethers";
import { CredentialEventService as ConsumerContractAdr } from "../utils/constant";

import ConsumerABI from "../utils/abi/Consumer.json";

export const NationalIDIssued = async (signer: Signer) => {
  const ConsumerContractIns = new Contract(
    ConsumerContractAdr,
    ConsumerABI,
    signer
  );

  try {
    const transaction = await ConsumerContractIns.nationalIdIssue({
      gasLimit: 300000,
      maxPriorityFeePerGas: 1000000000000000,
    });
    await transaction.wait();
    console.log("Transaction completed", { ...transaction });
  } catch (error) {
    console.error("Error in transaction", error);
  }
};

export const EmploymentVCIssued = async (signer: Signer) => {
  const ConsumerContractIns = new Contract(
    ConsumerContractAdr,
    ConsumerABI,
    signer
  );

  try {
    const transaction = await ConsumerContractIns.empVCIssue({
      gasLimit: 300000,
      maxPriorityFeePerGas: 1000000000000000,
    });
    await transaction.wait();
    console.log("Employment VC Issued", { ...transaction });
  } catch (error) {
    console.error("Error in Employment VC issuance", error);
  }
};

export const LabVCIssued = async (signer: Signer) => {
  const ConsumerContractIns = new Contract(
    ConsumerContractAdr,
    ConsumerABI,
    signer
  );

  try {
    const transaction = await ConsumerContractIns.labVCIssue({
      gasLimit: 300000,
      maxPriorityFeePerGas: 1000000000000000,
    });
    await transaction.wait();
    console.log("Lab VC Issued", { ...transaction });
  } catch (error) {
    console.error("Error in Lab VC issuance", error);
  }
};

export const InsuranceVCIssued = async (signer: Signer) => {
  const ConsumerContractIns = new Contract(
    ConsumerContractAdr,
    ConsumerABI,
    signer
  );

  try {
    const transaction = await ConsumerContractIns.insuranceIssued({
      gasLimit: 300000,
      maxPriorityFeePerGas: 1000000000000000,
    });
    await transaction.wait();
    console.log("Insurance VC Issued", { ...transaction });
  } catch (error) {
    console.error("Error in Insurance VC issuance", error);
  }
};

export const NationalIDVerified = async (signer: Signer, message: string) => {
  const ConsumerContractIns = new Contract(
    ConsumerContractAdr,
    ConsumerABI,
    signer
  );

  try {
    const transaction = await ConsumerContractIns.natVCVerified(message, {
      gasLimit: 300000,
      maxPriorityFeePerGas: 1000000000000000,
    });
    await transaction.wait();
    console.log("National ID Verified", { ...transaction });
  } catch (error) {
    console.error("Error in National ID verification", error);
  }
};

export const EmploymentVCVerified = async (signer: Signer, message: string) => {
  const ConsumerContractIns = new Contract(
    ConsumerContractAdr,
    ConsumerABI,
    signer
  );

  try {
    const transaction = await ConsumerContractIns.empVCVerified(message, {
      gasLimit: 300000,
      maxPriorityFeePerGas: 1000000000000000,
    });
    await transaction.wait();
    console.log("Employment VC Verified", { ...transaction });
  } catch (error) {
    console.error("Error in Employment VC verification", error);
  }
};

export const LabVCVerified = async (signer: Signer, message: string) => {
  const ConsumerContractIns = new Contract(
    ConsumerContractAdr,
    ConsumerABI,
    signer
  );

  try {
    const transaction = await ConsumerContractIns.laboratoryCVerified(message, {
      gasLimit: 300000,
      maxPriorityFeePerGas: 1000000000000000,
    });
    await transaction.wait();
    console.log("Lab VC Verified", { ...transaction });
  } catch (error) {
    console.error("Error in Lab VC verification", error);
  }
};

export const InsuranceVCVerified = async (signer: Signer, message: string) => {
  const ConsumerContractIns = new Contract(
    ConsumerContractAdr,
    ConsumerABI,
    signer
  );

  try {
    const transaction = await ConsumerContractIns.insuranceVCVerified(message, {
      gasLimit: 300000,
      maxPriorityFeePerGas: 1000000000000000,
    });
    await transaction.wait();
    console.log("Insurance VC Verified", { ...transaction });
  } catch (error) {
    console.error("Error in Insurance VC verification", error);
  }
};
