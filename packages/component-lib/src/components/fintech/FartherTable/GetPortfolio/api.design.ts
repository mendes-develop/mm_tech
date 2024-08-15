// Get portfolio by id
export interface APIResponse {
  categories: Record<string, Category>,
}

export type Category = {
  subcategories: Record<string, Subcategory>,
}

type Subcategory = {
  securities: Record<string, Security>,
}

type Security = {
  asset: Asset,
  allocation: number,
}

type Asset = {
  name: string
}

export const getApiResponse = (portfolio: APIResponse) => {
  // portfolio.categories[0].subcategories[0].securities[0].asset.name
}


const data = {
  // cash: [],
  // equity: [],
  fixedIncome: [{
    corporateDebt:
      [{ ABC: 50 }, { CDE: 50 }]
  }]
}
// when we corporate  
// -  ABC 
// -  CDE


const id = "fixedIncome"