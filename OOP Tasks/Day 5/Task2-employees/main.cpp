#include <iostream>
#include <string>
using namespace std;

struct Employee {
    string name;
    int age;
    int salary;
};

const int MAX_EMPLOYEES = 10;
Employee employees[MAX_EMPLOYEES];
int numEmployees = 3;

void displayEmployee(int index) {
    if (index >= 0 && index < numEmployees) {
        cout << "Name: " << employees[index].name << endl;
        cout << "Age: " << employees[index].age << endl;
        cout << "Salary: " << employees[index].salary << endl;
    } else {
        cout << "Invalid index!" << endl;
    }
}

void addEmployee() {
    if (numEmployees < MAX_EMPLOYEES) {
        Employee newEmployee;
        cout << "Enter name: ";
        cin >> newEmployee.name;
        cout << "Enter age: ";
        cin >> newEmployee.age;
        cout << "Enter salary: ";
        cin >> newEmployee.salary;
        employees[numEmployees] = newEmployee;
        numEmployees++;
    } else {
        cout << "Cannot add more employees, array is full!" << endl;
    }
}

void displayAllEmployees() {
    for (int i = 0; i < numEmployees; i++) {
        cout << "Employee " << i << ":" << endl;
        cout << "Name: " << employees[i].name << endl;
        cout << "Age: " << employees[i].age << endl;
        cout << "Salary: " << employees[i].salary << endl;
    }
}

int main() {
    employees[0] = {"Sameh", 27, 5000};
    employees[1] = {"Ahmed", 37, 4000};
    employees[2] = {"Kareem", 25, 3000};

    int choice;
    do {
        cout << "Choose an option:" << endl;
        cout << "1. Display employee by index" << endl;
        cout << "2. Add new employee" << endl;
        cout << "3. Display all employees" << endl;
        cout << "4. Quit" << endl;
        cin >> choice;
        switch (choice) {
            case 1:
                int index;
                cout << "Enter index: ";
                cin >> index;
                displayEmployee(index);
                break;
            case 2:
                addEmployee();
                break;
            case 3:
                displayAllEmployees();
                break;
            case 4:
                cout << "Goodbye!" << endl;
                break;
            default:
                cout << "Invalid choice, try again." << endl;
        }
    } while (choice != 4);

    return 0;
}
