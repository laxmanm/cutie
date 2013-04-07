Cutie - Real-time Dashboard PoC
--------------------------------
Cutie is a very simple PoC for Real-time dashboard. As a word of caution, it is just a skeleton of how this thing will work, and will not readily cater to your real time dashboard needs. It just lays a foundation for you to build upon. No charts have been implemented in this version. Please be informed that this is just a couple of hours of effort to learn node.js and socket.io.  

Technologies used  
-----------------
Node.js  (Express framework)  
Socket.io  

How to use
----------

	git init  
	git clone git@github.com:james-singh/cutie.git  
	cd cutie  

	Execute the database script to create the `sales` table with name and sales amount fields. This sql has few insert queries included. Remember to update the database name, mysql user and password in app.js file.

	node app.js  

	The application then runs in port 8000. To start using it, open the following link in your browser:  
	http://localhost:8000

	Initially this will display total sales made. As the amount of sales vary (you can use some update queries), the same will display updated in the browser as well without having to refresh it.

Contribute
----------
You are very much encouraged to use this code for any of your needs and possibly send a pull request to add your changes.
