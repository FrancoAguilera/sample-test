import { useQuery } from '@apollo/client';
import { GET_ALL_APPOINTMENTS } from '../queries/queries';

interface AppointmentResponse {
  appointments: {
    id: string;
    customerName: string;
    serviceName: string;
    appointmentTime: string;
    salon: {
      id: string;
      name: string;
      location: string;
    };
  }[];
}

const AppointmentsList = () => {
  const { data } = useQuery<AppointmentResponse>(GET_ALL_APPOINTMENTS);

  return (
    <div>
      <h2>Appointments</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Service</th>
            <th>Time</th>
            <th>Salon</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {data?.appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.customerName}</td>
              <td>{appointment.serviceName}</td>
              <td>{new Date(appointment.appointmentTime).toLocaleString()}</td>
              <td>{appointment.salon.name}</td>
              <td>{appointment.salon.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsList;