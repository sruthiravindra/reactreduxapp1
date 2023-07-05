import {PROMOTIONS} from '../../app/shared/PROMOTIONS';

export const selectFeaturdPromotions = () => {
    return PROMOTIONS.find((promotion)=>promotion.featured)
}