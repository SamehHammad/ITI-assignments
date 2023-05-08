#include <iostream>

using namespace std;

int main() {
char choice ;
  cout << "Choose from menu :" << endl;
  cout << "a => chicken : " << endl;
  cout << "b => meat : " << endl;
  cout << "c => sea food : " << endl;
  cout << "d => beverages : " << endl;
  cout << "e => no thanks : " << endl;
do{
  cout << "choose another one!!: " << endl;
    cin >> choice;
       switch (choice)
       {
        case 'a':
        case 'A':
            cout << "Price is: 200LE" << endl;
            break;
        case 'b':
        case 'B':
            cout << "Price is: 220LE" << endl;
            break;
        case 'c':
        case 'C':
            cout << "Price is: 150LE" << endl;
            break;
        case 'd':
        case 'D':
            cout << "Price is: 250LE" << endl;
            break;
        default:
 cout << "oOOps " << endl;
    }
    }while(choice !='e');
            cout << "Thanks " << endl;

    return 0;
}
