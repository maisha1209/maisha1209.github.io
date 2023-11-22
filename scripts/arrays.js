// Part 0: Set up arrays
let persons = [];
let salaries = [];

// Part 1: Functions
function addSalary() {
    const selectedPerson = document.getElementById("employeeSelect").value;
    const salaryInput = prompt(`Enter salary for ${selectedPerson}:`);

    // Validate input
    if (salaryInput !== null && salaryInput.trim() !== "" && !isNaN(parseFloat(salaryInput))) {
        persons.push(selectedPerson);
        salaries.push(parseFloat(salaryInput));
        alert(`Salary added for ${selectedPerson}`);
    } else {
        alert("Invalid input. Please enter a numeric salary.");
    }

    // Move cursor to the name field
    document.getElementById("employeeSelect").focus();
}

function displayResults() {
    const averageSalary = calculateAverage(salaries);
    const highestSalary = Math.max(...salaries);

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <h2>Results</h2>
        <p>Average Salary: ${averageSalary.toFixed(2)}</p>
        <p>Highest Salary: ${highestSalary.toFixed(2)}</p>
    `;
}

function displaySalary() {
    const table = document.getElementById("results_table");
    table.innerHTML = "<tr><th>Name</th><th>Salary</th></tr>";

    for (let i = 0; i < persons.length; i++) {
        const row = table.insertRow();
        row.insertCell(0).textContent = persons[i];
        row.insertCell(1).textContent = salaries[i].toFixed(2);
    }
}

function calculateAverage(array) {
    const sum = array.reduce((total, value) => total + value, 0);
    return sum / array.length;
}

// Move cursor to the name field on page load
document.getElementById("employeeSelect").focus();
