#include <iostream>

using namespace std;

int N;
int cnt[10001] = {};

void input()
{
  cin >> N;

  int n;
  for (int i = 0; i < N; i++)
  {
    cin >> n;
    cnt[n] += 1;
  }
}

void print()
{
  for (int i = 1; i <= 10000; i++)
  {
    for (int j = 1; j <= cnt[i]; j++)
    {
      cout << i << "\n";
    }
  }
}

int main()
{
  ios_base ::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  input();
  print();
}