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
1).http://localhost:4041/publications/author - POST - register author by admin - token need
{
    "email" :"usee@gmail.com",
    "firstName":"abc",
    "lastName":"abc",
    "contact": "0112342343"
}

2).http://localhost:4041/publications/book -    POST - register book by admin - token need
{
    "category": "649908813aac5baefd8dade4",
    "ISBN": "as2",
    "title": "abcss",
    "author": "6499055f8a4ed56f929b8335"
}
3).http://localhost:4041/publications/search - POST - search by isbn number
{"searchData": "ab"}

4).http://localhost:4041/publications/category/ - POST -  -add category by admin - token need
{
    "categoryName":"category 4"
}

5).http://localhost:4041/publications/auth/login -POST - all users
    {
    "email" :"user@gmail.com",
    "password": "abc123"
    }

6).http://localhost:4041/publications/auth/ -POST - register by users self
{
    "email" :"user@gmail.com",
    "password": "abc123"
    "firstName":"abc",
    "lastName":"abc"
}
7).http://localhost:4041/publications/book/id -PUT - provide like  - token need

http://localhost:4041/publications/book/64984d083874fea83c738855
{"userId":"6499055f8a4ed56f929b8335"}
