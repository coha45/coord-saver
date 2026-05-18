import { genId } from "../utils";
import Coordinate from "./Coordinate";

class World {
    constructor(name, mode, version, modded, icon) {
        this.id = genId()
        this.name = name
        this.mode = mode
        this.version = version
        this.modded = modded
        this.icon = icon
        this.coordinates = []
    }

    addCoordinate(coordinate) {
        this.coordinates.push(coordinate)
    }
}

export default World