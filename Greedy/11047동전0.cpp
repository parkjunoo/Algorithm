#include <iostream>

int N, T, result;
int arr[10];

int greedy() {
	int i = 0;
	int cnt = 0;

	while (T) {
		if (arr[i] <= T) {
			cnt = cnt + T / arr[i];
			T = T % arr[i];
		}
		else
			i++;
	}
	return cnt;
}

int main() {
	scanf("%d%d", &N, &T);
	for (int i = 0; i < N; i++) {
		scanf("%d", &arr[N - i - 1]);
	}
	result = greedy();
	printf("%d", result);
}