#include <iostream>

using namespace std;

int main()
{
    float eval;
    cout << "Enter your eval !" << endl;
    cin >> eval;
   if (eval >= 85 && eval <= 100) {
    cout << "Grade: " << "A" << endl;
    } else if (eval >= 75 && eval < 85) {
    cout << "Grade: " << "B" << endl;
    } else if (eval >= 65&& eval < 75) {
    cout << "Grade: " << "C" << endl;
    } else if (eval >= 60 && eval < 65) {
    cout << "Grade: " << "D" << endl;
    } else if(eval < 60){
    cout << "Grade: " << "F" << endl;
    }else{
        cout << "Enter a valid eval " << endl;
    }
    return 0;

}
