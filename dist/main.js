let menu = new Menu()
let user = new User("Yaniv", 2500)
const renderer = new Renderer()

$('#searchButton').on('click', async function () {
    let input = $('#searchFood').val()
    await user.getFood(input)
    renderer.renderFood(user.foodData, menu.totalCal)
})


$("#food-container").on("click", ".addToMenuButton", function () {
    let foodName = $(this).closest(".Food").find(".foodName").text()
    let meal = $("#meals").val()
    if (user.foodData.name === foodName) {
        menu.addToMenu(user.foodData)
        renderer.renderFood(user.foodData, menu.totalCal)
        
        renderer.renderMenu(menu[meal], meal)
        console.log(meal)
        //Show message to user that it`s added
    } else {
        console.log("Problem, Big One.")
    }


})


$("#food-container").on("click", ".removeFromMenuButton", function () {
    let foodName = $(this).closest(".Food").find(".foodName").text()
    if (user.foodData.name === foodName) {
        menu.removeFromMenu(user.foodData)
        renderer.renderFood(user.foodData, menu.totalCal)
        //Show message to user that it`s removed
    }
    })


// //for the second part of the project. comment it out for now.
// let user = new User("Yaniv", 2500)
// const loadPage = function () {
//     user.getDailyMenu()
// }
// loadPage()


// $('.collapse').collapse('toggle')