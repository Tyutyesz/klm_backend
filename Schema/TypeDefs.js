const {gql} = require("apollo-server-express");

const typeDefs = gql`

type ContactDetails {
  class: String!
  address: String!
}

type City {
  IATACode: String!
  name: String!
  country: Country!
}

type Country {
  code: String!
  name: String!
}

type Airport {
  IATACode: String!
  name: String!
  city: City!
}

type FlightSegment {
  id: Int!
  type: String!
  informational: Boolean!
  departFrom: Airport!
  arriveOn: Airport!
  marketingFlight: Flight!
}

type Flight {
  number: String!
  carrier: Airline!
  status: FlightStatus!
  numberOfStops: Int!
  sellingClass: FlightClass!
  operatingFlight: OperatingFlight!
}

type Airline {
  code: String!
  name: String!
}

type FlightStatus {
  code: String!
  name: String!
}

type FlightClass {
  code: String!
}

type OperatingFlight {
  number: String!
  carrier: Airline!
  duration: String!
  flown: Boolean!
  checkInStart: String!
  localCheckInStart: String!
  checkInEnd: String!
  localCheckInEnd: String!
  scheduledArrival: String!
  localScheduledArrival: String!
  scheduledDeparture: String!
  localScheduledDeparture: String!
  arrivalTerminal: Terminal!
  cabin: Cabin!
  equipment: Equipment!
}

type Terminal {
  name: String!
}

type Cabin {
  code: String!
  name: String!
}

type Equipment {
  code: String!
  name: String!
}

type Connection {
  id: Int!
  duration: String!
  origin: Airport!
  destination: Airport!
  segments: [FlightSegment!]!
}

type Itinerary {
  type: String!
  connections: [Connection!]!
}

type Passenger {
  id: Int!
  firstName: String!
  lastName: String!
  title: Title!
}

type Title {
  code: String!
  name: String!
}

type Booking {
  bookingCode: String!
  contactDetails: [ContactDetails!]!
  itinerary: Itinerary!
  passengers: Passenger!
}

# Queries
type Query {
    getBooking(bookingCode: String!): Booking
}

# Mutations
`;


module.exports = {
    typeDefs
}
