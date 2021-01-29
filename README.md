# ng_recruitment


# Instalation and Start :
1) go to ./app then npm install
2) go to ./movies-service then:
  a)npm install
  b)rename example.env to .env

3)in root folder:
                a)JWT_SECRET=secret docker-compose-build
                b)JWT_SECRET=secret docker-compose up
 
# Routes

a) Method GET route: localhost:3257/movies
              action: show all movies in db
b) Method POST route: localhost:3257/movies
auth service defines two user accounts that you should use :

b.a)Premium User
  username: 'premium-jim'
  password: 'GBLtTyq3E_UNjFnpo9m6'
  
b.b)Basic User
  username: 'basic-thomas'
  password: 'sR-_pcoow-27-6PAwCD8'
  
c) to Authorize user you can use
    localhost:3000/auth

# Technologies:
- Express
- Mysql
- dotenv
- BCrypt
- jsonwebtoken
- datejs
- axios
