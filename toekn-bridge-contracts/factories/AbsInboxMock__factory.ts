/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import { Provider } from '@ethersproject/providers'
import type { AbsInboxMock, AbsInboxMockInterface } from '../AbsInboxMock'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'maxGas',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'InboxRetryableTicket',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'excessFeeRefundAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'callValueRefundAddress',
        type: 'address',
      },
    ],
    name: 'RefundAddresses',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'maxSubmissionCost',
        type: 'uint256',
      },
    ],
    name: 'TicketData',
    type: 'event',
  },
  {
    inputs: [],
    name: 'activeOutbox',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bridge',
    outputs: [
      {
        internalType: 'contract IBridge',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2ToL1Sender',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2ToL1SenderMock',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'seqNum',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'setL2ToL1Sender',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

export class AbsInboxMock__factory {
  static readonly abi = _abi
  static createInterface(): AbsInboxMockInterface {
    return new utils.Interface(_abi) as AbsInboxMockInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AbsInboxMock {
    return new Contract(address, _abi, signerOrProvider) as AbsInboxMock
  }
}