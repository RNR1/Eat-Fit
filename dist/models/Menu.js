class Menu {
    constructor() {
        this.menuData = []

        
    }

    addToMenu(food) {
        this.menuData.push(food)
    }

    removeFromMenu(food) {
        let foodToDelete = this.menuData.findIndex(f => f.name === food)
        this.menuData.splice(foodToDelete,1)
        
    }

    save() {
        $.post('/menu', this.menuData)
    }
}