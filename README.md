# Tokenbound SDK

This repo houses the Tokenbound SDK, a front-end library for interacting with [ERC-6551 accounts](https://eips.ethereum.org/EIPS/eip-6551).

### Packages

- **[@tokenbound/sdk](https://github.com/tokenbound/sdk/tree/main/packages/sdk)** - SDK client for all projects, signing enabled via either Ethers Signer or viem WalletClient.
- **[@tokenbound/react](https://github.com/tokenbound/sdk/tree/main/packages/react)** - Low-level react hooks for interacting with token bound accounts

### Examples

- **[examples/vite-wagmi-viem](https://github.com/tokenbound/sdk/tree/main/examples/vite-wagmi-viem)** - An example app using the tokenbound SDK in a vite project with wagmi
- **[examples/vite-wagmi-ethers](https://github.com/tokenbound/sdk/tree/main/examples/vite-wagmi-ethers)** - An example app using the tokenbound SDK in a vite project with ethers v5
- **[examples/vite-wagmi-ethers6](https://github.com/tokenbound/sdk/tree/main/examples/vite-wagmi-ethers6)** - An example app using the tokenbound SDK in a vite project with ethers v6
- **[examples/vite-wagmi-ethers-rainbowkit](https://github.com/tokenbound/sdk/tree/main/examples/vite-wagmi-rainbowkit)** - An example app using the tokenbound SDK in a vite project with ethers v5

### Development

1. Clone repository and install dependencies:

```bash
# clone the repo
$ git clone <repo>
# install dependencies
$ pnpm install
# build packages
$ pnpm --filter "@tokenbound/*" build
```

NOTE: Any local SDK changes require a rebuild to be useable in the example apps in ```/example```

2. Install [Anvil](https://github.com/foundry-rs/foundry/tree/master/anvil) to run a local Ethereum node.
3. Configure environment variables. See `.env.example` for instructions
4. Run dev server: ```pnpm dev```

## Unit/integration tests

Unit and integration tests are run by [Vitest](https://vitest.dev) and rendered with a [custom `render` function](https://testing-library.com/docs/react-testing-library/setup/#custom-render) from React Testing Library. See usage of ```renderWithWagmiConfig``` in ```packages/sdk/src/tests```.

This configuration allows us to use a single wagmi configuration to test the viem walletClient, Ethers 5, and Ethers 6 implementations with [wagmi's Ethers adaptors](https://wagmi.sh/react/ethers-adapters)

These tests require a local Anvil node so test transactions can be run against a mainnet fork.

### Run Anvil

1. Start Anvil in a terminal session

```bash
pnpm anvil
```

2. Start Vitest in a different terminal session from the SDK root

```bash
pnpm test
```

### Pre-commit Hooks

Husky has been configured to run a pre-commit hook to ensure tests pass

#### Thanks

Props to [@tmm](https://github.com/tmm) for sharing [testing-wagmi](https://github.com/tmm/testing-wagmi) for reference.