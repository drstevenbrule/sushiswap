import { ChainId } from '../chain'
import { Token } from '../currency/Token.js'
import { Type } from '../currency/Type.js'
import {
  BUSD_ADDRESS,
  DAI_ADDRESS,
  FRAX_ADDRESS,
  MAI_ADDRESS,
  USDC_ADDRESS,
  USDT_ADDRESS,
} from '../currency/constants/token-addresses.js'
import {
  BUSD,
  DAI,
  FRAX,
  MAI,
  USDC,
  USDT,
} from '../currency/constants/tokens.js'

export const STARGATE_CHAIN_ID = {
  [ChainId.ETHEREUM]: 101,
  [ChainId.BSC]: 102,
  [ChainId.AVALANCHE]: 106,
  [ChainId.POLYGON]: 109,
  [ChainId.ARBITRUM]: 110,
  [ChainId.OPTIMISM]: 111,
  [ChainId.FANTOM]: 112,
  [ChainId.METIS]: 151,
  [ChainId.BASE]: 184,
  [ChainId.LINEA]: 183,
  [ChainId.KAVA]: 177,
} as const

export const STARGATE_WIDGET_ADDRESS = {
  [ChainId.ETHEREUM]: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
  [ChainId.BSC]: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
  [ChainId.AVALANCHE]: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
  [ChainId.ARBITRUM]: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
  [ChainId.POLYGON]: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
  [ChainId.OPTIMISM]: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
  [ChainId.FANTOM]: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
  [ChainId.METIS]: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
  [ChainId.BASE]: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
  [ChainId.LINEA]: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
  [ChainId.KAVA]: '0x10d16248bED1E0D0c7cF94fFD99A50c336c7Bcdc',
} as const

export const STARGATE_COMPOSER_ADDRESS = {
  [ChainId.ETHEREUM]: '0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9',
  [ChainId.BSC]: '0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9',
  [ChainId.AVALANCHE]: '0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9',
  [ChainId.ARBITRUM]: '0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9',
  [ChainId.POLYGON]: '0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9',
  [ChainId.OPTIMISM]: '0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9',
  [ChainId.FANTOM]: '0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9',
  [ChainId.METIS]: '0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9',
  [ChainId.BASE]: '0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9',
  [ChainId.LINEA]: '0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9',
  [ChainId.KAVA]: '0xeCc19E177d24551aA7ed6Bc6FE566eCa726CC8a9',
} as const

export const STARGATE_ETH_ADDRESS = {
  [ChainId.ETHEREUM]: '0x72E2F4830b9E45d52F80aC08CB2bEC0FeF72eD9c',
  [ChainId.ARBITRUM]: '0x82CbeCF39bEe528B5476FE6d1550af59a9dB6Fc0',
  [ChainId.OPTIMISM]: '0xb69c8CBCD90A39D8D3d3ccf0a3E968511C3856A0',
  [ChainId.BASE]: '0x224d8fd7ab6ad4c6eb4611ce56ef35dec2277f03',
  [ChainId.LINEA]: '0x224d8fd7ab6ad4c6eb4611ce56ef35dec2277f03',
} as const

export const STARGATE_ETH: Record<keyof typeof STARGATE_ETH_ADDRESS, Token> = {
  [ChainId.ETHEREUM]: new Token({
    chainId: ChainId.ETHEREUM,
    address: STARGATE_ETH_ADDRESS[ChainId.ETHEREUM],
    decimals: 18,
    symbol: 'SGETH',
    name: 'Stargate Ether',
  }),
  [ChainId.ARBITRUM]: new Token({
    chainId: ChainId.ARBITRUM,
    address: STARGATE_ETH_ADDRESS[ChainId.ARBITRUM],
    decimals: 18,
    symbol: 'SGETH',
    name: 'Stargate Ether',
  }),
  [ChainId.OPTIMISM]: new Token({
    chainId: ChainId.OPTIMISM,
    address: STARGATE_ETH_ADDRESS[ChainId.OPTIMISM],
    decimals: 18,
    symbol: 'SGETH',
    name: 'Stargate Ether',
  }),
  [ChainId.BASE]: new Token({
    chainId: ChainId.BASE,
    address: STARGATE_ETH_ADDRESS[ChainId.BASE],
    decimals: 18,
    symbol: 'SGETH',
    name: 'Stargate Ether',
  }),
  [ChainId.LINEA]: new Token({
    chainId: ChainId.LINEA,
    address: STARGATE_ETH_ADDRESS[ChainId.LINEA],
    decimals: 18,
    symbol: 'SGETH',
    name: 'Stargate Ether',
  }),
}

export const STARGATE_WETH_ADDRESS = {
  [ChainId.FANTOM]: '0x695921034f0387eAc4e11620EE91b1b15A6A09fE',
  [ChainId.KAVA]: '0x2DfD4dE5AE386Cd3f4fC8e2cb39240852E47F5E8',
}

export const STARGATE_WETH = {
  [ChainId.FANTOM]: new Token({
    chainId: ChainId.FANTOM,
    address: STARGATE_WETH_ADDRESS[ChainId.FANTOM],
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether',
  }),
  [ChainId.KAVA]: new Token({
    chainId: ChainId.KAVA,
    address: STARGATE_WETH_ADDRESS[ChainId.KAVA],
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether',
  }),
}

export const STARGATE_WBTC_ADDRESS = {
  [ChainId.FANTOM]: '0xf1648C50d2863f780c57849D812b4B7686031A3D',
}

export const STARGATE_WBTC = {
  [ChainId.FANTOM]: new Token({
    chainId: ChainId.FANTOM,
    address: STARGATE_WBTC_ADDRESS[ChainId.FANTOM],
    decimals: 18,
    symbol: 'WBTC',
    name: 'Wrapped BTC',
  }),
}

