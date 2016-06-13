LocationManager.module("LocationsApp.List", function (List, LocationManager, Backbone, Marionette, $, _) {
    List.Controller = {
        listLocations: function () {
            var locations = LocationManager.request("location:entities");

            var locationsListView = new List.Locations({
                collection: locations
            });

            locationsListView.on("childview:location:show", function (childView, model) {
                LocationManager.trigger("location:show", model.get("id"));
            });

            LocationManager.regions.main.show(locationsListView);

        }
    }
});