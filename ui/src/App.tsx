import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppointmentForm from './components/AppointmentForm';
import AppointmentsList from './components/AppointmentsList';
import { useQuery } from '@apollo/client';
import { GET_ALL_APPOINTMENTS } from './queries/queries';

function App() {
  const { refetch } = useQuery(GET_ALL_APPOINTMENTS);

  return (
    <div className="App">
      <div className="content">
        <h1>Appointment UI</h1>
        <div className='appointMentContainer'>
          <AppointmentsList />
          <AppointmentForm onAppointmentCreated={refetch} />
        </div>
      </div>
    </div>
  );
}

export default App;