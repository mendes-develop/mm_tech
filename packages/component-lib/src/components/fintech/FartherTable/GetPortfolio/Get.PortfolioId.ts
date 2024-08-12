import { getRiskLevel, objectKeys, parseToDate } from "./utils"
import type { PortfolioData } from "./utils"

// GET /portfolio/:portfolioId 123
export const getPortfolioIdData = (_portfolioId: string): PortfolioData => ({
  riskLevel: 69,
  type: 'Tax-advantaged',
  created: "2023-9-13"
} as const)


type PortfolioDataKey = keyof PortfolioData

type PortfolioDataTexts = {
  [label in PortfolioDataKey]: string
}

const texts: PortfolioDataTexts = {
  riskLevel: "Risk Level",
  type: "Type",
  created: "Created"
}

const portfolioData = getPortfolioIdData("123")

export const tableLines = objectKeys(portfolioData)
  .map((key) => {

    if (key == "created") {
      return ({
        label: texts[key],
        value: parseToDate(portfolioData[key])
      })
    }

    if (key == "riskLevel") {
      return ({
        label: texts[key],
        value: getRiskLevel(portfolioData[key])
      })
    }

    if (key == "type") {
      return ({
        label: texts[key],
        value: portfolioData[key]
      })
    }
  })
