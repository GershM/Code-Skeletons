# PHP(server) React(client) Web Site skeleton

Requerements:
* PHP V7.3.3: https://php.net/
     * Slim Framework V3.12.1: http://www.slimframework.com/docs/v3/start/web-servers.html
     * Composer V1.7.3: https://getcomposer.org/
     * Debian installation: https://linuxhostsupport.com/blog/how-to-install-php-7-2-on-debian-9/
     
* React V16.8.6: https://reactjs.org
     * Node.js V10.13.0: https://nodejs.org/en/ 
	 * npm: https://www.npmjs.com/get-npm
	 * React Bootstrap: https://react-bootstrap.github.io/
	 
* For Windows install XAMPP (Apache + PHP): https://www.apachefriends.org/index.html 	

Start the project:
* clone/download the project
* Client:
	* Change directory to the client directory
	* Install Nodejs and npm	
	* Run "npm install"
	* Run "npm run build" (or one of the following scripts can be executed: wp_gen.sh (Linux) or wp_gen.bat (Windows))
* Server(Apache):		
	* Add to the site-enable config (Debian/Ubuntu dir: "/etc/apache2/site-enabled/00-default.conf", Windows dir: ‪"C:\xampp\apache\conf\httpd.conf" ):	
    ```conf
	    <Directory "[project location]/Code-Skeletons/PHP-React/main">
		    Options Indexes FollowSymLinks Includes ExecCGI
		    AllowOverride All
		    Require all granted
	    </Directory>
	```
	* (For Debian/Ubuntu ) Execute the following code : ``a2enmod rewrite``
 	* restart apache
