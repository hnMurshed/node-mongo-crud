/* 

---------------------------------
create a node server with 5 steps
---------------------------------
1. create folder with mkdir or manually
2. npm init
3. npm i express cors mongodb
4. add start-dev: nodemon index.js into package.json>scripts
5. create index.js file

--------------------------
MongoDB atlas account
--------------------------
1. sign up
2. create cluster
3. create user with username and password
4. Network access > ip address: allow all
5. database > connect > code copy and paste

--------------------------
CRUD operation
--------------------------
1. node mongoDB CRUD > fundamentals
2. create asynce run function

---------------------------------------------
integrate sending data form client to server
---------------------------------------------
1. create a form to take data from user
2. onSubmit get form data and create user object
3. use fetch for POST method, headers, body to send the user object to backend
4. on server: use app.post to recieve user data and create post Api
5. Make user you return a json from the post Api

---------------------
Load data to the client site
-----------------------------
1. create get Api on the server site
2. create a query object 
3. find(query) from the collection
4. get the result with cursor.toArray()
5. Return the result

-----------------------------------------------------------------
Load the data(the returned result) to the client site and display
-----------------------------------------------------------------
1. declare a state for users
2. fetch inside useEffect to load data
3. res.json()
4. setUsers(data)
5. map on users and display each user on client site

----------------------
delete a document
---------------------
1. create delete Api on the serer site
2. use nameCollection.deleteOne(query) to delete the document
3. res.send the result
4. on client site: fetch delete api dynamically, method 'DELETE', headers, and body
5. then as usually res, data
*/