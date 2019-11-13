class Menu {
    constructor() {
        this.dayInWeek = ""
        this.Breakfast = []
        this.Lunch = []
        this.Snack = []
        this.Dinner = []

        this.nutrients = { cal: 0, prot: 0, fat: 0, sugars: 0 }

    }

    addToMenu(food) {
        let meal = $("#meals").val()
        this[meal].push(food)

        //If we had nutrients as object I could make it in 1 line :(
        this.nutrients.cal += food.cal
        this.nutrients.prot += food.prot
        this.nutrients.fat += food.fat
        this.nutrients.sugars += food.sugars
    }

    removeFromMenu(foodId, meal) {
        
        let food = this[meal].findIndex(f => f._id === foodId)
        this.nutrients.cal -= this[meal][food].cal
        this.nutrients.prot -= this[meal][food].prot
        this.nutrients.fat -= this[meal][food].fat
        this.nutrients.sugars -= this[meal][food].sugars
        this[meal].splice(food, 1)
    }

    save() {
        this.dayInWeek = $("#days").val()
        $.post('/menu', this)
    }
}