export const STARGATE_USDC_ADDRESS = {
  [ChainId.ETHEREUM]: USDC_ADDRESS[ChainId.ETHEREUM],
  [ChainId.AVALANCHE]: USDC_ADDRESS[ChainId.AVALANCHE],
  [ChainId.POLYGON]: USDC_ADDRESS[ChainId.POLYGON],
  [ChainId.ARBITRUM]: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
  [ChainId.OPTIMISM]: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
  // [ChainId.FANTOM]: USDC_ADDRESS[ChainId.FANTOM],
  [ChainId.FANTOM]: '0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf',
  // [ChainId.BASE]: USDC_ADDRESS[ChainId.BASE],
  [ChainId.BASE]: '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
} as const

export const STARGATE_USDC: Record<keyof typeof STARGATE_USDC_ADDRESS, Token> =
  {
    [ChainId.ETHEREUM]: USDC[ChainId.ETHEREUM],
    [ChainId.AVALANCHE]: USDC[ChainId.AVALANCHE],
    [ChainId.POLYGON]: USDC[ChainId.POLYGON],
    [ChainId.ARBITRUM]: new Token({
      chainId: ChainId.ARBITRUM,
      address: STARGATE_USDC_ADDRESS[ChainId.ARBITRUM],
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin',
    }),
    [ChainId.OPTIMISM]: new Token({
      chainId: ChainId.OPTIMISM,
      address: STARGATE_USDC_ADDRESS[ChainId.OPTIMISM],
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin',
    }),
    // [ChainId.FANTOM]: USDC[ChainId.FANTOM],
    [ChainId.FANTOM]: new Token({
      chainId: ChainId.FANTOM,
      address: STARGATE_USDC_ADDRESS[ChainId.FANTOM],
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin',
    }),
    // [ChainId.BASE]: USDC[ChainId.BASE],
    [ChainId.BASE]: new Token({
      chainId: ChainId.BASE,
      address: STARGATE_USDC_ADDRESS[ChainId.BASE],
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin',
    }),
  } as const

export const STARGATE_USDT_ADDRESS = {
  [ChainId.ETHEREUM]: USDT_ADDRESS[ChainId.ETHEREUM],
  [ChainId.BSC]: USDT_ADDRESS[ChainId.BSC],
  [ChainId.AVALANCHE]: USDT_ADDRESS[ChainId.AVALANCHE],
  [ChainId.POLYGON]: USDT_ADDRESS[ChainId.POLYGON],
  [ChainId.ARBITRUM]: USDT_ADDRESS[ChainId.ARBITRUM],
  [ChainId.FANTOM]: '0xcc1b99dDAc1a33c201a742A1851662E87BC7f22C',
  [ChainId.METIS]: USDT_ADDRESS[ChainId.METIS],
  [ChainId.KAVA]: '0xAad094F6A75A14417d39f04E690fC216f080A41a',
} as const

export const STARGATE_USDT: Record<keyof typeof STARGATE_USDT_ADDRESS, Token> =
  {
    [ChainId.ETHEREUM]: USDT[ChainId.ETHEREUM],
    [ChainId.BSC]: USDT[ChainId.BSC],
    [ChainId.AVALANCHE]: USDT[ChainId.AVALANCHE],
    [ChainId.POLYGON]: USDT[ChainId.POLYGON],
    [ChainId.ARBITRUM]: USDT[ChainId.ARBITRUM],
    [ChainId.FANTOM]: new Token({
      chainId: ChainId.FANTOM,
      address: STARGATE_USDT_ADDRESS[ChainId.FANTOM],
      decimals: 6,
      symbol: 'USDT',
      name: 'Tether USD',
    }),
    [ChainId.METIS]: USDT[ChainId.METIS],
    [ChainId.KAVA]: new Token({
      chainId: ChainId.KAVA,
      address: STARGATE_USDT_ADDRESS[ChainId.KAVA],
      decimals: 6,
      symbol: 'USDT',
      name: 'Tether USD',
    }),
  } as const

export const STARGATE_DAI_ADDRESS = {
  [ChainId.ETHEREUM]: DAI_ADDRESS[ChainId.ETHEREUM],
  [ChainId.POLYGON]: DAI_ADDRESS[ChainId.POLYGON],
  [ChainId.OPTIMISM]: DAI_ADDRESS[ChainId.OPTIMISM],
} as const

export const STARGATE_DAI: Record<keyof typeof STARGATE_DAI_ADDRESS, Token> = {
  [ChainId.ETHEREUM]: DAI[ChainId.ETHEREUM],
  [ChainId.POLYGON]: DAI[ChainId.POLYGON],
  [ChainId.OPTIMISM]: DAI[ChainId.OPTIMISM],
} as const

export const STARGATE_FRAX_ADDRESS = {
  [ChainId.ETHEREUM]: FRAX_ADDRESS[ChainId.ETHEREUM],
  [ChainId.AVALANCHE]: FRAX_ADDRESS[ChainId.AVALANCHE],
  [ChainId.ARBITRUM]: FRAX_ADDRESS[ChainId.ARBITRUM],
  [ChainId.OPTIMISM]: FRAX_ADDRESS[ChainId.OPTIMISM],
} as const

export const STARGATE_FRAX: Record<keyof typeof STARGATE_FRAX_ADDRESS, Token> =
  {
    [ChainId.ETHEREUM]: FRAX[ChainId.ETHEREUM],
    [ChainId.AVALANCHE]: FRAX[ChainId.AVALANCHE],
    [ChainId.ARBITRUM]: FRAX[ChainId.ARBITRUM],
    [ChainId.OPTIMISM]: FRAX[ChainId.OPTIMISM],
  }

export const STARGATE_BUSD_ADDRESS = {
  [ChainId.BSC]: BUSD_ADDRESS[ChainId.BSC],
} as const

