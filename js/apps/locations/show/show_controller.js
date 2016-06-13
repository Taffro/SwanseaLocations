LocationManager.module("LocationsApp.Show", function (Show, LocationManager, Backbone, Marionette, $, _) {
    Show.Controller = {
        showLocation: function (id) {
            var locations = LocationManager.request("location:entities");
            var model = locations.get(id);
            var locationView;
            if (model !== undefined) {
                locationView = new Show.Location({
                    model: model
                });
            }
            else {
                locationView = new Show.MissingLocation();
            }

            LocationManager.regions.main.show(locationView);

        }
    }
});