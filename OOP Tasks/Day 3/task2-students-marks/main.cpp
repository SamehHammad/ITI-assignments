#include <iostream>
#include <algorithm>

using namespace std;

int main()
{
    cout<<"enter the number of students: ";
    int STD;
    cin>>STD;
    cout<<"Enter the number of subjects: ";
    int SUB;
    cin>>SUB;
    double degrees[STD][SUB];
    double totals[STD];
    for(int i = 0; i<STD; i++)
    {
        cout<<"Enter the degree of each subject for student no "<<i+1<<": ";
        for(int j = 0; j<SUB; j++)
        {
            cin>>degrees[i][j];
            totals[i] += degrees[i][j];
        }

    }
    cout<<"The Total degrees of each student in all subjects :"<<endl;
    for(int i =0; i<STD; i++)
    {
        cout<<"Student no "<<"["<<i+1<<"]"<<" degrees is "<<totals[i]<<endl;
    }
    int max_degree =totals[0];
    int index;
    for(index = 1; index<STD; index++)
    {
        if(totals[index]>max_degree)
        {
            max_degree=totals[index];
        }
    }
    cout<<"The highest degree is student no "<<"["<<index<<"]"<<" with : " <<max_degree<<" degree"<<endl;

    for(int i = 0; i<SUB; i++)
    {
        int subject_total=0;
        double avg;
        for(int j = 0; j<STD; j++)
        {
            subject_total +=degrees[j][i];
        }
        avg = (float)(subject_total)/STD;
        cout<<"The Average of subject "<<"["<<i+1<<"]"<<" is :"<<avg<<endl;
    }
    return 0;
}
