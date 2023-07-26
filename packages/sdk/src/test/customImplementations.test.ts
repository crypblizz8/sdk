import { test, expect } from "vitest"
import { 
    isHex,
    isAddress
} from "viem"

import { TokenboundClient } from '../TokenboundClient'
import { TEST_CONFIG } from "./testConfig"


const tokenboundClient = new TokenboundClient({ 
    // signer, 
    chainId: TEST_CONFIG.CHAIN_ID,
    implementationAddress: TEST_CONFIG.CUSTOM_IMPLEMENTATION_ADDRESS,
})

test("tokenboundClient.getAccount → customImplementation", () => {
    const result = tokenboundClient.getAccount({
        tokenContract: TEST_CONFIG.TOKEN_CONTRACT,
        tokenId: TEST_CONFIG.TOKEN_ID,
    })
    expect(result).toEqual(TEST_CONFIG.CUSTOM_IMPLEMENTATION_TB_ACCOUNT)
})

test("tokenboundClient.getAccount → override customImplementation", () => {
    const result = tokenboundClient.getAccount({
        tokenContract: TEST_CONFIG.TOKEN_CONTRACT,
        tokenId: TEST_CONFIG.TOKEN_ID,
        implementationAddress: TEST_CONFIG.CUSTOM_IMPLEMENTATION_ADDRESS_OVERRIDE,

    })
    expect(result).toEqual(TEST_CONFIG.CUSTOM_IMPLEMENTATION_OVERRIDDEN_TB_ACCOUNT)
})

test("tokenboundClient.prepareCreateAccount → customImplementation", async () => {

    const preparedAccount = await tokenboundClient.prepareCreateAccount({
        tokenContract: TEST_CONFIG.TOKEN_CONTRACT,
        tokenId: TEST_CONFIG.TOKEN_ID
        }
    )

    expect(isAddress(preparedAccount.to)).toEqual(true)
    expect(isHex(preparedAccount.data)).toEqual(true)
})
test("tokenboundClient.prepareCreateAccount → customRegistry", async () => {

    const preparedAccount = await tokenboundClient.prepareCreateAccount({
        tokenContract: TEST_CONFIG.TOKEN_CONTRACT,
        tokenId: TEST_CONFIG.TOKEN_ID,
        registryAddress: TEST_CONFIG.CUSTOM_REGISTRY_ADDRESS_OVERRIDE
        }
    )

    expect(isAddress(preparedAccount.to)).toEqual(true)
    expect(isHex(preparedAccount.data)).toEqual(true)
})
test.todo(".createAccount")
