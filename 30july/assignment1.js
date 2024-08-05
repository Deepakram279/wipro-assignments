const user = {
    name: "Deepak Ram",
    email: "deepak.ram@gmail.com",
    age: 23
};

function updateName(newName) {
    user.name = newName;    
}

function updateEmail(newEmail) {
    user.email = newEmail;
}

function getBirthYear() {
    const currentYear = new Date().getFullYear();
    return currentYear - user.age;
}

console.log("First user: ", user);
updateName("Ram kumar");
updateEmail("ram.kumar@gmail.com");
console.log("Updated user: ", user);
console.log("Birth Year: ", getBirthYear());
