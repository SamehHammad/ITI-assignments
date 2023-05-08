#include <iostream>
#include <cstring>

using namespace std;

int main() {
    char first_name[5][10], last_name[5][10], full_name[5][25];
    char max_name[25];
    int max_length = 0;

    for(int i=0; i<5; i++) {
        cout << "Enter the first name of student " << i+1 << ": ";
        cin >> first_name[i];

        cout << "Enter the last name of student " << i+1 << ": ";
        cin >> last_name[i];

        strcpy(full_name[i], first_name[i]);
        strcat(full_name[i], " ");
        strcat(full_name[i], last_name[i]);

        if(strlen(full_name[i]) > max_length) {
            max_length = strlen(full_name[i]);
            strcpy(max_name, full_name[i]);
        }

    }

    for(int i=0; i<5; i++) {
        cout << "Full name of student " << i+1 << ": " << full_name[i] << endl;
    }

    cout << "Student with the longest name: " << max_name << endl;

    return 0;
}
