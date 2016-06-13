LocationManager.module("LocationsApp.List", function (List, LocationManager, Backbone, Marionette, $, _) {
    List.Location = Marionette.ItemView.extend({
        template: "#location-list-item",

        events: {
            "click a.js-show": "showClicked",
        },

        showClicked: function (e) {
            e.preventDefault();
            e.stopPropagation();
            this.trigger("location:show", this.model);
        },
    });

    List.Locations = Marionette.CompositeView.extend({
        template: "#location-list",
        childView: List.Location
    });
});