/*
	https://www.acmicpc.net/problem/2493
	2493 탑
*/
#include <iostream>
#include <stack>

using namespace std;
stack< pair<int, int> >T;

int main() {

	int n;
	scanf("%d", &n);
	for (int i = 1; i <= n; i++) {
		int a;
		scanf("%d", &a);
		while (T.size()) {
			if (a < T.top().first) {
				printf("%d ", T.top().second);
				break;
			}
			T.pop();
		}
		if (T.empty()) printf("0 ");
		T.push({ a, i });
	}
}