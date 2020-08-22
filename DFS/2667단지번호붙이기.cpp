/*
	2667 - dfs - 단지번호붙이기 
	https://www.acmicpc.net/status?from_mine=1&problem_id=2667&user_id=qkrwnstn13
*/

#include <iostream>
#include <algorithm>
using namespace std;

int N;
int arr[1000];
int map[25][25];
int visit[25][25];
int move_x[4] = { 1, 0, -1, 0 };
int move_y[4] = { 0, 1, 0, -1 };
int group = 2;

void dfs(int x, int y) {
	if (visit[x][y]) return;
	visit[x][y] = true;
	map[x][y] = group;

	for (int i = 0; i < 4; i++) {
		
		int temp_x = x + move_x[i];
		int temp_y = y + move_y[i];

		if (temp_x <= 0 && temp_x < N && temp_y <= 0 && temp_y <N && 
			map[temp_x][temp_y] == 1) {
			dfs(temp_x, temp_y);
			arr[group-2]++;
		}
	}
	
}


int main() {

	scanf("%d", &N);

	for (int i = 0; i < N; i++) {
		for (int j = 0; j < N; j++) {
			scanf("%1d", &map[i][j]);
		}
	}

	for (int i = 0; i < N; i++) {
		for (int j = 0; j < N; j++) {
			if (map[i][j] == 1) {
				dfs(i, j);
				group++;
			}
		}
	}
	sort(arr, arr + group - 2);
	printf("%d\n", group - 2);
	for (int i = 0; i < group - 2; i++) {
		printf("%d\n", arr[i]+1);
	}
}