HandlebarsIntl.registerWith(Handlebars)

let menu = new Menu()
let user = new User("5dccbceacceeda07c023960d", "Dana Sultan", 1800)
const renderer = new Renderer()
renderer.renderUserDetails()

const search = async () => {
    let input = $("#searchFood").val()
    if (input === "") {
        return
    }
    await user.getFood(input)
    if (!user.foodData) {
        return
    }
    renderer.renderFood(user.foodData)
}

const addToMenu = foodName => {
    let meal = $("#meals").val()
    if (!meal) { return notifications("mustChooseMealAlert") }
    if (user.foodData.name === foodName) {
        menu.addToMenu(user.foodData)
        renderer.renderMenu(menu[meal], meal)
        renderer.renderFood(user.foodData)
        renderer.renderNutrients(menu.nutrients)
        notifications("foodAddedAlert")
    } else {
        console.log("Problem, Big One.")
    }
    if (user.bmr < menu.nutrients.cal) {
        console.log("Notice , you have reached your daily BMR")
    }
}

const save = async () => {
    let day = $("#days").val()
    if (!day) { return notifications("mustChooseDayAlert") }
    notifications("menuSavedAlert") // move this line to the bottom of the func and check that it works.
    menu = await menu.save()
    await user.createMenu(menu._id)
}

const remove = (foodId, meal) => {
    menu.removeFromMenu(foodId, meal)
    renderer.renderMenu(menu[meal], meal)
    renderer.renderFood(user.foodData)
    renderer.renderNutrients(menu.nutrients)
    notifications("foodDeletedAlert")
}

const notifications = className => {
    $(`.${className}`).toggle()
    setTimeout(() => $(`.${className}`).toggle(), 2000)
}
// //for the second part of the project. comment it out for now.

const loadPage = async function () {
    await user.getDailyMenu()
    if ($.isEmptyObject(user.dailyMenu)) {
        $("#container").append(`<h2 class="greenColor">You have no menu for today, click on this button to create it.</h2><button id="addnewMenu" class="btn btn-outline-secondary" type="button"
onclick="renderer.renderNewMenu()">Add New Menu</button>`)
        return
    }
    renderer.renderDailyMenu(user.dailyMenu)
}

loadPage()





