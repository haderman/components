import * as React from 'react';
import styled from 'styled-components'
import { ethers } from 'ethers';

import { Coffee } from './types';
import coffeeContractJSON from './utils/coffee-contract.json';
import { CONTRACT_ADDRESS } from './utils/eth-vars';

const contractABI = coffeeContractJSON.abi;

// const contractAbi = ethers.a;

export default function BuyCoffee() {
  const [currentAccount, setCurrentAccount] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>('');
  const [name, setName] = React.useState<string>('');
  const [allCoffee, setAllCoffee] = React.useState<Coffee>([]);

  const hasAccount = !!currentAccount;

  React.useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  async function checkIfWalletIsConnected() {
    if (window.hasOwnProperty('ethereum') === false) {
      return
    }

    const { ethereum } = window
    const accounts = await ethereum.request<string[]>({ method: 'eth_accounts' });
    if (accounts && accounts.length > 0) {
      setCurrentAccount(accounts[0] as string);
    }
  }

  async function connectWallet() {
    if (window.hasOwnProperty('ethereum') === false) {
      return
    }

    const { ethereum } = window
    const accounts = await ethereum.request<string[]>({
      method: "eth_requestAccounts",
    });
    console.log('accounts: ', accounts);
    if (accounts && accounts.length > 0) {
      setCurrentAccount(accounts[0] as string);
    }
  }

  async function buyCoffee() {
    if (window.hasOwnProperty('ethereum') === false) {
      return
    }

    const { ethereum } = window
    const provider = new ethers.providers.Web3Provider(ethereum as any);
    const signer = provider.getSigner();
    const coffeePortalContract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);

    await showTotalCoffee(coffeePortalContract);

    /*
    * Execute the actual coffee gift from your smart contract
    */
    const coffeeTxn = await coffeePortalContract.buyCoffee(
      message ? message : 'Enjoy Your Coffee',
      name ? name : 'Anonymous',
      ethers.utils.parseEther("0.001"),
      {
        gasLimit: 300000,
      }
    );

    console.log("Mining...", coffeeTxn.hash);
    await coffeeTxn.wait();
    console.log("Minted!");

    await showTotalCoffee(coffeePortalContract);

    clearForm();
  }

  function clearForm() {
    setMessage('');
    setName('');
  }

  const renderForm = () => (
    <form>
      <fieldset>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </fieldset>
      <fieldset>
        <label htmlFor="message">Message: </label>
        <input type="text" id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
      </fieldset>
    </form>
  )

  return (
    <Container>
      <p>buy me a coffee</p>
      {currentAccount && <p>{currentAccount}</p>}
      <button onClick={connectWallet}>
        connect
      </button>
      {hasAccount && renderForm()}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: hsl(0 0% 60% / 1);
  padding: 20px;
`;

async function showTotalCoffee(contract: ethers.Contract) {
  const count = await contract.getTotalCoffee();
  console.log("Retrieved total coffee count...", count.toNumber());
}
