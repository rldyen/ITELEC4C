const users = JSON.parse(localStorage.getItem('users')) || [
  {
    firstName: "Jhong", 
    lastName: "Hillario", 
    gender: "Male", 
    email: "jhillario@example.com",
    password: "test123",
  }
];

export default users;