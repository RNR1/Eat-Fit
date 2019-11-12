let menu = new Menu()
let user = new User("Yaniv", 2500)
const renderer = new Renderer()

$('#searchButton').on('click', async function () {
    let input = $('#searchFood').val()
    await user.getFood(input)
    renderer.renderFood(user.foodData)
})


$("#food-container").on("click", ".addToMenuButton", function () {
    let foodName = $(this).closest(".Food").find(".foodName").text()
    if (user.foodData.name === foodName) {
        menu.addToMenu(user.foodData)
        //Show message to user that it`s added
    } else {
        console.log("Problem, Big One.")
    }
    

    // The this.text should reffer to the food`s name (the one we click about), we need to check it with the console.log below
    // console.log($(this).closest(".foodName").text())
})


$("#food-container").on("click", ".removeFromMenuButton", function () {
    let food = $(this).closest(".Food").find(".foodName").text()
    menu.removeFromMenu(food)
    //Show message to user that it`s removed


    // The this.text should reffer to the food`s name (the one we click about), we need to check it with the console.log below
    // console.log($(this).closest(".foodName").text())
})


// //for the second part of the project. comment it out for now.
// let user = new User("Yaniv", 2500)
// const loadPage = function () {
//     user.getDailyMenu()
// }
// loadPage()