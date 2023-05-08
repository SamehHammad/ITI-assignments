#include <iostream>

using namespace std;

int main() {
    int num, sum = 0;
    cout << "Enter integers to add :\n";
    do {
        cin >> num;

        sum += num;
    }while (sum <= 100&& num !=0);
        cout << "Sum: " << sum << endl;

    return 0;
}






