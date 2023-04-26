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