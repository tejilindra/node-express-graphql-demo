import {buildSchema} from 'graphql';

const schema = buildSchema(`
    type Flight {
        id: ID
        origin: String
        destination: String
        airlines: String
        number: String
        travellers: [Traveller]
    }

    type Traveller{
        firstName: String
        lastName: String
        dateOfJourney: String
        category: Category
        passengerType: PassengerType
        price: Int
    }

    enum Category{
        BUSINESS
        ECONOMY
        PREMIUM_ECONOMY
    }

    enum PassengerType{
        INF
        CHD
        ADT       
    }

    type Query{
        getFlight(id: ID): Flight
    }

    input FlightInput{
        id: ID
        origin: String
        destination: String
        airlines: String
        number: String
        travellers: [TravellerInput]!
    }

    input TravellerInput{
        firstName: String
        lastName: String
        dateOfJourney: String
        category: Category
        passengerType: PassengerType
        price: Int
    }

    type Mutation {
        createFlight(input: FlightInput): Flight
    }
`)

export default schema;