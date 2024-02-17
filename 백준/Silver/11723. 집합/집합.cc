#include <iostream>
#include <fstream>
#include <sstream>
#include <unordered_set>
#include <vector>

using namespace std;

int main()
{
  ios_base ::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  int n;
  cin >> n;
  string op;
  int num;

  bool exist[21];

  for (int i = 0; i < n; i++)
  {
    cin >> op;

    if (op == "add")
    {
      cin >> num;
      exist[num] = true;
    }
    else if (op == "remove")
    {
      cin >> num;
      exist[num] = false;
    }
    else if (op == "check")
    {
      cin >> num;
      cout << (exist[num] ? 1 : 0) << "\n";
    }
    else if (op == "toggle")
    {
      cin >> num;
      exist[num] = !exist[num];
    }
    else if (op == "all")
    {
      for (int i = 1; i <= 20; i++)
      {
        exist[i] = true;
      }
    }
    else if (op == "empty")
    {
      for (int i = 1; i <= 20; i++)
      {
        exist[i] = false;
      }
    }
  }

  return 0;
}