export const STARGATE_BUSD: Record<keyof typeof STARGATE_BUSD_ADDRESS, Token> =
  {
    [ChainId.BSC]: BUSD[ChainId.BSC],
  }

export const STARGATE_MAI_ADDRESS = {
  [ChainId.ETHEREUM]: MAI_ADDRESS[ChainId.ETHEREUM],
  [ChainId.BSC]: MAI_ADDRESS[ChainId.BSC],
  [ChainId.AVALANCHE]: MAI_ADDRESS[ChainId.AVALANCHE],
  [ChainId.POLYGON]: MAI_ADDRESS[ChainId.POLYGON],
  [ChainId.ARBITRUM]: MAI_ADDRESS[ChainId.ARBITRUM],
  [ChainId.OPTIMISM]: MAI_ADDRESS[ChainId.OPTIMISM],
} as const

export const STARGATE_MAI: Record<keyof typeof STARGATE_MAI_ADDRESS, Token> = {
  [ChainId.ETHEREUM]: MAI[ChainId.ETHEREUM],
  [ChainId.BSC]: MAI[ChainId.BSC],
  [ChainId.AVALANCHE]: MAI[ChainId.AVALANCHE],
  [ChainId.POLYGON]: MAI[ChainId.POLYGON],
  [ChainId.ARBITRUM]: MAI[ChainId.ARBITRUM],
  [ChainId.OPTIMISM]: MAI[ChainId.OPTIMISM],
}

export const STARGATE_BRIDGE_TOKENS: Record<number, Token[]> = {
  [ChainId.ETHEREUM]: [
    STARGATE_ETH[ChainId.ETHEREUM],
    STARGATE_USDC[ChainId.ETHEREUM],
    STARGATE_USDT[ChainId.ETHEREUM],
    STARGATE_DAI[ChainId.ETHEREUM],
    STARGATE_FRAX[ChainId.ETHEREUM],
    STARGATE_MAI[ChainId.ETHEREUM],
  ],
  [ChainId.BSC]: [
    STARGATE_USDT[ChainId.BSC],
    STARGATE_BUSD[ChainId.BSC],
    STARGATE_MAI[ChainId.BSC],
  ],
  [ChainId.AVALANCHE]: [
    STARGATE_USDC[ChainId.AVALANCHE],
    STARGATE_USDT[ChainId.AVALANCHE],
    STARGATE_FRAX[ChainId.AVALANCHE],
    STARGATE_MAI[ChainId.AVALANCHE],
  ],
  [ChainId.POLYGON]: [
    STARGATE_USDC[ChainId.POLYGON],
    STARGATE_USDT[ChainId.POLYGON],
    STARGATE_DAI[ChainId.POLYGON],
    STARGATE_MAI[ChainId.POLYGON],
  ],
  [ChainId.ARBITRUM]: [
    STARGATE_ETH[ChainId.ARBITRUM],
    STARGATE_USDC[ChainId.ARBITRUM],
    STARGATE_USDT[ChainId.ARBITRUM],
    STARGATE_FRAX[ChainId.ARBITRUM],
    STARGATE_MAI[ChainId.ARBITRUM],
  ],
  [ChainId.OPTIMISM]: [
    STARGATE_ETH[ChainId.OPTIMISM],
    STARGATE_USDC[ChainId.OPTIMISM],
    STARGATE_DAI[ChainId.OPTIMISM],
    STARGATE_FRAX[ChainId.OPTIMISM],
    STARGATE_MAI[ChainId.OPTIMISM],
  ],
  [ChainId.FANTOM]: [STARGATE_USDC[ChainId.FANTOM]],
  [ChainId.METIS]: [STARGATE_USDT[ChainId.METIS]],
  [ChainId.BASE]: [STARGATE_ETH[ChainId.BASE], STARGATE_USDC[ChainId.BASE]],
  [ChainId.LINEA]: [STARGATE_ETH[ChainId.LINEA]],
}

export const STARGATE_BRIDGE_TOKEN_ADDRESSES: Record<number, string[]> = {
  [ChainId.ETHEREUM]: [
    STARGATE_ETH_ADDRESS[ChainId.ETHEREUM],
    STARGATE_USDC_ADDRESS[ChainId.ETHEREUM],
    STARGATE_USDT_ADDRESS[ChainId.ETHEREUM],
    STARGATE_DAI_ADDRESS[ChainId.ETHEREUM],
    STARGATE_FRAX_ADDRESS[ChainId.ETHEREUM],
    STARGATE_MAI_ADDRESS[ChainId.ETHEREUM],
  ],
  [ChainId.BSC]: [
    STARGATE_USDT_ADDRESS[ChainId.BSC],
    STARGATE_BUSD_ADDRESS[ChainId.BSC],
    STARGATE_MAI_ADDRESS[ChainId.BSC],
  ],
  [ChainId.AVALANCHE]: [
    STARGATE_USDC_ADDRESS[ChainId.AVALANCHE],
    STARGATE_USDT_ADDRESS[ChainId.AVALANCHE],
    STARGATE_FRAX_ADDRESS[ChainId.AVALANCHE],
    STARGATE_MAI_ADDRESS[ChainId.AVALANCHE],
  ],
  [ChainId.POLYGON]: [
    STARGATE_USDC_ADDRESS[ChainId.POLYGON],
    STARGATE_USDT_ADDRESS[ChainId.POLYGON],
    STARGATE_DAI_ADDRESS[ChainId.POLYGON],
    STARGATE_MAI_ADDRESS[ChainId.POLYGON],
  ],
  [ChainId.ARBITRUM]: [
    STARGATE_ETH_ADDRESS[ChainId.ARBITRUM],
    STARGATE_USDC_ADDRESS[ChainId.ARBITRUM],
    STARGATE_USDT_ADDRESS[ChainId.ARBITRUM],
    STARGATE_FRAX_ADDRESS[ChainId.ARBITRUM],
    STARGATE_MAI_ADDRESS[ChainId.ARBITRUM],
  ],
  [ChainId.OPTIMISM]: [
    STARGATE_ETH_ADDRESS[ChainId.OPTIMISM],
    STARGATE_USDC_ADDRESS[ChainId.OPTIMISM],
    STARGATE_DAI_ADDRESS[ChainId.OPTIMISM],
    STARGATE_FRAX_ADDRESS[ChainId.OPTIMISM],
    STARGATE_MAI_ADDRESS[ChainId.OPTIMISM],
  ],
  [ChainId.FANTOM]: [STARGATE_USDC_ADDRESS[ChainId.FANTOM]],
  [ChainId.METIS]: [STARGATE_USDT_ADDRESS[ChainId.METIS]],
  [ChainId.BASE]: [
    STARGATE_ETH_ADDRESS[ChainId.BASE],
    STARGATE_USDC_ADDRESS[ChainId.BASE],
  ],
  [ChainId.LINEA]: [STARGATE_ETH_ADDRESS[ChainId.LINEA]],
}

