# Real-Estate_API

This API  involve building a real estate platform that allows users to buy and sell properties online.   The API provide features such as property listings, property search, and user authentication.

## Base URL

The base URL for all API endpoints is: `http://localhost:3000/api/`

## Authentication

The API uses token-based authentication. To access protected endpoints, you need to include an authorization header in your requests.

* Header Key: `Authorization`
* Header Value: `Bearer {token}`

To obtain an authentication token, you need to register a new user or login with an existing user.

## Endpoints

### Properties

Get all properties

* Method: GET
* URL: `/properties`
* Description: Retrieves all properties.
* Requires Authentication: No
* Response:

    * Status: 200 OK
  
    * Body: Array of Property objects.

Create a new property

* Method: POST
* URL: /properties
* Description: Creates a new property.
* Requires Authentication: Yes
* Request:

    * Body: Property object (title, description, price, location)
  
* Response:
    * Status: 201 Created

    * Body: Created Property object.

Get a property by ID

* Method: GET
* URL: `/properties/{id} `
* Description: Retrieves a property by its ID.
* Requires Authentication: No
* Parameters:
    *`id` (path parameter): ID of the property.
 
* Response:
    * Status: 200 OK
    * Body: Property object. 
* Error responses:
    * Status: 404 Not Found
    * Status: 500 Internal Server Error

Update a property by ID

* Method: PUT
* URL: `/properties/{id}`
* Description: Updates a property by its ID.
* Requires Authentication: No
* Parameters:
    *id (path parameter): ID of the property.
* Request:
    * Body: Updated Property object.
*Response:
    * Status: 200 OK
    * Body: Updated Property object.

* Error responses:
   * Status: 404 Not Found
   * Status: 500 Internal Server Error

Delete a property by ID

* Method: DELETE
* URL: `/properties/{id}`
* Description: Delete a property by its ID.
* Requires Authentication: No
* Parameters:
    *id (path parameter): ID of the property.
* Request:
    * Body: Delete Property object.
*Response:
    * Status: 204 No content
   

* Error responses:
   * Status: 404 Not Found
   * Status: 500 Internal Server Error



Search properties

* Method: GET
* URL: `/properties/search`
* Description: Searches properties based on provided criteria.
* Requires Authentication: No
* Parameters:
    * `location` (query parameter): Location to search by (optional).
  
    * `price` (query parameter): Maximum price to search by (optional).

    * `description` (query parameter): Description to search by (optional).
  
    * `title` (query parameter): Title to search by (optional).
* Response:
    * Status: 200 OK
    * Body: Array of matching Property objects. 
* Error response

# User Authentication

## Register a new user

* Method: POST
* URL: `/auth/register`
* Description: Creates a new user account.
* Requires Authentication: No
* Request:
    * Body: User object (username, email, password).
* Response:
    * Status: 201 Created
    * Body: Created User object with a token. 


## Login

* Method: POST
* URL: `/auth/login`
* Description: Creates a new user account.
* Requires Authentication: No
* Request:
    * Body: User object (username,password).
* Response:
    * Status: 200 Created
    * Body: Created User object with a token. 


## Error Handling

* If an error occurs, the server will respond with an appropriate error status code and a corresponding error message in the response body.

# Development

To run the API locally for development or testing, follow these steps:

1. Install dependencies: `npm install`
2. Set up the environment variables by creating a .env file and specifying the required variables.
3 . Start the development server: `nodemon app.js`


# Documentation

Feel free to customize this README file further to match your project structure and requirements. Add any additional information, such as installation instructions, environment setup, or API usage examples.

Remember to update the README file as you make changes or add new features to your Real Estate Platform API.