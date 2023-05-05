export const baseUrl = 'https://blockbackend.up.railway.app'

export interface CityInterface {
  id: number;
  name: string;
}

export interface AreaInterface {
  id: number;
  cityId: number;
  name: string;
}

export interface BaseProduct {
  id: number,
  name: string,
  description: string,
  productPhoto: string,
}

export interface ProductInterface {
  id: number;
  price: string;
  weight: string;
  areaId: number;
  amount: number;
  baseProductId: number;
  baseProduct: BaseProduct
}