class User {
    constructor(name, bmr) {
        this.name = name
        this.bmr = bmr
        this.dailyMenu = []
        this.foodData = {}
    }

    async getFood(foodName) {
        this.foodData = await $.get(`/food/${foodName}`)
    }

    async consumeFood(foodId,meal) {
        await $.ajax({
            url: `/consume`,
            type: 'PUT',
            data: {foodId: foodId,
                    meal: meal},
            success: function(result) {
                console.log("Food Consumed")
            }
        })
    }

    async getDailyMenu() {
        this.dailyMenu = await $.get(`/menu/${this.userId}`)
    }

    async createMenu() {
        if (this.dailyMenu.length === 0) {
            console.log("The menu is empty")
            //show message to user.
        } else {
            await $.post(`/user/menu`, dailyMenu)
        }
    }

    async removeMenu(){
        this.dailyMenu = {}
        await $.ajax({
            url: `/menu`,
            type: 'DELETE',
            success: function(result) {
                console.log("Menu Deleted")
            }
        })
    }
}