# Weather Forecast App

# Table of Contents

- [Weather Forecast App](#weather-forecast-app)
- [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Dependencies](#dependencies)
    - [Installing](#installing)
    - [Executing program](#executing-program)
    - [Components:](#components)
  - [General Note](#general-note)
  - [Authors](#authors)

The application is a simple browser based and mobile friendly application in looking for the current weather details of a certain city. By using the search field, the application is connected to an API which automatically displays the following data:


-   Date 
-   Temperature
-   Description
-   Current Weather Status
-   Humidity
-   Pressure

The system is using VUEJS framework.

## Getting Started


### Dependencies

  * The following are the dependencies:
  * @auth0
  * axios
  * moment
  * tailwindcss
  * vue-router
  * vue-simple-alert

### Installing


Install the main VUEJS framework (In this project, I used the vuejs version 2 as it is the most stable so far. But you can freely choose version 3 for the latest version experience.)

npm init vue@latest
✔ Project name: … Weather-Forecast-App
✔ Add TypeScript? … No 
✔ Add JSX Support? … No
✔ Add Vue Router for Single Page Application development? … Yes
✔ Add Pinia for state management? … No 
✔ Add Vitest for Unit testing? … No 
✔ Add Cypress for both Unit and End-to-End testing? … No 
✔ Add ESLint for code quality? … Yes
✔ Add Prettier for code formating? … Yes

### Executing program

* How to run the program
  - cd Weather-Forecast-App
  - npm install
  - npm run serve

### Components:
- LoginPage.vue
  - The UI is the main entry point to the application. It is authenticated using Auth0 and usnig GITHUB as the single sign on module.
- SearchField.vue
  - This is the main page where the user can key in any city in the text field. 
  - Once a text is keyed in, the method calls the search button function to pass the city data to the SearchResult component where it is directed to the API for query.
- SearchResult.vue
  - The city being queried is passed to the getWeatherForecast function (getWeatherForecast()) and uses the URL http://api.openweathermap.org/data/2.5/weather as the main API to call on for the weather information.
  - Once the data are present, it will respond to the function call and save it as a result in array where it is displayed to the UI beatifully using the tailwindcss css.
  - TableCell.vue 
    - This a component where the resulting data are housed using the div and css resulting into a table style view
  - 
## General Note


-   The watch is used here as an effective means to observe and react to data changes on a Vue instance. In practice, the user wont be able to experience any lag or need to refresh page in order to start querying for the city in the text field.

## Authors

Renato Tan, Jr.

API call URL: http://api.openweathermap.org