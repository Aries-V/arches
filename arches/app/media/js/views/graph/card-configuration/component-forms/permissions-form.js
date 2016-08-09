define([
    'backbone',
    'knockout',
], function(Backbone, ko) {
    var PermissionsForm = Backbone.View.extend({
        /**
        * initializes the view with optional parameters
        * @memberof PermissionsForm.prototype
        * @param {object} options
        * @param {boolean} options.permissions - a list of allowable permissions
        * @param {boolean} options.selectedItems - a reference to the selected items in the {@link PermissionsList}
        */
        initialize: function(options) {
            this.permissions = options.permissions;
            this.selectedItems = options.selectedItems;
        },

        /**
        * Closes the form and deselects the currently selected items
        * @memberof PermissionsForm.prototype
        */
        close: function(){
            this.selectedItems().forEach(function(item){
                item.selected(false);
            }, this);
        },

    });
    return PermissionsForm;
});
