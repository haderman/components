import { MetaMaskInpageProvider } from '@metamask/providers'

export type Coffee = {

}

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}