export const STARGATE_POOL_ID: Record<number, Record<string, number>> = {
  [ChainId.ETHEREUM]: {
    [STARGATE_ETH_ADDRESS[ChainId.ETHEREUM]]: 13,
    [STARGATE_USDC_ADDRESS[ChainId.ETHEREUM]]: 1,
    [STARGATE_USDT_ADDRESS[ChainId.ETHEREUM]]: 2,
    [STARGATE_DAI_ADDRESS[ChainId.ETHEREUM]]: 3,
    [STARGATE_FRAX_ADDRESS[ChainId.ETHEREUM]]: 7,
    [STARGATE_MAI_ADDRESS[ChainId.ETHEREUM]]: 16,
  },
  [ChainId.BSC]: {
    [STARGATE_USDT_ADDRESS[ChainId.BSC]]: 2,
    [STARGATE_BUSD_ADDRESS[ChainId.BSC]]: 5,
    [STARGATE_MAI_ADDRESS[ChainId.BSC]]: 16,
  },
  [ChainId.AVALANCHE]: {
    [STARGATE_USDC_ADDRESS[ChainId.AVALANCHE]]: 1,
    [STARGATE_USDT_ADDRESS[ChainId.AVALANCHE]]: 2,
    [STARGATE_FRAX_ADDRESS[ChainId.AVALANCHE]]: 7,
    [STARGATE_MAI_ADDRESS[ChainId.AVALANCHE]]: 16,
  },
  [ChainId.POLYGON]: {
    [STARGATE_USDC_ADDRESS[ChainId.POLYGON]]: 1,
    [STARGATE_USDT_ADDRESS[ChainId.POLYGON]]: 2,
    [STARGATE_DAI_ADDRESS[ChainId.POLYGON]]: 3,
    [STARGATE_MAI_ADDRESS[ChainId.POLYGON]]: 16,
  },
  [ChainId.ARBITRUM]: {
    [STARGATE_ETH_ADDRESS[ChainId.ARBITRUM]]: 13,
    [STARGATE_USDC_ADDRESS[ChainId.ARBITRUM]]: 1,
    [STARGATE_USDT_ADDRESS[ChainId.ARBITRUM]]: 2,
    [STARGATE_FRAX_ADDRESS[ChainId.ARBITRUM]]: 7,
    [STARGATE_MAI_ADDRESS[ChainId.ARBITRUM]]: 16,
  },
  [ChainId.OPTIMISM]: {
    [STARGATE_ETH_ADDRESS[ChainId.OPTIMISM]]: 13,
    [STARGATE_USDC_ADDRESS[ChainId.OPTIMISM]]: 1,
    [STARGATE_DAI_ADDRESS[ChainId.OPTIMISM]]: 3,
    [STARGATE_FRAX_ADDRESS[ChainId.OPTIMISM]]: 7,
    [STARGATE_MAI_ADDRESS[ChainId.OPTIMISM]]: 16,
  },
  [ChainId.FANTOM]: { [STARGATE_USDC_ADDRESS[ChainId.FANTOM]]: 21 },
  [ChainId.METIS]: { [STARGATE_USDT_ADDRESS[ChainId.METIS]]: 19 },
  [ChainId.BASE]: {
    [STARGATE_ETH_ADDRESS[ChainId.BASE]]: 13,
    [STARGATE_USDC_ADDRESS[ChainId.BASE]]: 1,
  },
  [ChainId.LINEA]: { [STARGATE_ETH_ADDRESS[ChainId.LINEA]]: 13 },
}

