## Introduction
This project is a demo on **node-express-graphql** with a Flight data mutated using graphql.

**Steps to install and run the application:**

* Clone the application
* Run the command: npm install
* Run the command: npm start
* Graphql should be up and running on port: 8082. Run http://localhost:8082 on the browser to confirm
* Run http://localhost:8082/graphql to navigate to Graphql user interface
* Normally, data should be driven from backend server. In this demo, we are using Graphql - mutation feature to store dummy data as shown below in the graphql user interface:

    **Request:**
    ```
    mutation{
    createFlight(input: {
        origin: "DUB"
        destination: "CDG"
        airlines: "Aerlingus"
        number: "#5454"
        travellers: [
        {
            firstName: "Adams"
            lastName: "Bryan"
            dateOfJourney: "2021-02-25"
            category: BUSINESS
            passengerType: ADT
            price: 600
        },
        {
            firstName: "Robert"
            lastName: "Jackson"
            dateOfJourney: "2021-02-25"
            category: ECONOMY
            passengerType: ADT
            price: 1000
        },
        {
            firstName: "David"
            lastName: "Williams"
            dateOfJourney: "2021-02-25"
            category: BUSINESS
            passengerType: INF
            price: 300
        }
        
        ]
    }){
        id, 
        airlines
    }
    }
    ```
    **Response:**
    ```
    {
        "data": {
            "createFlight": {
            "id": "Kebb6-yJLLgEmr1op4gls",
            "airlines": "Aerlingus"
            }
        }
    }
    ```

* Capture the id generated in the mutation response and send the needed requests to graphql server:

    **a. Fetch by Traveller Category:**
    **Request:**
    ```
    query{
        getFlight(id: "Kebb6-yJLLgEmr1op4gls"){
            id
            travellers{
            category
            }
        }
    }
    ```
    **Response:**
    ```
    {
    "data": {
        "getFlight": {
        "id": "Kebb6-yJLLgEmr1op4gls",
        "travellers": [
            {
            "category": "BUSINESS"
            },
            {
            "category": "ECONOMY"
            },
            {
            "category": "BUSINESS"
            }
        ]
        }
    }
    }
    ```
    **b.Fetch by Passenger Type:**
    **Request:**
    ```
    query{
        getFlight(id: "Kebb6-yJLLgEmr1op4gls"){
            id
            travellers{
            passengerType
            }
        }
    }

    ``` 
    **Response:**
    ```
    {
        "data": {
            "getFlight": {
            "id": "Kebb6-yJLLgEmr1op4gls",
            "travellers": [
                {
                "passengerType": "ADT"
                },
                {
                "passengerType": "ADT"
                },
                {
                "passengerType": "INF"
                }
            ]
            }
        }
    }
    ``` 
