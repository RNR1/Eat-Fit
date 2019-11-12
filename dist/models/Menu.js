class Menu {
    constructor() {
        this.menuData = []
        this.totalCal = 0

    }

    addToMenu(food) {
        this.menuData.push(food)
        this.totalCal += food.cal
    }

    removeFromMenu(food) {
        let requiredFoodIndex = this.menuData.findIndex(f => f.name === food)
        this.totalCal -= this.menuData[requiredFoodIndex].cal
        this.menuData.splice(requiredFoodIndex, 1)

    }

    save() {
        $.post('/menu', this.menuData)
    }
}