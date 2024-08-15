type KeyOf<T> = keyof T

export function objectKeys<T extends object>(obj: T): KeyOf<T>[] {
  return Object.keys(obj) as KeyOf<T>[]
}

type RiskLevel = "Low" | "Medium" | "Aggressive" | "High";

type RiskLevelMapping = {
  [key in RiskLevel]: {
    min: number;
    max: number;
    value: RiskLevel;
  }
}

export const riskLevelMap: RiskLevelMapping = {
  Low: {
    min: 0,
    max: 20,
    value: 'Low'
  },
  Medium: {
    min: 20,
    max: 60,
    value: 'Medium'
  },
  Aggressive: {
    min: 60,
    max: 80,
    value: 'Aggressive'
  },
  High: {
    min: 80,
    max: 100,
    value: 'High'
  }
}

type CreatedAt = `${number}-${number}-${number}`

export const getRiskLevel = (riskLevel: number): RiskLevel => {
  if (riskLevel < riskLevelMap.Low.max) return riskLevelMap.Low.value;
  else if (riskLevel < riskLevelMap.Medium.max) return riskLevelMap.Medium.value;
  else if (riskLevel < riskLevelMap.High.max) return riskLevelMap.Aggressive.value;
  return riskLevelMap.High.value;
}

export const parseToDate = (createdAt: CreatedAt) => {
  return new Date(createdAt).toLocaleString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  });
}

type PortfolioType =
  "Tax-advantaged" |
  "Tax-exempt" | "any"

export type PortfolioData = {
  riskLevel: number;
  type: PortfolioType;
  created: CreatedAt;
}

