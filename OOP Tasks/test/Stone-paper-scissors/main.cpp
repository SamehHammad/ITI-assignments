#include <iostream>
#include <ctime>
#include <windows.h>

using namespace std;
void gotoXY(int x, int y) {
    COORD coord = {x, y};
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coord);
}


int main() {
string hand[4]={"choose","stone", "paper", "scissors"};
int userChoice,computerChoice,gameRounds,winCounter=0,comCounter=0;
int seed=time(0);
srand(seed);
cout<<"How many times you want to play";
cin>>gameRounds;


for(int i=1;i<=gameRounds;i++){

computerChoice = 1+rand()%2;
cout<<"Enter Your choice number\n";
cout<<"(1) Stone"<<endl;
cout<<"(2) Paper"<<endl;
cout<<"(3) Scissors"<<endl;
cin>>userChoice;
if(userChoice == computerChoice){
cout<<"friendly"<<endl;
cout<<"Your choice is "<<hand[userChoice]<<endl;
cout<<"computer choice is "<<hand[computerChoice]<<endl;
}else if(userChoice == 1&&computerChoice==2){
cout<<"You Lose"<<endl;
cout<<"Your choice is "<<hand[userChoice]<<endl;
cout<<"computer choice is "<<hand[computerChoice]<<endl;
comCounter++;

}else if(userChoice == 2&&computerChoice==1){
cout<<"You Win"<<endl;
cout<<"Your choice is "<<hand[userChoice]<<endl;
cout<<"computer choice is "<<hand[computerChoice]<<endl;
winCounter++;
}else if(userChoice == 1&&computerChoice==3){
cout<<"You Win"<<endl;
cout<<"Your choice is "<<hand[userChoice]<<endl;
cout<<"computer choice is "<<hand[computerChoice]<<endl;
winCounter++;

}else if(userChoice == 3&&computerChoice==1){
cout<<"You Lose"<<endl;
cout<<"Your choice is "<<hand[userChoice]<<endl;
cout<<"computer choice is "<<hand[computerChoice]<<endl;
comCounter++;

}else if(userChoice == 2&&computerChoice==3){
cout<<"You Lose"<<endl;
cout<<"Your choice is "<<hand[userChoice]<<endl;
cout<<"computer choice is "<<hand[computerChoice]<<endl;
comCounter++;

}else if(userChoice == 3&&computerChoice==2){
cout<<"You Win"<<endl;
cout<<"Your choice is "<<hand[userChoice]<<endl;
cout<<"computer choice is "<<hand[computerChoice]<<endl;
winCounter++;

}else{
cout<<"invalid input"<<endl;

}
cout<<"Score YOU ("<<winCounter<<") :: COM ("<<comCounter<<")\n";

}

    return 0;
}
