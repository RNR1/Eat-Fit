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
        let foodToDelete = this.menuData.findIndex(f => f.name === food)
        console.log(foodToDelete)
        this.menuData.splice(foodToDelete,1)
        // this.totalCal -= food.cal
        
    }

    save() {
        $.post('/menu', this.menuData)
    }
}