#include <iostream>
#include <vector>
#include <queue>
using namespace std;
int N, M;
int arr[1000][1000];
int visit[1000][1000];
int move_x[4] = { 1,0,-1,0 };
int move_y[4] = { 0,1,0,-1 };
int d[1000][1000];

queue<pair<int, int>> Q;

void bfs() {
	int temp_x, temp_y, result;

	for (int i = 0; i < M; i++) {
		for (int j = 0; j < N; j++) {
			if (arr[i][j] == 1) {
				Q.push({ i,j });
				visit[i][j] = true;
			}
		}
	}
	while (!Q.empty()) {
		temp_x = Q.front().first;
		temp_y = Q.front().second;

		Q.pop();
		for (int i = 0; i < 4; i++) {
			int x = temp_x + move_x[i];
			int y = temp_y + move_y[i];
			if (x >= 0 && x < M && y >= 0 && y < N && !visit[x][y] && arr[x][y] == 0)
			{
				Q.push({ x,y });
				visit[x][y] = true;
				arr[x][y] = 1;
				d[x][y] = d[temp_x][temp_y] + 1;
			}
		}
	}

	for (int i = 0; i < M; i++) {
		for (int j = 0; j < N; j++) {
			if (arr[i][j] == 0) {
				printf("-1"); return;
			}
		}
	}
	
	printf("%d", d[temp_x][temp_y]);
	return;
}

int main() {
	int cnt = 0;
	scanf("%d%d", &N, &M);
	for (int i = 0; i < M; i++) {
		for (int j = 0; j < N; j++) {
			scanf("%d", &arr[i][j]);
		}
	}
	for (int i = 0; i < M; i++) {
		for (int j = 0; j < N; j++) {
			if (arr[i][j] == 0) {
				cnt++;
			}
		}
	}
	if (cnt == 0) printf("0");
	else bfs();
}