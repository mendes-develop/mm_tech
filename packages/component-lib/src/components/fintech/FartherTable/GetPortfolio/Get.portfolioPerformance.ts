export const timeSpan = {
  "1Y": "1Y",
  "3Y": "3Y",
  "5Y": "5Y",
  "10Y": "10Y"
} as const

type PortfolioPerformance = {
  "twr": number
}

//GET /portfolio/:portfolioId/performance/:timeSpan
const getPortfolioPerformanceData = (_timeSpan: keyof typeof timeSpan = "1Y"): PortfolioPerformance => ({
  "twr": 15.75
})

const transformPortfolioPerformance = (data: PortfolioPerformance) => {
  return `${data.twr < 0 ? "-" : "+"}
  ${(data.twr / 100).toLocaleString("en",
    {
      style: "percent",
      minimumFractionDigits: 2
    }
  )}`
}

export const historicalPerformance = transformPortfolioPerformance(getPortfolioPerformanceData())