/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
            this.selectedList = "list1";
        }
    },

    selectedList: {
        value: null
    },

    captureButtonAction: {
        value: function(event) {
            if(this.selectedList === "list1")
                this.selectedList = "list2";
            else
                this.selectedList = "list1";
        }
    }
});
