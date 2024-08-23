import {
  createWeb3Modal,
  defaultConfig,
  useWeb3ModalAccount,
} from "@web3modal/ethers/react";

const projectId = "d74ce746c49d6b94ab8933dd3d4bd612";

const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

const metadata = {
  name: "webTech",
  description: "WebTech description",
  url: "https://mywebsite.com",
  icons: ["https://avatars.mywebsite.com/"],
};

const ethersConfig = defaultConfig({
  metadata,
  enableEIP6963: true,
  enableInjected: true,
  enableCoinbase: true,
  defaultChainId: 1,
});

createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
  enableAnalytics: true,
});

const ConnectToWallet = (): JSX.Element => {
  const { address } = useWeb3ModalAccount();
  return (
    <div>
      <p className="text-xs">{address}</p>
      <w3m-button label="Подключить кошелек" />
    </div>
  );
};

export default ConnectToWallet;
