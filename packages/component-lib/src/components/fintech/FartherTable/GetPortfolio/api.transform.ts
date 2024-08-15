import type { APIResponse, Category } from "./api.design";
import { PortfolioBreakdown } from "./Get.PortfolioBreakdownId";
import { getRiskLevel, objectKeys, } from "./utils";

function transform(data: PortfolioBreakdown): APIResponse {
  /* code goes here */
  // const { riskLevel, type, created, ...rest } = data;


  const categories = objectKeys(data).reduce((acc, sub) => {
    const subcategory = data[sub];
    const categoryString = subcategory?.category

    if (!categoryString) return acc

    const categorySecurities = subcategory.securities;

    const securities = {

    }

    //  equity
    const existingEquity = acc.categories[categoryString]

    // an object with recorde: category string name and the category itself
    // category

    const newAcc = {
      categories: {}
    }

    // const newCat: APIResponse["categories"] = {
    //   [categoryString]: {
    //     subcategories: {
    //       [sub]: {
    //         securities: subcategory.securities,
    //       },
    //       ...existingEquity.subcategories
    //     }
    //   }
    // }

    // const newacc = {
    //   categories: {
    //     ...newCat,
    //     ...acc.categories
    //   }
    // }

    return acc

  }, {} as APIResponse)

  return categories;
}