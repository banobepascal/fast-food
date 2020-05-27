# Fast food
Fast food is a food delivery service API for a restaurant.

## Built With

* [NodeJS](https://nodejs.org/) - Runtime Environment
* [ExpressJs](https://expressjs.com/) - Web Application Framework



## Supporting Packages
#### Linter

* [ESLint](https://eslint.org/) - Linting Tool

## Installation/Getting Started
* Git clone repository
``` 
git clone <repo_url>
```

* Install all dependencies
```
npm install
```
## Running
```
npm start
```

## Testing

### Testing with [Postman](www.postman.com)
```
* Install and setup Postman 
* Navigate to localhost 3000 
```

## Features
* Users can create their own user account.
* Users can sign in.
* User can place order.
* User can view their orders placed.
* User can view a specific order.
* User can edit specific order.
* User view their past orders.
* Admin can view menu items.
* Admin can create a new menu item.
* Admin can edit a specific menu item.
* Admin can delete a specific menu off item.

## Endpoints
|  Method  |  Endpoint  |  Task  |
|  --- |  --- |  ---  |
|  `POST`  |  `/api/auth/signup`  |  `User signup`  |
|  `POST`  |  `/api/auth/login`  |  `User login`  |
|  `POST`  |  `/api/fast-food/orders`  |  `User can place order`  |
|  `GET`  |  `/api/fast-food/users/orders`  |  `User can view their orders placed` |
|  `GET`  |  `/api/fast-food/orders/:id`  |  `User can view a specific order`  |
|  `PUT`  |  `/api/fast-food/orders/:id`  |  `User can edit specific order`  |
|  `GET`  |  `/api/fast-food/orders/history`  |  `User view their past orders`  |
|  `GET`  |  `/api/fast-food/menu`  |  `Admin can view menu items`  |
|  `POST`  |  `/api/fast-food/menu`  |  `Admin can create a new menu item`  |
|  `PUT`  |  `/api/fast-food/menu/:id`  |  `Admin can edit a specific menu item`  |
|  `DELETE`  |  `/api/fast-food/menu/:id`  |  `Admin can delete a specific menu off item`  |

## Credit
created by myself Banobe Pascal

