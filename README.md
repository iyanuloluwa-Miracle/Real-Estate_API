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
