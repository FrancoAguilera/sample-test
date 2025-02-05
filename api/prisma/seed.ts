import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const salon1 = await prisma.salon.create({
    data: {
      name: "Luxury Cuts",
      location: "Downtown",
      services: {
        create: [
          { name: "Haircut", price: 25.0 },
          { name: "Shave", price: 15.0 },
          { name: "Facial", price: 40.0 },
        ],
      },
    },
    include: { services: true },
  });

  const salon2 = await prisma.salon.create({
    data: {
      name: "Urban Groomers",
      location: "Uptown",
      services: {
        create: [
          { name: "Beard Trim", price: 20.0 },
          { name: "Hot Towel Shave", price: 30.0 },
          { name: "Scalp Massage", price: 35.0 },
        ],
      },
    },
    include: { services: true },
  });

  await prisma.appointment.createMany({
    data: [
      {
        salonId: salon1.id,
        customerName: "John Doe",
        serviceName: salon1.services[0].name,
        appointmentTime: new Date("2025-02-10T10:00:00Z"),
      },
      {
        salonId: salon1.id,
        customerName: "Jane Smith",
        serviceName: salon1.services[1].name,
        appointmentTime: new Date("2025-02-11T11:30:00Z"),
      },
      {
        salonId: salon2.id,
        customerName: "Mike Johnson",
        serviceName: salon2.services[2].name,
        appointmentTime: new Date("2025-02-12T15:00:00Z"),
      },
    ],
  });

  console.log("Database seeded!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
