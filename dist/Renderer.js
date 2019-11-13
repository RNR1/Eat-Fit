class Renderer {
    renderFood(foods, cal) {
        const source = $('#food-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template(foods);
        $("#food-container").empty().append(newHTML);
    }

    renderMenu(menu, container) {
        const source = $('#foodInMenu-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template({ menu });
        $(`.${container}`).empty().append(newHTML);
    }

    renderNutrients(nutrientsObj) {
        const source = $('#nutrients-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template(nutrientsObj);
        $("#totals").empty().append(newHTML);
    }
}