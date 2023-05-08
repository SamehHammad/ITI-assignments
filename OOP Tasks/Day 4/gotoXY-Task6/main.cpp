#include <iostream>
#include <windows.h>

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
void gotoXY(int x, int y) {
    COORD coord = {x, y};
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coord);
}
int main() {
    int NUM_EMPLOYEES = 5;
    Employee employees[NUM_EMPLOYEES];
        cout << "Enter data for Employee "  << endl;
        gotoXY(3,2);
        cout << "Name ";
        gotoXY(18,2);
        cout << "Code ";
        gotoXY(33,2);
        cout << "Net Salary ";
        gotoXY(48,2);
        cout << "City ";
        gotoXY(63,2);
        cout << "Str Number ";
        gotoXY(78,2);
        cout << "Build Number ";

    for (int i = 0; i < NUM_EMPLOYEES; i++) {
        gotoXY(3,(i+2)+2);
        getline(cin, employees[i].name);
        gotoXY(18,(i+2)+2);
        cin >> employees[i].code;
        gotoXY(33,(i+2)+2);
        cin >> employees[i].netSalary;
        gotoXY(48,(i+2)+2);
        cin >> employees[i].emp_add.city;
        gotoXY(63,(i+2)+2);
        cin >> employees[i].emp_add.str_num;
        gotoXY(78,(i+2)+2);
        cin >> employees[i].emp_add.b_num;
        cin.ignore();
    }

    return 0;
}



//#include <iostream>
//#include <windows.h>
//
//using namespace std;
//
//// Define a struct to store employee information
//struct Employee {
//    string name;
//    int code;
//    float netSalary;
//};
//
//// Function to move the cursor to a specified position on the console
//void gotoXY(int x, int y) {
//    COORD coord = {x, y};
//    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coord);
//}
//
//int main() {
//    const int NUM_EMPLOYEES = 5;
//    Employee employees[NUM_EMPLOYEES];
//
//    // Get input for each employee using gotoXY to move the cursor automatically
//    for (int i = 0; i < NUM_EMPLOYEES; i++) {
//        gotoXY(0, i);
//        cout << "Enter name, code, and net salary for employee " << i+1 << ": ";
//
//        // Move the cursor to the appropriate position for each input
//        gotoXY(20, i);
//        cin >> employees[i].name;
//
//        gotoXY(35, i);
//        cin >> employees[i].code;
//
//        gotoXY(50, i);
//        cin >> employees[i].netSalary;
//    }
//
//    // Print out the employee information
//    cout << "\nEmployee information:\n";
//    for (int i = 0; i < NUM_EMPLOYEES; i++) {
//        cout << "Name: " << employees[i].name << "\tCode: " << employees[i].code << "\tNet Salary: " << employees[i].netSalary << endl;
//    }
//
//    return 0;
//}
