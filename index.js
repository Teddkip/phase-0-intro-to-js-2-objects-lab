// Initialize the employee object
const employee = {
    name: "Peter korir",
    streetAddress: "123"
};

// Function to update employee without mutating the original object
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

// Function to update employee by mutating the original object
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Function to delete a key from employee without mutating the original object
function deleteFromEmployeeByKey(employee, key) {
    const { [key]: _, ...newEmployee } = employee;
    return newEmployee;
}

// Function to delete a key from employee by mutating the original object
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
