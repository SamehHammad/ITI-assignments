#include <iostream>
#include <algorithm>

using namespace std;

//refill array
void refillArray(int arr[], int size) {
    cout << "Enter " << size << " new numbers:\n";
    for (int i = 0; i < size; i++) {
        cin >> arr[i];
    }
}
//Print Array Sorted

void printArraySorted(int arr[], int size) {
    sort(arr, arr + size);
    cout << "Array in sorted order:\n";
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}
//repllace Number by index
void replaceNumber(int arr[], int size ,int index) {
    if (index < 0 || index >=   size) {
        cout << "Invalid index.\n";
        return;
    }

    int number;
    cout << "Enter the number you want to replace it with: ";
    cin >> number;

    arr[index] = number;

    cout << "Number replaced.\n";
}

double getAverage(int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arr[i];
    }
    return (double)sum / size;
}

void reverseArray(int arr[], int size) {
    for (int i = 0; i < size / 2; i++) {
        int temp = arr[i];
        arr[i] = arr[size - i - 1];
        arr[size - i - 1] = temp;
    }

    cout << "Array reversed:\n";
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int getMin(int arr[], int size) {
    int min = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

int getMax(int arr[], int size) {
    int max = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

int main()
{
    int arr[5];
    int size = 5;
    int choice;

    cout << "Enter 5 numbers:\n";
    for (int i = 0; i < size; i++) {
        cin >> arr[i];
    }

    do {
        cout << "\nChoose an option:\n"
             << "1. Refill array\n"
             << "2. Print array sorted\n"
             << "3. Replace a number by index\n"
             << "4. Get average of array numbers\n"
             << "5. Reverse array\n"
             << "6. Min number\n"
             << "7. Max number\n"
             << "0. Exit\n";

        cin >> choice;

        switch (choice) {
            case 1:
                refillArray(arr, size);
                break;
            case 2:
                printArraySorted(arr, size);
                break;
            case 3:
              int index;
                cout << "Enter the index of the number you want to replace (0-4): ";
                cin >> index;
                replaceNumber(arr, size,index);
                break;
                break;
            case 4:
                cout << "Average: " << getAverage(arr, size) << endl;
                break;
            case 5:
                reverseArray(arr, size);
                break;
            case 6:
                cout << "Min number: " << getMin(arr, size) << endl;
                break;
            case 7:
                cout << "Max number: " << getMax(arr, size) << endl;
                break;
            case 0:
                cout << "Exiting...\n";
                break;
            default:
                cout << "Invalid choice!\n";
                break;
        }
    } while (choice != 0);

    return 0;
}
