import { PRODUCT_SET } from "./Constant";

export const product_set = (forProduct) => {
    return {
        type: PRODUCT_SET,
        payload:forProduct
    }
}