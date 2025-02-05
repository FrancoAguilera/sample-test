## Code Challenge for Full Stack Engineer (Job 7792)

Build a fullstack app for managing salon appointments.
This challenge evaluates your proficiency in both frontend and backend development, focusing on GraphQL, PostgreSQL, React, and TypeScript.


### Backend

GraphQL API: Implement a GraphQL API that supports the following operations:
 - [ ] Query: Fetch all appointments with their associated salon and service details
 - [ ] Mutation: Add a new appointment
 - [ ] Mutation: Update an existing appointment's details
 - [ ] Mutation: Delete an appointment

PostgreSQL Database: Use PostgreSQL to store the appointment data.
The db should include these tables:
 - [ ] salons with fields: id, name, location.
 - [ ] services with fields: id, salon_id, name, price.
 - [ ] appointments with fields: id, salonId, customerName, serviceName, appointmentTime.

Environment:
   Use any Node.js framework (e.g., Express, Nest) to set up your GraphQL server.

### Frontend

Develop a simple **React** frontend that interacts with the GraphQL API.


Requirements:
 - [ ] Use **Apollo Client** to interact with the GraphQL API.
 - [ ]  Style the app minimally using plain CSS or a library like TailwindCSS, Material-UI or bootstrap.

Features:
 - [ ] View Appointments: Display a list of all appointments fetched from the backend.
 - [ ] Add Appointment: Provide a form to create a new appointment with these fields:
   - Customer Name
   - Salon
   - Service
   - Appointment Time

### Constraints

 - [ ] Use clean code practices and adhere to design patterns.
 - [ ] Include a README file with:
   - [ ] Setup instructions.
   - [ ] Brief explanation of your approach.

---

## Running the project
- Run, in the root of the project:
  - `./run.sh`
- Follow the instructions on the script output


## Queries from Apollo playground
### All appointments list:
```graphql
query {
  appointments {
    id
    customerName
    serviceName
    appointmentTime
    salon {
      id
      name
      location
    }
  }
}
```

### All salons list:
```graphql
query {
  salons {
    id
    name
    location
  }
}
```

### Create an appointment
```graphql
mutation CreateAppointment(
  $customerName: String!,
  $serviceName: String!,
  $appointmentTime: DateTime!,
  $salonId: String!
) {
  addAppointment(
    customerName: $customerName,
    serviceName: $serviceName,
    appointmentTime: $appointmentTime,
    salonId: $salonId
  ) {
    id
    customerName
    serviceName
    appointmentTime
    salon {
      id
      name
      location
    }
  }
}
```

variables
```json
{
  "customerName": "Jhon Doe",
  "serviceName": "Haircut",
  "appointmentTime": "2025-02-10T10:00:00Z",
  "salonId": "d656eed9-a5c2-4ebd-b5a3-ee04c7cbffb4"
}
```

### Update an appointment:
```graphql
mutation UpdateAppointment(
  $id: String!,
  $customerName: String!,
  $serviceName: String!,
  $appointmentTime: DateTime!
) {
  updateAppointment(
    id: $id,
    customerName: $customerName,
    serviceName: $serviceName,
    appointmentTime: $appointmentTime
  ) {
    id
    customerName
    serviceName
    appointmentTime
    salon {
      id
      name
      location
    }
  }
}
```

variables
```json
{
  "id": "3e559ad6-a8f7-450d-946d-6d8dd36759db",
  "customerName": "Jhon Doe",
  "serviceName": "Shave",
  "appointmentTime": "2025-02-15T14:00:00Z"
}
```

### Delete an appointment
```graphql
mutation DeleteAppointment($id: String!) {
  deleteAppointment(id: $id) {
    id
    customerName
    serviceName
    appointmentTime
    salon {
      id
      name
      location
    }
  }
}
```

variables
```json
{
  "id": "fb0bab8a-c35a-4ed5-bd64-7537e4fc07d5"
}
```
