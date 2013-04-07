(function () {
	window.RecordsView = Backbone.View.extend({
		socket : null,
	  
	    //Initialize the socket connection
	    initialize : function(socketURL) {
	    	alert('hello');
			this.socket = io.connect(socketURL);
			this.socket.on('new', this.update);
	    },

	    //Updates the Dashboard.
	    update : function(data) {
			$('#box-1').html(data.msg.toUpperCase());
			for(var i in data.results){
		      	var record = new Record(data.results[i]);
		      	console.log(data.results[i]);
		      	var recordView = new RecordView({model: record});
		      	recordView.render();
			}
	    }
	});

	window.RecordView = Backbone.View.extend({
		render: function() {
			var row = _.template( $("#list_template").html(), this.model.toJSON());
			$("#box-1").append(row);
		}
	});
});
