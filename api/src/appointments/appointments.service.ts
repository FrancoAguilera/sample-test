import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AppointmentDTO } from './dto/appointment.dto';

const prisma = new PrismaClient();

@Injectable()
export class AppointmentService {
  async findAll(): Promise<AppointmentDTO[]> {
    return await prisma.appointment.findMany({
      include: {
        salon: true,
      },
    });
  }

  async create(data: {
    customerName: string;
    serviceName: string;
    appointmentTime: Date;
    salonId: string;
  }): Promise<AppointmentDTO> {
    const appointment = await prisma.appointment.create({
      data: {
        customerName: data.customerName,
        serviceName: data.serviceName,
        appointmentTime: data.appointmentTime,
        salon: {
          connect: { id: data.salonId },
        },
      },
      include: {
        salon: true,
      },
    });

    return {
      id: appointment.id,
      customerName: appointment.customerName,
      serviceName: appointment.serviceName,
      appointmentTime: appointment.appointmentTime,
      salon: {
        id: appointment.salon.id,
        name: appointment.salon.name,
        location: appointment.salon.location,
      },
    };
  }

  async update(id: string, data: {
    customerName?: string;
    serviceName?: string;
    appointmentTime?: Date;
    salonId?: string;
  }): Promise<AppointmentDTO> {
    const appointment = await prisma.appointment.update({
      where: { id },
      data: {
        customerName: data.customerName,
        serviceName: data.serviceName,
        appointmentTime: data.appointmentTime,
        salon: data.salonId ? {
          connect: { id: data.salonId },
        } : undefined,
      },
      include: {
        salon: true,
      },
    });

    return {
      id: appointment.id,
      customerName: appointment.customerName,
      serviceName: appointment.serviceName,
      appointmentTime: appointment.appointmentTime,
      salon: {
        id: appointment.salon.id,
        name: appointment.salon.name,
        location: appointment.salon.location,
      },
    };
  }

  async delete(id: string): Promise<AppointmentDTO> {
    const deletedAppointment = await prisma.appointment.delete({
      where: { id },
      include: {
        salon: true,
      },
    });

    return {
      id: deletedAppointment.id,
      customerName: deletedAppointment.customerName,
      serviceName: deletedAppointment.serviceName,
      appointmentTime: deletedAppointment.appointmentTime,
      salon: {
        id: deletedAppointment.salon.id,
        name: deletedAppointment.salon.name,
        location: deletedAppointment.salon.location,
      },
    };
  }
}