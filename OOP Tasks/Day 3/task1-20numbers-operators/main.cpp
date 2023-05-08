#include <iostream>
#include <algorithm>
using namespace std;

int main() {
  int numbers[20];
  char operation;
  int result;
  for (int i = 0; i < 20; i++) {
    cout << "Enter number " << i+1 << ": ";
    cin >> numbers[i];
  }
  cout << "Enter (a) to summition, (m) to multiplication, (s) to sort: ";
  cin >> operation;

  if (operation == 'a') {
    result = 0;
    for (int i = 0; i < 20; i++) {
      result += numbers[i];
    }
    cout << "The sum of the 20 numbers is: " << result << endl;
  }
  else if (operation == 'm') {
    result = 1;
    for (int i = 0; i < 20; i++) {
      result *= numbers[i];
    }
    cout << "The multiplication of the 20 numbers is: " << result << endl;
  }
  else if (operation == 's') {
        sort(numbers, numbers+20);
    for (int i = 0; i < 20; i++) {
      cout << numbers[i] << " ";
    }
    cout << endl;
  }
  else {
    cout << "Invalid operation entered." << endl;
  }
  return 0;
}
