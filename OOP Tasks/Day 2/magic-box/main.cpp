#include <iostream>
#include <windows.h>
using namespace std;
COORD coord ={0,0};
void gotoxy(int x,int y){
coord.X=x*7;
coord.Y=y*7;
SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE),coord);
}
int main(){
int size,row,col;
cin >>size;
if(size %2 == 0){
    cout<<"enter size with odd number"<<endl;;
}else{
col=(size+1)/2;
row=1;
gotoxy(col,row);
cout<<1<<endl;
    for(int i=2 ; i<=size*size ;i++){
        if((i-1) % size != 0){
            row--;
            col--;
            if(row<1)
                row = size;
            if(col<1)
                col= size ;

            }else {
            row++;
            }
            gotoxy(col,row);
                cout<<i<<endl;

    }
}
return 0;
}




