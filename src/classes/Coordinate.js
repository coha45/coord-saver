import { genId } from "../utils"

class Coordinate {
    constructor(name, x, y, z, biome) {
        this.id = genId()
        this.name = name
        this.x = x
        this.y = y
        this.z = z
        this.biome = biome
    }

    getDistance(coord2) {
        const { x, y, z } = coord2
    }
}

export default Coordinate