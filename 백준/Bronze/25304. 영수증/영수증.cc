#include <iostream>

using namespace std;

int price, N;
int sum;

void input()
{
  cin >> price;
  cin >> N;

  int a, b;
  for (int i = 0; i < N; i++)
  {
    cin >> a >> b;
    sum += a * b;
  }
}

void solve()
{
  if (price == sum)
    cout << "Yes\n";
  else
    cout << "No\n";
}

int main()
{
  input();
  solve();
}
