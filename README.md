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

