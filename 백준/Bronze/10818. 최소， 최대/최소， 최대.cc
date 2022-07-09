#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int N, maxNum, minNum;
vector<int> nums;

void input() {
  cin >> N;

  int n;
  for (int i = 0; i < N; i++) {
    cin >> n;
    nums.push_back(n);
  }
}

void solve() {
  maxNum = *max_element(nums.begin(), nums.end());
  minNum = *min_element(nums.begin(), nums.end());
}

void print() {
  cout << minNum << ' ' << maxNum << '\n';
}

int main() {
  ios_base ::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  input();
  solve();
  print();
}