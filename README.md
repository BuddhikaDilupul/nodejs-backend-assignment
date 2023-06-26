# nodejs-backend-assignment
node js express js

to start: 
1).npm install
2).npm run dev

 admin email: admin@gmail.com
 admin password: abc123

to change reciver email = change email address in mailer.js line number 31 or .env email2
features:
Admin can log into system.

Admin can register authors.

Admins cam add new categories.

Admins can add books.

Reports will be generated in every 5 minutes and sent to relevant emails defined in .env file.

User can register

User can  log into system

User can like to

jwt token based authentication
express validaition for backend validations
mongodb for db tech
logger => morgan logger

APIs
1).http://localhost:4041/publications/author - POST - register author by admin - token

2).http://localhost:4041/publications/book -    POST - register book by admin - token

3).http://localhost:4041/publications/search - POST - search by isbn number

4).http://localhost:4041/publications/category/ - POST -

5).http://localhost:4041/publications/auth/login -POST - all users

6).http://localhost:4041/publications/auth/ -POST - register by users self

7).http://localhost:4041/publications/book/id -PUT - provide like
