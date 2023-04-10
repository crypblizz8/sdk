import {
  Address,
  getContract,
  createWalletClient,
  custom,
  fallback,
} from "viem";
import { tokenBoundABI } from "./abis/abi";
import { publicClient, testClient } from "./clients";
import { goerli, mainnet } from "viem/chains";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";

export interface AccountArgs {
  implementation?: Address | null;
  abi?: any;
  chainId?: any;
  tokenContract: Address;
  tokenId: any;
  salt?: any;
  rpcUrls?: any;
  initData?: any;
  signer?: any;
}

const TBImplementation = "0xd8d0EB5909e3e0e5F3490B9D9e09B2ba6dE80c75";

// Account

export const getAccount = async (args: AccountArgs): Promise<Address> => {
  const registryContract = getContract({
    address: TBImplementation,
    abi: tokenBoundABI,
    // TODO: add RPC client args and fallbacks
    publicClient,
  });

  return await registryContract.read.account([
    TBImplementation,
    // TODO: use connected chainID or add top-level config option
    5,
    args.tokenContract,
    args.tokenId,
    args.salt ?? 0,
  ]);
};

// createAccount
export const createAccount = async (
  callData: AccountArgs
): Promise<Address> => {
  const privateKey = generatePrivateKey();
  const account = privateKeyToAccount(privateKey);
  const { result } = await publicClient.simulateContract({
    address: TBImplementation,
    abi: tokenBoundABI,
    functionName: "createAccount",
    args: [
      TBImplementation,
      // TODO: use connected chainID or add top-level config option
      5,
      callData.tokenContract,
      callData.tokenId,
      BigInt(0),
      callData.initData ?? "",
    ],
    account,
  });
  return result;
};
