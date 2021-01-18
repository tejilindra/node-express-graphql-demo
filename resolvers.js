import {nanoid} from 'nanoid';

class Flight{
    constructor(id, {
        origin, destination, airlines, number, travellers
    }){
        this.id = id
        this.origin = origin
        this.destination = destination
        this.airlines = airlines
        this.number = number
        this.travellers = travellers
    }
   
}

const flightholder = {}

const resolvers = {
    getFlight : ({ id }) => {
        return new Flight(id, flightholder[id])
    },
    createFlight: ({ input }) => {
        let id = nanoid()
        flightholder[id] = input
        return new Flight(id, input)
    }
}

export default resolvers;