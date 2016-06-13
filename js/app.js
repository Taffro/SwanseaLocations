var LocationManager = new Marionette.Application();

LocationManager.navigate = function (route, options) {
    options || (options = {});
    Backbone.history.navigate(route, options);
};

LocationManager.getCurrentRoute = function () {
    return Backbone.history.fragment
};

LocationManager.on("before:start", function () {
    var RegionContainer = Marionette.LayoutView.extend({
        el: "#app-container",

        regions: {
            main: "#main-region"
        }
    });

    LocationManager.regions = new RegionContainer();
});

LocationManager.on("start", function () {
    if (Backbone.history) {
        Backbone.history.start();

        if (this.getCurrentRoute() === "") {
            LocationManager.trigger("locations:list");
        }
    }
});