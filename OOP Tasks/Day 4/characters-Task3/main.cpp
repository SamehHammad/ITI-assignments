#include <iostream>
#include <cstring>
#include <conio.h>
#define RANGE 8
using namespace std;

int main() {
    char str[RANGE+1] ;
    int count = 0;
    cout << "Enter 10 characters, Press Enter to stop\n";
    do
    {
        str[count] = getche();

        if (str[count]  == '\r') {
            str[count]  == '\0';
            cout<<endl;
            break;
        }
        count++;
    }while(strlen(str)<RANGE);
    if(strlen(str)==RANGE){
        cout<<endl<<"You have reached the maximum character limit"<<endl;
    };
    cout<<"The characters entered are : "<<str;

    return 0;
}
