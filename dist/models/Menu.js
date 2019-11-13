class Menu {
    constructor() {
        this.dayInWeek = ""
        this.Breakfast = []
        this.Lunch = []
        this.Snack = []
        this.Dinner= []
        
        this.totalCal = 0

    }

    addToMenu(food) {
        let meal = $("#meals").val()
        this[meal].push(food)
        let day = $("#days").val()
        this.dayInWeek = day
        this.totalCal += food.cal
        
    }

    removeFromMenu(food, meal) {
        let requiredFood = this[meal].findIndex(f => f.name === food)
        console.log(requiredFood)
        // let requiredMeal = this.menuData.findIndex(f => f.name === food)
        // this.totalCal -= this.menuData[requiredFoodIndex].cal
        // this.menuData.splice(requiredFoodIndex, 1)

    }

    save() {
        $.post('/menu', this)
    }
}