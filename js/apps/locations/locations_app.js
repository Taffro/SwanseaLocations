LocationManager.module("LocationsApp", function (LocationsApp, LocationManager, Backbone, Marionette, $, _) {
    LocationsApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            "locations": "listLocations",
            "locations/:id": "showLocation"
        }
    });

    var API = {
        listLocations: function () {
            LocationsApp.List.Controller.listLocations();
        },

        showLocation: function (id) {
            LocationsApp.Show.Controller.showLocation(id);
        }
    };

    LocationManager.on("locations:list", function () {
        LocationManager.navigate("locations");
        API.listLocations();
    });

    LocationManager.on("location:show", function (id) {
        LocationManager.navigate("locations/" + id);
        API.showLocation(id);
    });

    LocationManager.on("start", function () {
        new LocationsApp.Router({
            controller: API
        });
    });
});