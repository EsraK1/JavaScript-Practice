const teacher = {
  name: "Zaynab",
  id: 1234,
  address: {
    city: "London",
    postcode: "E1 123",
  },
  students: ["Jack", "Samuel", "Zack", "Clara"],
};

const message = (teacher) => {
  console.log(
    `id:${teacher.id} , ${teacher.name} ,lives in ${teacher.address.city}, ${teacher.students.length} students in class`
  );
};

console.log(message(teacher));
