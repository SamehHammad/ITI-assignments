#include <iostream>
#include <string>

using namespace std;

int main() {
    string first_name, last_name, full_name;
    string max_name;
    int max_length = 0;

    for(int i=1; i<=5; i++) {
        cout << "Enter the first name of student " << i << ": ";
        cin >> first_name;

        cout << "Enter the last name of student " << i << ": ";
        cin >> last_name;

        full_name = first_name + " " + last_name;

        if(full_name.length() > max_length) {
            max_length = full_name.length();
            max_name = full_name;
        }
    }

  for(int i=0; i<5; i++) {
        cout << "Full name of student " << i+1 << ": " << full_name[i] << endl;
    }
    cout << "Student with the longest name: " << max_name << endl;

    return 0;
}
