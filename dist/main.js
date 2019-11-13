HandlebarsIntl.registerWith(Handlebars)

let menu = new Menu()
let user = new User(1,"Yaniv", 1700)
const renderer = new Renderer()
renderer.renderUserDetails()

$("#searchButton").on("click", async function() {
	let input = $("#searchFood").val()
	if (input === "") {
		return
	}
	await user.getFood(input)
	if (!user.foodData) {
		return
	}
	renderer.renderFood(user.foodData)
})

$("#food-container").on("click", ".addToMenuButton", function() {
	let foodName = $(this)
		.closest(".Food")
		.find(".foodName")
		.text()
	let meal = $("#meals").val()
	if (user.foodData.name === foodName) {
		menu.addToMenu(user.foodData)
		renderer.renderMenu(menu[meal], meal)
		renderer.renderFood(user.foodData)
		renderer.renderNutrients(menu.nutrients)
		//Show message to user that it`s added
	} else {
		console.log("Problem, Big One.")
    }
})

$('#searchButton').on('click', async function () {
    let input = $('#searchFood').val()
    await user.getFood(input)
    renderer.renderFood(user.foodData)
})


$("#food-container").on("click", ".addToMenuButton", function () {
    let foodName = $(this).closest(".Food").find(".foodName").text()
    let meal = $("#meals").val()
    if (user.foodData.name === foodName) {
        menu.addToMenu(user.foodData)
        renderer.renderMenu(menu[meal], meal)
        renderer.renderFood(user.foodData)
        renderer.renderNutrients(menu.nutrients)
        //Show message to user that it`s added
    } else {
        console.log("Problem, Big One.")
    }
    if(user.bmr < menu.nutrients.cal) {
        console.log("Notice , you have reached your daily BMR")
    }

})

$("#food-container").on("click", ".removeFromMenuButton", function() {
	let foodName = $(this)
		.closest(".Food")
		.find(".foodName")
		.text()
	if (user.foodData.name === foodName) {
		menu.removeFromMenu(user.foodData)
		renderer.renderFood(user.foodData)
		renderer.renderNutrients(menu.nutrients)
		//Show message to user that it`s removed
	}
})

// //for the second part of the project. comment it out for now.
// let user = new User("Yaniv", 2500)
// const loadPage = function () {
//     user.getDailyMenu()
// }
// loadPage()
