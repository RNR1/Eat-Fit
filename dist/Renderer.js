class Renderer {
    renderFood(foods) {
        const source = $('#food-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template(foods);
        $("#food-container").empty().append(newHTML);
    }

    renderMenu(menu, container) {
        const source = $('#foodInMenu-template').html();
        const template = Handlebars.compile(source);
        try {
        menu[0].meal = container
        } catch(err) {}
        let newHTML = template({ menu });
        $(`.${container}`).empty().append(newHTML);
    }

    renderNutrients(nutrientsObj) {
        const source = $('#nutrients-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template(nutrientsObj);
        $("#totals").empty().append(newHTML);
    }

    renderUserDetails() {
        $("#userName").append(`<h2> Hi ${user.name} </h2>`)
        $("#userBMR").append(`<h3> Your BMR is ${user.bmr} </h3`)
    }

    renderDailyMenu(dailyMenu){
        const source = $('#dailyMenu-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template(dailyMenu);
        $("#container").empty().append(newHTML);
    }

    renderNewMenu(){
        const source = $('#addNewMenu-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template({});
        $("#container").empty().append(newHTML);
    }

    renderRegister(){
        const source = $('#register-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template({});
        $("#container").empty().append(newHTML);
    }
}