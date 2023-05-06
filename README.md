# Restaurant-recommendation
# Restaurant Recommendation System

The Restaurant Recommendation System is a web application that allows restaurant owners to publish their restaurants on a marketplace, and customers to discover and place orders from those restaurants. This system is built using Python, MySQL, CSS, HTML, JavaScript, Google Maps API, and Django.

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Project Description

The Restaurant Recommendation System enables restaurant owners to create and manage their restaurant profiles, menus, and other relevant information, and to publish their restaurants on the marketplace for customers to discover. Customers can search for restaurants by food items or restaurant name, view restaurant profiles, menus, and other relevant information, and place orders.

## Features

For Restaurant Owners:

- Registration and Authentication: Restaurant owners can create accounts and authenticate themselves by providing their email addresses and creating passwords.
- Verification and Approval: Once restaurant owners register, they will receive a verification email that they must confirm in order to activate their accounts. After activation, their accounts need to be approved by an admin before they can publish their restaurants on the marketplace.
- Menu Builder: Restaurant owners can create and manage their restaurant menus using CRUD operations.
- Profile Builder: Restaurant owners can create and manage their restaurant profiles, including cover photos, profile pictures, addresses, and other relevant information.
- Marketplace Publisher: Once the restaurant profile and menu are completed, restaurant owners can publish their restaurants on the marketplace for customers to discover.

For Normal Users:

- Registration and Authentication: Normal users can create accounts and authenticate themselves by providing their email addresses and creating passwords.
- Verification: Once normal users register, they will receive a verification email that they must confirm in order to activate their accounts.
- Order Builder: Normal users can build their orders by selecting a restaurant and choosing from its menu items.
- Restaurant Search: Normal users can search for restaurants by food items or restaurant name.
- Profile Builder: Normal users can create and manage their profiles, including cover photos, profile pictures, addresses, and other relevant information.

## Technologies Used

The Restaurant Recommendation System is built using the following technologies:

- Python
- MySQL
- CSS
- HTML
- JavaScript
- Google Maps API
- Django

## Installation

To run the Restaurant Recommendation System on your local machine, you'll need to:

1. Clone this repository
2. Install the required dependencies by running `pip install -r requirements.txt`
3. Migrate the database by running `python manage.py migrate`
4. Create a superuser account by running `python manage.py createsuperuser`
5. Run the development server by running `python manage.py runserver`


## License

The Restaurant Recommendation System is released under the MIT License.
