#include <iostream>

using namespace std;

int main()
{
    string w[];
 cin>>w;
int counter = 0;
char first ;
char last;
if (w.length > 10) {
  for (int i = 0; i < w ; i++) {
    first = w[0];
  last = w[w - 1];
    counter++;
    }
   cout<<first<<counter<<last<<endl;

} else {

    cout<<w<<endl;
}
    return 0;
}
