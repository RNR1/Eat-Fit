class Renderer {
    renderFood(foods, cal) {
        const source = $('#food-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template(foods);
        $("#food-container").empty().append(newHTML);
        if (cal || cal === 0)
            $("#totalCalMessage").empty().append(`The Total Calories you have in your menu is: ${cal}`);

    }

    renderMenu(menu) {
        const source = $('#foodInMenu-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template( menu );
        $("#breakfast").empty().append(newHTML);

    }
}