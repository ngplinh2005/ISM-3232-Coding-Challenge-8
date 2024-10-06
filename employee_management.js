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