export const STARGATE_POOL_ADDRESS: Record<number, Record<string, string>> = {
  [ChainId.ETHEREUM]: {
    [STARGATE_ETH_ADDRESS[ChainId.ETHEREUM]]:
      '0x101816545F6bd2b1076434B54383a1E633390A2E',
    [STARGATE_USDC_ADDRESS[ChainId.ETHEREUM]]:
      '0xdf0770dF86a8034b3EFEf0A1Bb3c889B8332FF56',
    [STARGATE_USDT_ADDRESS[ChainId.ETHEREUM]]:
      '0x38ea452219524bb87e18de1c24d3bb59510bd783',
    [STARGATE_DAI_ADDRESS[ChainId.ETHEREUM]]:
      '0x0Faf1d2d3CED330824de3B8200fc8dc6E397850d',
    [STARGATE_FRAX_ADDRESS[ChainId.ETHEREUM]]:
      '0xfA0F307783AC21C39E939ACFF795e27b650F6e68',
    [STARGATE_MAI_ADDRESS[ChainId.ETHEREUM]]:
      '0x9cef9a0b1be0d289ac9f4a98ff317c33eaa84eb8',
  },
  [ChainId.BSC]: {
    [STARGATE_USDT_ADDRESS[ChainId.BSC]]:
      '0x9aA83081AA06AF7208Dcc7A4cB72C94d057D2cda',
    [STARGATE_BUSD_ADDRESS[ChainId.BSC]]:
      '0x98a5737749490856b401DB5Dc27F522fC314A4e1',
    [STARGATE_MAI_ADDRESS[ChainId.BSC]]:
      '0x7BfD7f2498C4796f10b6C611D9db393D3052510C',
  },
  [ChainId.AVALANCHE]: {
    [STARGATE_USDC_ADDRESS[ChainId.AVALANCHE]]:
      '0x1205f31718499dBf1fCa446663B532Ef87481fe1',
    [STARGATE_USDT_ADDRESS[ChainId.AVALANCHE]]:
      '0x29e38769f23701A2e4A8Ef0492e19dA4604Be62c',
    [STARGATE_FRAX_ADDRESS[ChainId.AVALANCHE]]:
      '0x1c272232Df0bb6225dA87f4dEcD9d37c32f63Eea',
    [STARGATE_MAI_ADDRESS[ChainId.AVALANCHE]]:
      '0x8736f92646B2542B3e5F3c63590cA7Fe313e283B',
  },
  [ChainId.POLYGON]: {
    [STARGATE_USDC_ADDRESS[ChainId.POLYGON]]:
      '0x1205f31718499dBf1fCa446663B532Ef87481fe1',
    [STARGATE_USDT_ADDRESS[ChainId.POLYGON]]:
      '0x29e38769f23701A2e4A8Ef0492e19dA4604Be62c',
    [STARGATE_DAI_ADDRESS[ChainId.POLYGON]]:
      '0x1c272232Df0bb6225dA87f4dEcD9d37c32f63Eea',
    [STARGATE_MAI_ADDRESS[ChainId.POLYGON]]:
      '0x8736f92646B2542B3e5F3c63590cA7Fe313e283B',
  },
  [ChainId.ARBITRUM]: {
    [STARGATE_ETH_ADDRESS[ChainId.ARBITRUM]]:
      '0x915A55e36A01285A14f05dE6e81ED9cE89772f8e',
    [STARGATE_USDC_ADDRESS[ChainId.ARBITRUM]]:
      '0x892785f33CdeE22A30AEF750F285E18c18040c3e',
    [STARGATE_USDT_ADDRESS[ChainId.ARBITRUM]]:
      '0xB6CfcF89a7B22988bfC96632aC2A9D6daB60d641',
    [STARGATE_FRAX_ADDRESS[ChainId.ARBITRUM]]:
      '0xaa4BF442F024820B2C28Cd0FD72b82c63e66F56C',
    [STARGATE_MAI_ADDRESS[ChainId.ARBITRUM]]:
      '0xF39B7Be294cB36dE8c510e267B82bb588705d977',
  },
  [ChainId.OPTIMISM]: {
    [STARGATE_ETH_ADDRESS[ChainId.OPTIMISM]]:
      '0xd22363e3762cA7339569F3d33EADe20127D5F98C',
    [STARGATE_USDC_ADDRESS[ChainId.OPTIMISM]]:
      '0xDecC0c09c3B5f6e92EF4184125D5648a66E35298',
    [STARGATE_DAI_ADDRESS[ChainId.OPTIMISM]]:
      '0x165137624F1f692e69659f944BF69DE02874ee27',
    [STARGATE_FRAX_ADDRESS[ChainId.OPTIMISM]]:
      '0x368605D9C6243A80903b9e326f1Cddde088B8924',
    [STARGATE_MAI_ADDRESS[ChainId.OPTIMISM]]:
      '0x5421FA1A48f9FF81e4580557E86C7C0D24C18036',
  },
  [ChainId.FANTOM]: {
    [STARGATE_USDC_ADDRESS[ChainId.FANTOM]]:
      '0xc647ce76ec30033aa319d472ae9f4462068f2ad7',
  },
  [ChainId.METIS]: {
    [STARGATE_USDT_ADDRESS[ChainId.METIS]]:
      '0x2b60473a7C41Deb80EDdaafD5560e963440eb632',
  },
  [ChainId.BASE]: {
    [STARGATE_ETH_ADDRESS[ChainId.BASE]]:
      '0x28fc411f9e1c480AD312b3d9C60c22b965015c6B',
    [STARGATE_USDC_ADDRESS[ChainId.BASE]]:
      '0x4c80e24119cfb836cdf0a6b53dc23f04f7e652ca',
  },
  [ChainId.LINEA]: {
    [STARGATE_ETH_ADDRESS[ChainId.LINEA]]:
      '0xAad094F6A75A14417d39f04E690fC216f080A41a',
  },
}

export function isStargateBridgeToken(currency: Type | undefined) {
  if (!currency) return false
  if (currency.isNative && currency.chainId in STARGATE_ETH_ADDRESS) return true
  if (!STARGATE_BRIDGE_TOKEN_ADDRESSES[currency.chainId]) return false
  return STARGATE_BRIDGE_TOKEN_ADDRESSES?.[currency.chainId]?.includes(
    currency.wrapped.address,
  )
}

export const STARGATE_TOKEN = new Token({
  chainId: ChainId.ETHEREUM,
  address: '0xaf5191b0de278c7286d6c7cc6ab6bb8a73ba2cd6',
  decimals: 18,
  symbol: 'STG',
  name: 'StargateToken',
})

export type StargateBridgeTokens =
  typeof STARGATE_BRIDGE_TOKENS[StargateChainId]

export type StargateBridgeToken = StargateBridgeTokens[number]

export const STARGATE_SUPPORTED_CHAIN_IDS = [
  ChainId.ETHEREUM,
  ChainId.BSC,
  ChainId.AVALANCHE,
  ChainId.POLYGON,
  ChainId.ARBITRUM,
  ChainId.OPTIMISM,
  // ChainId.FANTOM,
  ChainId.BASE,
  ChainId.LINEA,
] as const

