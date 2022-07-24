#include <iostream>
#include <cmath>
#include <vector> // pow

using namespace std;

int N;
vector<long long> nums;

void input()
{
  cin >> N;

  int a, b;
  for (int i = 0; i < N; i++)
  {
    cin >> a >> b;
    nums.push_back(pow(a, b % 4 + 4)); // 나머지가 4마다 반복됨
  }
}

void solve()
{
  int result;
  for (auto &i : nums)
  {
    result = i % 10;
    if (result == 0)
      cout << 10 << '\n';
    else
      cout << i % 10 << '\n';
  }
}

int main()
{
  input();
  solve();
}

// NOTE 15m
// 숫자가 매우 큰 경우 고려해야 함
// b % 4 했을 때 0이 되는 경우 고려해야 함
// nums 값 int 범위 생각하기