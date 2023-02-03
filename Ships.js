class ShipData {
    constructor(name, manufacturer, role) {
        this._name = name
        this._manufacturer = manufacturer
        this._role = role
    }

    get name() {
        return this._name
    }

    get manufacturer() {
        return this._manufacturer
    }

    get role() {
        return this._role
    }
}

const argoMole = new ShipData("Mole", "Argo", "Light Mining")


export default ShipData;