export type StargateChainId = typeof STARGATE_SUPPORTED_CHAIN_IDS[number]

// https://stargateprotocol.gitbook.io/stargate/developers/stargate-chain-paths

const ETHEREUM_CHAIN_PATHS = {
  [STARGATE_USDC_ADDRESS[ChainId.ETHEREUM]]: [
    STARGATE_BUSD[ChainId.BSC],
    STARGATE_USDT[ChainId.BSC],
    STARGATE_USDC[ChainId.AVALANCHE],
    STARGATE_USDT[ChainId.AVALANCHE],
    STARGATE_USDC[ChainId.POLYGON],
    STARGATE_USDT[ChainId.POLYGON],
    STARGATE_USDC[ChainId.ARBITRUM],
    STARGATE_USDT[ChainId.ARBITRUM],
    STARGATE_USDC[ChainId.OPTIMISM],
    STARGATE_USDC[ChainId.FANTOM],
    STARGATE_USDC[ChainId.BASE],
  ],
  [STARGATE_USDT_ADDRESS[ChainId.ETHEREUM]]: [
    STARGATE_BUSD[ChainId.BSC],
    STARGATE_USDT[ChainId.BSC],
    STARGATE_USDC[ChainId.AVALANCHE],
    STARGATE_USDT[ChainId.AVALANCHE],
    STARGATE_USDC[ChainId.POLYGON],
    STARGATE_USDT[ChainId.POLYGON],
    STARGATE_USDC[ChainId.ARBITRUM],
    STARGATE_USDT[ChainId.ARBITRUM],
    STARGATE_USDC[ChainId.OPTIMISM],
    STARGATE_USDC[ChainId.FANTOM],
    STARGATE_USDC[ChainId.BASE],
  ],
  [STARGATE_DAI_ADDRESS[ChainId.ETHEREUM]]: [
    STARGATE_DAI[ChainId.POLYGON],
    STARGATE_DAI[ChainId.OPTIMISM],
  ],
  [STARGATE_FRAX_ADDRESS[ChainId.ETHEREUM]]: [
    STARGATE_FRAX[ChainId.AVALANCHE],
    STARGATE_FRAX[ChainId.ARBITRUM],
    STARGATE_FRAX[ChainId.OPTIMISM],
  ],
  [STARGATE_ETH_ADDRESS[ChainId.ETHEREUM]]: [
    STARGATE_ETH[ChainId.ARBITRUM],
    STARGATE_ETH[ChainId.OPTIMISM],
    STARGATE_ETH[ChainId.BASE],
    STARGATE_ETH[ChainId.LINEA],
  ],
  [STARGATE_MAI_ADDRESS[ChainId.ETHEREUM]]: [
    STARGATE_MAI[ChainId.BSC],
    STARGATE_MAI[ChainId.AVALANCHE],
    STARGATE_MAI[ChainId.POLYGON],
    STARGATE_MAI[ChainId.ARBITRUM],
    STARGATE_MAI[ChainId.OPTIMISM],
  ],
}

const BSC_CHAIN_PATHS = {
  [STARGATE_BUSD_ADDRESS[ChainId.BSC]]: [
    STARGATE_USDC[ChainId.ETHEREUM],
    STARGATE_USDT[ChainId.ETHEREUM],
    STARGATE_USDC[ChainId.AVALANCHE],
    STARGATE_USDT[ChainId.AVALANCHE],
    STARGATE_USDC[ChainId.POLYGON],
    STARGATE_USDT[ChainId.POLYGON],
    STARGATE_USDC[ChainId.ARBITRUM],
    STARGATE_USDT[ChainId.ARBITRUM],
    STARGATE_USDC[ChainId.OPTIMISM],
    STARGATE_USDC[ChainId.FANTOM],
    STARGATE_USDC[ChainId.BASE],
  ],
  [STARGATE_USDT_ADDRESS[ChainId.BSC]]: [
    STARGATE_USDC[ChainId.ETHEREUM],
    STARGATE_USDT[ChainId.ETHEREUM],
    STARGATE_USDC[ChainId.AVALANCHE],
    STARGATE_USDT[ChainId.AVALANCHE],
    STARGATE_USDC[ChainId.POLYGON],
    STARGATE_USDT[ChainId.POLYGON],
    STARGATE_USDC[ChainId.ARBITRUM],
    STARGATE_USDT[ChainId.ARBITRUM],
    STARGATE_USDC[ChainId.OPTIMISM],
    STARGATE_USDC[ChainId.FANTOM],
    STARGATE_USDC[ChainId.BASE],
  ],
  [STARGATE_MAI_ADDRESS[ChainId.BSC]]: [
    STARGATE_MAI[ChainId.ETHEREUM],
    STARGATE_MAI[ChainId.AVALANCHE],
    STARGATE_MAI[ChainId.POLYGON],
    STARGATE_MAI[ChainId.ARBITRUM],
    STARGATE_MAI[ChainId.OPTIMISM],
  ],
}

