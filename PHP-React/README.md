# PHP(server) React(client) Web Site skeleton

Requerements:
* PHP V7.3.3: https://php.net/
     * Slim Framework V3.12.1: http://www.slimframework.com/docs/v3/start/web-servers.html
     * Composer V1.7.3: https://getcomposer.org/

* React V16.8.6: https://reactjs.org
     * Node.js V10.13.0: https://nodejs.org/en/ 
	 * npm: https://www.npmjs.com/get-npm
	 * React Bootstrap: https://react-bootstrap.github.io/


Start the project:
* clone/download the project
* Client:
	* Change directory to the client directory
	* Install Nodejs and npm	
	* Run "npm install"
	* Run "nup run build"
* Server(Apache):	
	* Add to the site-enable config:	
    ```conf
	    <Directory "main folder location">
		    Options Indexes FollowSymLinks Includes ExecCGI
		    AllowOverride All
		    Require all granted
	    </Directory>
	```
	* execute the following code : ``a2enmod rewrite``
 	* restart apache
