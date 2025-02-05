import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_SALONS, CREATE_APPOINTMENT } from '../queries/queries';


function AppointmentForm({ onAppointmentCreated }: { onAppointmentCreated: () => void }) {
  const { data } = useQuery(GET_ALL_SALONS);
  const [createAppointment] = useMutation(CREATE_APPOINTMENT);

  const [formData, setFormData] = useState({
    customerName: '',
    serviceName: '',
    appointmentTime: '',
    salonId: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createAppointment({
        variables: { ...formData },
      });

      setFormData({
        customerName: '',
        serviceName: '',
        appointmentTime: '',
        salonId: '',
      });

      onAppointmentCreated();
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-group">
      <div className="mb-3">
        <label htmlFor="customerName" className="form-label">Customer Name</label>
        <input
          type="text"
          id="customerName"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="serviceName" className="form-label">Service</label>
        <input
          type="text"
          id="serviceName"
          name="serviceName"
          value={formData.serviceName}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="appointmentTime" className="form-label">Appointment Time</label>
        <input
          type="datetime-local"
          id="appointmentTime"
          name="appointmentTime"
          value={formData.appointmentTime}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      {/* Dropdown para seleccionar el salón */}
      <div className="mb-3">
        <label htmlFor="salonId" className="form-label">Salon</label>
        <select
          id="salonId"
          name="salonId"
          value={formData.salonId}
          onChange={handleChange}
          className="form-control"
          required
        >
          <option value="">Select a Salon</option>
          {data?.salons.map((salon: { id: string; name: string }) => (
            <option key={salon.id} value={salon.id}>
              {salon.name}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn btn-primary">Create Appointment</button>
    </form>
  );
}

export default AppointmentForm;
