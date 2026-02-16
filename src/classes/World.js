import { genId } from "../utils";

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
        // IDK
    }
}

export default World