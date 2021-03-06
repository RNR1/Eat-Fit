class User {
	constructor(id, name, bmr) {
		this.id = id
		this.name = name
		this.bmr = bmr
		this.dailyMenu = {}
		this.foodData = {}
	}

	async getFood(foodName) {
		let data
		try {
			data = await $.get(`/food/${foodName}`)
			if (!data.name) {
				throw new Error("Food not found")
			}
		} catch (err) {
			return (this.foodData = undefined)
		}
		this.foodData = data
	}

	async consumeFood(foodId, meal) {
		let updated = await $.ajax({
			url: `/consume`,
			type: "PUT",
			data: { menuId: this.dailyMenu._id, foodId: foodId, meal: meal },
		})
		console.log(user.dailyMenu)
		user.dailyMenu = updated
		// this.dailyMenu = updated.menu
	}

	async getDailyMenu() {
		this.dailyMenu = await $.get(`/menu/${this.id}`)
	}

	async createMenu(menuId) {
		// if (this.dailyMenu.length === 0) {
		// 	console.log("The menu is empty")
		// 	//show message to user.
		// } else {
		await $.post(`/user/menu`, {
				userId: this.id,
				menuId: menuId
			})
		// }
	}

	async removeMenu() {
		await $.ajax({
			url: `/menu`,
			type: "DELETE",
			data: {
				userId: this.userId,
				selectedDay: this.dailyMenu.dayInWeek
			},
			success: function(result) {
				this.dailyMenu = []
				console.log("Menu Deleted")
			}
		})
	}
}
