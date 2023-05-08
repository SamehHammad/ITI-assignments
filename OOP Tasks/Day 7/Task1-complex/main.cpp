#include <iostream>
using namespace std;

class Complex {
  float real;
  float img;

public:
  Complex() {
    cout << "------message from default constructor------\n";
  }

  Complex(float f1) {
    real = f1;
    img = 0;
          cout << "------message from overloading fn------\n";
  }

  Complex(float f1, float f2) {
    real = f1;
    img = f2;
          cout << "------message from overloading fn------\n";
  }

  void setreal(float r) {
    real = r;
  }

  void setimg(float i) {
    img = i;
  }

  float getreal() const {
    return real;
  }

  float getimg() const {
    return img;
  }

  void printComplex();
};

Complex sum(Complex c1,Complex c2) {
  Complex res;
  res.setreal(c1.getreal() + c2.getreal());
  res.setimg(c1.getimg() + c2.getimg());
  return res;
}

Complex sum( Complex c, float f) {
  Complex res;
  res.setreal(c.getreal() + f);
  res.setimg(c.getimg());
        cout << "------message from overloading fn------\n";

  return res;
}

Complex sum(float f,  Complex c) {
  Complex res;
  res.setreal(c.getreal() + f);
  res.setimg(c.getimg());
        cout << "------message from overloading fn------\n";

  return res;
}

Complex sum(Complex c1, Complex c2, Complex c3) {
  Complex res;
  res.setreal(c1.getreal() + c2.getreal() + c3.getreal());
  res.setimg(c1.getimg() + c2.getimg() + c3.getimg());
        cout << "------message from overloading fn------\n";

  return res;
}

void Complex::printComplex()  {
  if (img > 0 && real == 0)
    cout << "The complex number is: " << "+ " << img << " i " << endl;
  else if (img == 0 && real > 0)
    cout << "The complex number is: " << real << endl;
  else if (img < 0 && real > 0)
    cout << "The complex number is: " << real << img << " i " << endl;
  else if (img > 0 && real > 0)
    cout << "The complex number is: " << real << " + " << img << " i " << endl;
  else if (img == 0 && real == 0)
    cout << "The complex number is: " << 0 << endl;
}
int main() {
  float f1, f2, r, i, c, f;
  Complex res;

  cout << "Enter a float number: ";
  cin >> f1;
  Complex objC1(f1);
  objC1.printComplex();

  cout << "Enter another float number: ";
  cin >> f2;
  Complex objC2(f1, f2);
  objC2.printComplex();

  cout << "Enter the real part of the first number: ";
  cin >> r;
  cout << "Enter the imaginary part of the first number: ";
  cin >> i;
  Complex c1;
  c1.setreal(r);
  c1.setimg(i);

  cout << "Enter the real part of the second number: ";
  cin >> r;
  cout << "Enter the imaginary part of the second number: ";
  cin >> i;
  Complex c2;
  c2.setreal(r);
  c2.setimg(i);

  cout << "Enter the real part of the third number: ";
  cin >> r;
  cout << "Enter the imaginary part of the third number: ";
  cin >> i;
  Complex c3;
  c3.setreal(r);
  c3.setimg(i);

res = sum(c1, c2);
  res.printComplex();

  res = sum(c1, f);
  res.printComplex();

  res = sum(f1, c1);
  res.printComplex();

  res = sum(c1, c2, c3);
  res.printComplex();

  return 0;
}

