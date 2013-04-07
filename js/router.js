$(function() {
	var App = Backbone.Router.extend({
		routes: {
		    "": "index"
		},
		index: function() {
			var recordsView = new window.RecordsView;
		}
	});
	var app = new App();
	Backbone.history.start();
});