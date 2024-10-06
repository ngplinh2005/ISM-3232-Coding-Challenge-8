// Task 1: Create an Employee Class
class Employee {
    constructor(name, salary, position, department) {
      this.name = name
      this.salary = salary
      this.position = position
      this.department = department
    }
    getDetails() {
      return `Employee Name: ${this.name}, Position: ${this.position}, Salary: $${this.salary}`
    }
  }

// Task 2: Create a Department Class
class Department {
    constructor(name) {
      this.name = name
      this.employees = []
    }
    addEmployee(employee) {
      this.employees.push(employee)
    }
    getDepartmentSalary() {
      return this.employees.reduce((total, employee) => total + employee.salary, 0)
    }
    // Task 4: Handle Bonuses for Managers
    calculateTotalSalaryWithBonus() {
    return this.employees.reduce((total, employee) => {
      let salaryWithBonus = employee.salary
      if (employee instanceof Manager) {
        salaryWithBonus += employee.bonus
      }
      return total + salaryWithBonus
    }, 0)
  }
}

// Task 3: Create a Manager Class that Inherits from Employee
class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
      super(name, salary, position, department)
      this.bonus = bonus
    }
  
    getDetails() {
      return `Employee Name: ${this.name}, Position: ${this.position}, Salary: $${this.salary}, Bonus: $${this.bonus}`
    }
  }

// Task 5: Create and Manage Departments and Employees

// Create departments
const engineering = new Department("Engineering");
const marketing = new Department("Marketing");
const sales = new Department("Sales");

// Create employees
const alex = new Employee("Alex Carter", 82000, "Software Engineer", "Engineering");
const bella = new Employee("Bella Ross", 72000, "Graphic Designer", "Marketing");
const charles = new Manager("Charles Black", 125000, "Engineering Manager", "Engineering", 22000);
const dana = new Manager("Dana White", 135000, "Marketing Manager", "Marketing", 27000);
const ethan = new Employee("Ethan Hunt", 70000, "Sales Executive", "Sales");
const fiona = new Manager("Fiona Green", 140000, "Sales Manager", "Sales", 30000);

// Add employees to departments
engineering.addEmployee(alex);
engineering.addEmployee(charles);
marketing.addEmployee(bella);
marketing.addEmployee(dana);
sales.addEmployee(ethan);
sales.addEmployee(fiona);

// Calculate total salary for each department
console.log(`Total salary for Engineering: $${engineering.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Engineering: $${engineering.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary for Sales: $${sales.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Sales: $${sales.calculateTotalSalaryWithBonus()}`);