const AVALANCE_CHAIN_PATHS = {
  [STARGATE_USDC_ADDRESS[ChainId.AVALANCHE]]: [
    STARGATE_USDC[ChainId.ETHEREUM],
    STARGATE_USDT[ChainId.ETHEREUM],
    STARGATE_BUSD[ChainId.BSC],
    STARGATE_USDT[ChainId.BSC],
    STARGATE_USDC[ChainId.POLYGON],
    STARGATE_USDT[ChainId.POLYGON],
    STARGATE_USDC[ChainId.ARBITRUM],
    STARGATE_USDT[ChainId.ARBITRUM],
    STARGATE_USDC[ChainId.OPTIMISM],
    STARGATE_USDC[ChainId.FANTOM],
    STARGATE_USDC[ChainId.BASE],
  ],
  [STARGATE_USDT_ADDRESS[ChainId.AVALANCHE]]: [
    STARGATE_USDC[ChainId.ETHEREUM],
    STARGATE_USDT[ChainId.ETHEREUM],
    STARGATE_BUSD[ChainId.BSC],
    STARGATE_USDT[ChainId.BSC],
    STARGATE_USDC[ChainId.POLYGON],
    STARGATE_USDT[ChainId.POLYGON],
    STARGATE_USDC[ChainId.ARBITRUM],
    STARGATE_USDT[ChainId.ARBITRUM],
    STARGATE_USDC[ChainId.OPTIMISM],
    STARGATE_USDC[ChainId.FANTOM],
    STARGATE_USDC[ChainId.BASE],
  ],
  [STARGATE_FRAX_ADDRESS[ChainId.AVALANCHE]]: [
    STARGATE_FRAX[ChainId.ETHEREUM],
    STARGATE_FRAX[ChainId.ARBITRUM],
    STARGATE_FRAX[ChainId.OPTIMISM],
  ],
  [STARGATE_MAI_ADDRESS[ChainId.AVALANCHE]]: [
    STARGATE_MAI[ChainId.ETHEREUM],
    STARGATE_MAI[ChainId.BSC],
    STARGATE_MAI[ChainId.POLYGON],
    STARGATE_MAI[ChainId.ARBITRUM],
    STARGATE_MAI[ChainId.OPTIMISM],
  ],
}

const POLYGON_CHAIN_PATHS = {
  [STARGATE_USDC_ADDRESS[ChainId.POLYGON]]: [
    STARGATE_USDC[ChainId.ETHEREUM],
    STARGATE_USDT[ChainId.ETHEREUM],
    STARGATE_BUSD[ChainId.BSC],
    STARGATE_USDT[ChainId.BSC],
    STARGATE_USDC[ChainId.AVALANCHE],
    STARGATE_USDT[ChainId.AVALANCHE],
    STARGATE_USDC[ChainId.ARBITRUM],
    STARGATE_USDT[ChainId.ARBITRUM],
    STARGATE_USDC[ChainId.OPTIMISM],
    STARGATE_USDC[ChainId.FANTOM],
    STARGATE_USDC[ChainId.BASE],
  ],
  [STARGATE_USDT_ADDRESS[ChainId.POLYGON]]: [
    STARGATE_USDC[ChainId.ETHEREUM],
    STARGATE_USDT[ChainId.ETHEREUM],
    STARGATE_BUSD[ChainId.BSC],
    STARGATE_USDT[ChainId.BSC],
    STARGATE_USDC[ChainId.AVALANCHE],
    STARGATE_USDT[ChainId.AVALANCHE],
    STARGATE_USDC[ChainId.ARBITRUM],
    STARGATE_USDT[ChainId.ARBITRUM],
    STARGATE_USDC[ChainId.OPTIMISM],
    STARGATE_USDC[ChainId.FANTOM],
    STARGATE_USDC[ChainId.BASE],
  ],
  [STARGATE_DAI_ADDRESS[ChainId.POLYGON]]: [
    STARGATE_DAI[ChainId.ETHEREUM],
    STARGATE_DAI[ChainId.OPTIMISM],
  ],
  [STARGATE_MAI_ADDRESS[ChainId.POLYGON]]: [
    STARGATE_MAI[ChainId.ETHEREUM],
    STARGATE_MAI[ChainId.BSC],
    STARGATE_MAI[ChainId.AVALANCHE],
    STARGATE_MAI[ChainId.ARBITRUM],
    STARGATE_MAI[ChainId.OPTIMISM],
  ],
}

const ARBITRUM_CHAIN_PATHS = {
  [STARGATE_USDC_ADDRESS[ChainId.ARBITRUM]]: [
    STARGATE_USDC[ChainId.ETHEREUM],
    STARGATE_USDT[ChainId.ETHEREUM],
    STARGATE_BUSD[ChainId.BSC],
    STARGATE_USDT[ChainId.BSC],
    STARGATE_USDC[ChainId.AVALANCHE],
    STARGATE_USDT[ChainId.AVALANCHE],
    STARGATE_USDC[ChainId.POLYGON],
    STARGATE_USDT[ChainId.POLYGON],
    STARGATE_USDC[ChainId.OPTIMISM],
    STARGATE_USDC[ChainId.FANTOM],
    STARGATE_USDC[ChainId.BASE],
  ],
  [STARGATE_USDT_ADDRESS[ChainId.ARBITRUM]]: [
    STARGATE_USDC[ChainId.ETHEREUM],
    STARGATE_USDT[ChainId.ETHEREUM],
    STARGATE_BUSD[ChainId.BSC],
    STARGATE_USDT[ChainId.BSC],
    STARGATE_USDC[ChainId.AVALANCHE],
    STARGATE_USDT[ChainId.AVALANCHE],
    STARGATE_USDC[ChainId.POLYGON],
    STARGATE_USDT[ChainId.POLYGON],
    STARGATE_USDC[ChainId.OPTIMISM],
    STARGATE_USDC[ChainId.FANTOM],
    STARGATE_USDC[ChainId.BASE],
  ],
  [STARGATE_FRAX_ADDRESS[ChainId.ARBITRUM]]: [
    STARGATE_FRAX[ChainId.ETHEREUM],
    STARGATE_FRAX[ChainId.AVALANCHE],
    STARGATE_FRAX[ChainId.OPTIMISM],
  ],
  [STARGATE_ETH_ADDRESS[ChainId.ARBITRUM]]: [
    STARGATE_ETH[ChainId.ETHEREUM],
    STARGATE_ETH[ChainId.OPTIMISM],
    STARGATE_ETH[ChainId.BASE],
    STARGATE_ETH[ChainId.LINEA],
  ],
  [STARGATE_MAI_ADDRESS[ChainId.ARBITRUM]]: [
    STARGATE_MAI[ChainId.ETHEREUM],
    STARGATE_MAI[ChainId.BSC],
    STARGATE_MAI[ChainId.AVALANCHE],
    STARGATE_MAI[ChainId.POLYGON],
    STARGATE_MAI[ChainId.OPTIMISM],
  ],
}

