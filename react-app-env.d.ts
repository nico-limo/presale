/// <reference types="react-scripts" />
import { createWalletClient } from "viem"
declare global {
  interface Window {
    ethereum?: createWalletClient
  }
}
