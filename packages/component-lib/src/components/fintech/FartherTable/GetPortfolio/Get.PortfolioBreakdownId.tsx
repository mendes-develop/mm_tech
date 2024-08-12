// GET /portfolio/:portfolioId/breakdown 123
export const getPortfolioBreakdownIdData = (_portfolioId: string): PortfolioBreakdown => ({
  "Other": {
    "category": "CASH",
    "securities": {
      "CASH": {
        "description": "US Dollars",
        "allocation": 400
      }
    }
  },
  "US Small Cap Equity": {
    "category": "Equity",
    "securities": {
      "IJR": {
        "description": "iShares Core S&P Small-Cap ETF",
        "allocation": 400
      },
      "IYW": {
        "description": "iShares U.S. Technology ETF",
        "allocation": 267
      }
    }
  },
  "US Mid Cap Equity": {
    "category": "Equity",
    "securities": {
      "SPMD": {
        "description": "SPDR® Portfolio S&P 400 Mid Cap ETF",
        "allocation": 510
      }
    }
  }
})

type EquityType =
  "US Large Cap Equity" |
  "US Small Cap Equity" |
  "US Mid Cap Equity" |
  "Other";

type Category =
  "CASH" |
  "Equity" |
  "Fixed Income" |
  "Real Estate" |
  "Commodities" |
  "Other";


type Securities = {
  [key: string]: {
    description: string;
    allocation: number;
  }
}

type PortfolioBreakdown = {
  [key in EquityType]?: {
    category: Category;
    securities: Securities;
  }
}
