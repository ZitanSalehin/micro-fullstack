## backend
--------------
# create your backend folder named ‘backend’.
# Initialize npm with ‘npm init -y’ to direct initialize.
# Install some packages ‘npm i express mongoose nodemon cors’ .
# Import and declare these to get access express , mongoose , and CORS which is required when your client application and server are runing in different port.
# now simply check if it is working correctly. first give assigned port number as first parameter, then as second a callback to get log value
# Add mongo connection string with a log value to check if you are connected or not. I am not showing in details how to setup make make your own string because it goes to another issue from main topic
# Add schema. mongoose schema is used to define the structure of the document. There is only a filed to create a user field which required.
# Now setup for a http post route. new user constructor, constructs a new user object. The save() method is called on the ‘newItem’ object, which is an instance of the User model. This method saves the new user object to the MongoDB database. 
# Await is used before save() because it is an asynchronous operation. Using await here ensures that the code waits for the save operation to complete before proceeding to the next line.
# 201 created will be the status, if got an error then show error with a 500 internal server error showing.


## Frontend:
# Create frontend folder and install react using Vite for faster setup. after complete Vite steps apply ‘npm i’ for installation.
# Then install axios for easier accessing data.
# When the user provides an input value, it triggers an onChanged event, updating the value in the variable named “inputValue”.
# Then clicking the submit button, the handleSubmit function is invoked. This function is asynchronous.
# first it will go to the try block and store response object asynchronously. await is used here to wait for the asynchronous operation.
# After making a POST request with Axios, the function returns a promise that resolves to a response object.
# When complete the Axios POST request, the execution proceeds to the next line.
# Now, there is a condition. if the HTTP response status is not 201 (indicating a failure), an error is thrown, preventing further execution. 
# if the status is 201 (indicating success), the execution moves to the next line to save the data. If an error is thrown, the catch block handles it by displaying the error message.
