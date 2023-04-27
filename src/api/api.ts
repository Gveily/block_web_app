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

export interface ProductInterface {
  id: number;
  name: string;
  price: string;
  weight: string;
  areaId: number;
}