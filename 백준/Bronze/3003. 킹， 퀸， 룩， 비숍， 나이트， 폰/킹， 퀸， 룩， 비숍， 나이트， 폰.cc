#include <iostream>
#include <vector>

using namespace std;

int king, queen, look, bishop, night, phone;
vector<int> nums{1, 1, 2, 2, 2, 8};

void input()
{
  cin >> king >> queen >> look >> bishop >> night >> phone;
}

void solve()
{
  cout << nums[0] - king << ' ';
  cout << nums[1] - queen << ' ';
  cout << nums[2] - look << ' ';
  cout << nums[3] - bishop << ' ';
  cout << nums[4] - night << ' ';
  cout << nums[5] - phone << '\n';
}

int main()
{
  input();
  solve();
}
