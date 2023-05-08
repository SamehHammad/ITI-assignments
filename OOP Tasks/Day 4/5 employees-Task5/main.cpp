#include <iostream>
using namespace std;

struct Adress {
    string city;
    int str_num,b_num;

};
struct Employee {
    string name;
    int code;
    float netSalary;
    Adress emp_add;

};

int main() {
    int NUM_EMPLOYEES = 5;
    Employee employees[NUM_EMPLOYEES];

    for (int i = 0; i < NUM_EMPLOYEES; i++) {
        cout << "Enter data for Employee " << i+1 << ":" << endl;
        cout << "Name: ";
        getline(cin, employees[i].name);
        cout << "Code: ";
        cin >> employees[i].code;
        cout << "Net Salary: ";
        cin >> employees[i].netSalary;
        cout << "Adress: ";
        cout << "City: ";
        cin >> employees[i].emp_add.city;
        cout << "Str Number: ";
        cin >> employees[i].emp_add.str_num;
        cout << "Build Number: ";
        cin >> employees[i].emp_add.b_num;
        cin.ignore();
    }
    cout << endl << "Data for all Employees:" << endl;
    for (int i = 0; i < NUM_EMPLOYEES; i++) {
        cout << "Employee " << i+1 << ":" << endl;
        cout << "Name: " << employees[i].name << endl;
        cout << "Code: " << employees[i].code << endl;
        cout << "Net Salary: " << employees[i].netSalary << endl;
        cout << "Adress :(city: " << employees[i].emp_add.city  <<")"<< endl;
        cout << "Adress :(Build Number: " << employees[i].emp_add.b_num <<")"<< endl;
    }

    return 0;
}
