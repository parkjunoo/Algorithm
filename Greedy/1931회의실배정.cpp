/* 
	Greedy- 1931 - 회의실 배정
*/	
#include <iostream>
#include <queue>
#include <algorithm>
#include <vector>
using namespace std;


int main() {
	int N, a, b, cnt = 0;
	int last = 0;
	vector <pair <int, int>> v;
	scanf("%d", &N);

	for (int i = 0; i < N; i++) {
		scanf("%d%d", &a, &b);
		v.push_back({ b,a });
	}
	sort(v.begin(), v.end());


	for (int k = 0; k < v.size(); k++) {
		if (v[k].second >= last) {
			cnt++;
			last = v[k].first;
		}
	}
	
	printf("%d", cnt);

}