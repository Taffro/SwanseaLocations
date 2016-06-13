LocationManager.module("LocationsApp.Show", function (Show, LocationManager, Backbone, Marionette, $, _) {
    Show.Location = Marionette.ItemView.extend({
        template: "#location-view",

        events: {
            "click a.js-list-locations": "listLocationsClicked"
        },

        listLocationsClicked: function (e) {
            e.preventDefault();
            LocationManager.trigger("locations:list");
        }
    });

    Show.MissingLocation = Marionette.ItemView.extend({
        template: "#missing-location-view"
    });

});