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
    Employee employee;

        cout << "Enter data for Employee :" << endl;
        cout << "Name: ";
        getline(cin, employee.name);
        cout << "Code: ";
        cin >> employee.code;
        cout << "Net Salary: ";
        cin >> employee.netSalary;
        cout << "Adress: ";
        cout << "City: ";
        cin >> employee.emp_add.city;
        cout << "Str Number: ";
        cin >> employee.emp_add.str_num;
        cout << "Build Number: ";
        cin >> employee.emp_add.b_num;
        cin.ignore();
        cout << "Data for the employee:" << endl;
        cout << "Name: " << employee.name << endl;
        cout << "Code: " << employee.code << endl;
        cout << "Net Salary: " << employee.netSalary << endl;
        cout << "Adress :(city: " << employee.emp_add.city  <<")"<< endl;
        cout << "Adress :(Build Number: " << employee.emp_add.b_num <<")"<< endl;

    return 0;
}
