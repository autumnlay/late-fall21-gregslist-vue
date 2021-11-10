import { AppState } from "../AppState"
import { House } from "../Models/House"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class HousesService {
    
    async getAllHouses() {
        const res = await api.get('api/houses')
        logger.log(res.data)
        const houses = res.data.map(h => new House(h))
        AppState.houses = houses

    }

    async getById(id) {
    const res = await api.get('api/houses/' + id)
    logger.log(res.data)
    AppState.activeHouse = new House(res.data)
  }

  async create(house) {
    const res = await api.post('api/houses', house)
    logger.log(res.data)
    AppState.houses.push(new House(res.data))
    AppState.activeHouse = new House(res.data)
  }
}
export const housesService = new HousesService()