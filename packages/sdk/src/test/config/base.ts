import { getAddress } from "viem"

export const TEST_CONFIG = {
    TOKEN_CONTRACT: `0x7a77F2cFB02546F217d39157471d5B5914DD7644` as `0x${string}`,
    TOKEN_ID: "1",
    CHAIN_ID: 5,

    EXAMPLE_AMOUNT: 0n,
    EXAMPLE_DATA: "",
    
    TB_ACCOUNT: `0x5194b1c04Ed6464b3225324d6794f7d2698D8d1c` as `0x${string}`,
    RECIPIENT_ADDRESS: `0x02101dfb77fde026414827fdc604ddaf224f0921` as `0x${string}`,
    
    // Account address responses based on custom implementation / registry addresses
    CUSTOM_IMPLEMENTATION_ADDRESS: getAddress('0x276870d7908A8EE6828C71c5F461fE0C5FA9360e'),
    CUSTOM_REGISTRY_ADDRESS: getAddress('0x37F9F4215324541c77B0ad04F8E035c6fe6226eb'),
    CUSTOM_IMPLEMENTATION_TB_ACCOUNT: "0x4908e0E6EEe76E2975b85aD763d184FE16fEd2B8" as `0x${string}`,

    // Account address responses based on overridden custom implementation / registry addresses
    CUSTOM_IMPLEMENTATION_ADDRESS_OVERRIDE: getAddress('0x9FefE8a875E7a9b0574751E191a2AF205828dEA4'),
    CUSTOM_REGISTRY_ADDRESS_OVERRIDE: getAddress('0x9FefE8a875E7a9b0574751E191a2AF205828dEA4'),
    CUSTOM_IMPLEMENTATION_OVERRIDDEN_TB_ACCOUNT: "0x00f964768A74d61B968514013e1Fb2bf35cC3836" as `0x${string}`,

    // Sample 721 and 1155 contracts
    TEST_721_CONTRACT: `0x9fa9845e71c3e4f43861ba23b762e09aa8da514e` as `0x${string}`, // eg. https://tokenbound.org/assets/goerli/0x9fa9845e71c3e4f43861ba23b762e09aa8da514e/1
    TEST_1155_CONTRACT: `0x3c73616522d3b3fb05b30910a757d63568ff5249` as `0x${string}`, // eg. https://tokenbound.org/assets/goerli/0x3c73616522d3b3fb05b30910a757d63568ff5249/1

}
