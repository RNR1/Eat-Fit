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

    removeFromMenu(food, meal) {

        this.nutrients.cal -= food.cal
        this.nutrients.prot -= food.prot
        this.nutrients.fat -= food.fat
        this.nutrients.sugars -= food.sugars
    }

    save() {
        this.dayInWeek = $("#days").val()
        $.post('/menu', this)
    }
}