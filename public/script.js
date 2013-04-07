(function () {
  window.Dashboard = {
    socket : null,
  
    //Initialize the socket connection
    initialize : function(socketURL) {
      this.socket = io.connect(socketURL);
      this.socket.on('new', this.update);
    },

    //Updates the Dashboard.
    update : function(data) {
      $('#widget').html(data.msg);
    }
  };
}());