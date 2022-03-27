/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Venture, VentureInterface } from "../../contracts/Venture";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "fund",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "fundingLog",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6106f98061010d6000396000f3fe6080604052600436106100595760003560e01c80633ccfd60b14610065578063715018a61461007c5780638da5cb5b14610093578063b60d4288146100be578063c0e75cb7146100c8578063f2fde38b1461010557610060565b3661006057005b600080fd5b34801561007157600080fd5b5061007a61012e565b005b34801561008857600080fd5b506100916101f3565b005b34801561009f57600080fd5b506100a861027b565b6040516100b59190610507565b60405180910390f35b6100c66102a4565b005b3480156100d457600080fd5b506100ef60048036038101906100ea9190610553565b6102ea565b6040516100fc9190610599565b60405180910390f35b34801561011157600080fd5b5061012c60048036038101906101279190610553565b610302565b005b6101366103fa565b73ffffffffffffffffffffffffffffffffffffffff1661015461027b565b73ffffffffffffffffffffffffffffffffffffffff16146101aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101a190610611565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f193505050501580156101f0573d6000803e3d6000fd5b50565b6101fb6103fa565b73ffffffffffffffffffffffffffffffffffffffff1661021961027b565b73ffffffffffffffffffffffffffffffffffffffff161461026f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026690610611565b60405180910390fd5b6102796000610402565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b34600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550565b60016020528060005260406000206000915090505481565b61030a6103fa565b73ffffffffffffffffffffffffffffffffffffffff1661032861027b565b73ffffffffffffffffffffffffffffffffffffffff161461037e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037590610611565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156103ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e5906106a3565b60405180910390fd5b6103f781610402565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104f1826104c6565b9050919050565b610501816104e6565b82525050565b600060208201905061051c60008301846104f8565b92915050565b600080fd5b610530816104e6565b811461053b57600080fd5b50565b60008135905061054d81610527565b92915050565b60006020828403121561056957610568610522565b5b60006105778482850161053e565b91505092915050565b6000819050919050565b61059381610580565b82525050565b60006020820190506105ae600083018461058a565b92915050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006105fb6020836105b4565b9150610606826105c5565b602082019050919050565b6000602082019050818103600083015261062a816105ee565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061068d6026836105b4565b915061069882610631565b604082019050919050565b600060208201905081810360008301526106bc81610680565b905091905056fea2646970667358221220f926f73d903bc9a3b082b8088dc80f4b096306069864dda5655f7305ff09961664736f6c63430008090033";

type VentureConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VentureConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Venture__factory extends ContractFactory {
  constructor(...args: VentureConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Venture> {
    return super.deploy(overrides || {}) as Promise<Venture>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Venture {
    return super.attach(address) as Venture;
  }
  override connect(signer: Signer): Venture__factory {
    return super.connect(signer) as Venture__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VentureInterface {
    return new utils.Interface(_abi) as VentureInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Venture {
    return new Contract(address, _abi, signerOrProvider) as Venture;
  }
}