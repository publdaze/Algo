#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int N;
// 곱, 합, 등번호
vector<tuple<int, int, int>> info;

bool cmp(tuple<int, int, int> &a, tuple<int, int, int> &b)
{
  if (get<0>(a) == get<0>(b))
  {
    if (get<1>(a) == get<1>(b))
    {
      return get<2>(a) < get<2>(b);
    }
    return get<1>(a) < get<1>(b);
  }
  return get<0>(a) < get<0>(b);
}

int main()
{
  cin >> N;

  int b, p, q, r;
  for (int i = 0; i < N; i++)
  {
    cin >> b >> p >> q >> r;

    tuple t(p * q * r, p + q + r, b);
    info.push_back(t);
  }

  sort(info.begin(), info.end(), cmp);

  cout << get<2>(info[0]) << ' ' << get<2>(info[1]) << ' ' << get<2>(info[2]) << '\n';
  return 0;
}