const OPTIMISM_CHAIN_PATHS = {
  [STARGATE_USDC_ADDRESS[ChainId.OPTIMISM]]: [
    STARGATE_USDC[ChainId.ETHEREUM],
    STARGATE_USDT[ChainId.ETHEREUM],
    STARGATE_BUSD[ChainId.BSC],
    STARGATE_USDT[ChainId.BSC],
    STARGATE_USDC[ChainId.AVALANCHE],
    STARGATE_USDT[ChainId.AVALANCHE],
    STARGATE_USDC[ChainId.POLYGON],
    STARGATE_USDT[ChainId.POLYGON],
    STARGATE_USDC[ChainId.ARBITRUM],
    STARGATE_USDT[ChainId.ARBITRUM],
    STARGATE_USDC[ChainId.FANTOM],
    STARGATE_USDC[ChainId.BASE],
  ],
  [STARGATE_DAI_ADDRESS[ChainId.OPTIMISM]]: [
    STARGATE_DAI[ChainId.ETHEREUM],
    STARGATE_DAI[ChainId.POLYGON],
  ],
  [STARGATE_FRAX_ADDRESS[ChainId.OPTIMISM]]: [
    STARGATE_FRAX[ChainId.ETHEREUM],
    STARGATE_FRAX[ChainId.AVALANCHE],
    STARGATE_FRAX[ChainId.ARBITRUM],
  ],
  [STARGATE_ETH_ADDRESS[ChainId.OPTIMISM]]: [
    STARGATE_ETH[ChainId.ETHEREUM],
    STARGATE_ETH[ChainId.ARBITRUM],
    STARGATE_ETH[ChainId.BASE],
    STARGATE_ETH[ChainId.LINEA],
  ],
  [STARGATE_MAI_ADDRESS[ChainId.OPTIMISM]]: [
    STARGATE_MAI[ChainId.ETHEREUM],
    STARGATE_MAI[ChainId.BSC],
    STARGATE_MAI[ChainId.AVALANCHE],
    STARGATE_MAI[ChainId.POLYGON],
    STARGATE_MAI[ChainId.ARBITRUM],
  ],
}

// const FANTOM_CHAIN_PATHS = {
//   [STARGATE_USDC_ADDRESS[ChainId.FANTOM]]: [
//     STARGATE_USDC[ChainId.ETHEREUM],
//     STARGATE_USDT[ChainId.ETHEREUM],
//     STARGATE_BUSD[ChainId.BSC],
//     STARGATE_USDT[ChainId.BSC],
//     STARGATE_USDC[ChainId.AVALANCHE],
//     STARGATE_USDT[ChainId.AVALANCHE],
//     STARGATE_USDC[ChainId.POLYGON],
//     STARGATE_USDT[ChainId.POLYGON],
//     STARGATE_USDC[ChainId.ARBITRUM],
//     STARGATE_USDT[ChainId.ARBITRUM],
//     STARGATE_USDC[ChainId.OPTIMISM],
//   ],
// }

const BASE_CHAIN_PATHS = {
  [STARGATE_USDC_ADDRESS[ChainId.BASE]]: [
    STARGATE_USDC[ChainId.ETHEREUM],
    STARGATE_USDT[ChainId.ETHEREUM],
    STARGATE_USDT[ChainId.BSC],
    STARGATE_USDC[ChainId.AVALANCHE],
    STARGATE_USDT[ChainId.AVALANCHE],
    STARGATE_USDC[ChainId.POLYGON],
    STARGATE_USDT[ChainId.POLYGON],
    STARGATE_USDC[ChainId.ARBITRUM],
    STARGATE_USDT[ChainId.ARBITRUM],
    STARGATE_USDC[ChainId.OPTIMISM],
  ],
  [STARGATE_ETH_ADDRESS[ChainId.BASE]]: [
    STARGATE_ETH[ChainId.ETHEREUM],
    STARGATE_ETH[ChainId.ARBITRUM],
    STARGATE_ETH[ChainId.OPTIMISM],
    STARGATE_ETH[ChainId.LINEA],
  ],
}

const LINEA_CHAIN_PATHS = {
  [STARGATE_ETH_ADDRESS[ChainId.LINEA]]: [
    STARGATE_ETH[ChainId.ETHEREUM],
    STARGATE_ETH[ChainId.ARBITRUM],
    STARGATE_ETH[ChainId.OPTIMISM],
    STARGATE_ETH[ChainId.BASE],
  ],
}

export const STARGATE_CHAIN_PATHS: Record<
  StargateChainId,
  Record<`0x${string}`, Token[]>
> = {
  [ChainId.ETHEREUM]: ETHEREUM_CHAIN_PATHS,
  [ChainId.BSC]: BSC_CHAIN_PATHS,
  [ChainId.AVALANCHE]: AVALANCE_CHAIN_PATHS,
  [ChainId.POLYGON]: POLYGON_CHAIN_PATHS,
  [ChainId.ARBITRUM]: ARBITRUM_CHAIN_PATHS,
  [ChainId.OPTIMISM]: OPTIMISM_CHAIN_PATHS,
  // [ChainId.FANTOM]: FANTOM_CHAIN_PATHS,
  [ChainId.BASE]: BASE_CHAIN_PATHS,
  [ChainId.LINEA]: LINEA_CHAIN_PATHS,
}
