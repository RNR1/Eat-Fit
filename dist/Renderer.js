class Renderer {
    renderFood(foods) {
        const source = $('#food-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template( foods );
        $(".food-container").empty().append(newHTML);
    
    }

    renderMenu(menu) {
        const source = $('#Menu-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template( {menu} );
        $(".menu-container").empty().append(newHTML);
    
    }
}