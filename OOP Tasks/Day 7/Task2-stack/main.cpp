#include <iostream>

using namespace std;

class Stack
{

    int*st;
    int Size;
    int top;
    static int counter;
private:
    bool isFull();
public:

  Stack(int s=10)
{
    top = 0;
    Size = s;
    st = new int[Size];
    counter++;
}


void push(int n);
    int pop();
    bool isEmpty();
    void printStack();
    static int getCounter(){
        return counter;
        }

    ~Stack ()
    {
        delete[] st;
    }
};
int Stack::counter=0;
void Stack::push (int n)
{
bool stkFull = isFull();
    if (stkFull)
    {

        cout<< "\nStack memory is full"<<endl;
    }
    else
    {
        st[top]=n;
        top++;
    }
}

int Stack:: pop ()
{
    bool stkEmpty=isEmpty();

    int retuenedVal = 0;
    if (stkEmpty)
    {
        cout<< "\nStack memory is empty"<<endl;

    }
    else
    {
        top--;
        retuenedVal=st[top];
    }
    return retuenedVal;
}

bool Stack::isEmpty(){
return (top < 0);
}
bool Stack::isFull(){
return (top == Size);
}
void Stack::printStack(){
    bool stkEmpty = isEmpty();
    int i;
    if(!stkEmpty){
        for(i = top - 1; i >= 0; i--){
            cout << st[i] << endl;
        }
    } else {
        cout << "stack is empty" << endl;
    }
}


int main()
{
    int s,popVal;

    cout<<"Enter Size Of Stack\n";
    cin>>s;
    Stack s1(s);
    Stack s2;
    s1.push(10);
    s1.push(11);
    s1.push(12);
    popVal=s1.pop();
        cout<<"The value you removed is"<<popVal<<endl;
        s1.push(1);
        s1.push(2);
        s1.push(3);
        s1.printStack();
    cout<<"Number of objects is "<<Stack::getCounter();

    return 0;
}
