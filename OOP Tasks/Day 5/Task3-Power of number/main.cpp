#include <iostream>
#include <cmath>

using namespace std;

double power(double number, int powerNum) {
    return pow(number, powerNum);
}

int main() {
    double number;
    int powerNum;

    cout << "Enter the number ";
    cin >> number;

    cout << "Enter Power: ";
    cin >> powerNum;

    cout << number << " raised to the power of " << powerNum << " is " << power(number, powerNum) << endl;

    return 0;
}
