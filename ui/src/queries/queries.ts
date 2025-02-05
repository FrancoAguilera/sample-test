import { gql } from '@apollo/client';

export const GET_ALL_SALONS = gql`
  query GetAllSalons {
    salons {
      id
      name
    }
  }
`;

export const CREATE_APPOINTMENT = gql`
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
      }
    }
  }
`;

export const GET_ALL_APPOINTMENTS = gql`
  query GetAllAppointments {
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
`;