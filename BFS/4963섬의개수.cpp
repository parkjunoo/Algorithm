/*
	https://www.acmicpc.net/problem/4963
	BFS - 섬의 개수
*/

#include <iostream>
#include <queue>
using namespace std;
int n, m;
int map[50][50];
int visit[50][50];
int search_x[8] = { 1,0,-1,0,1,-1,1,-1 };
int search_y[8] = { 0,1,0,-1,1,1,-1,-1 };
void init() {
	for (int i = 0; i < 50; i++) {
		for (int j = 0; j < 50; j++) {
			visit[i][j] = 0;
		}
	}
}

void bfs(int x, int y) {
	queue <pair<int, int>> Q;
	Q.push({ x, y });
	visit[x][y] = true;

	while (!Q.empty()) {
		int temp_x = Q.front().first;
		int temp_y = Q.front().second;
		map[temp_x][temp_y] = 0;
		Q.pop();
		for (int i = 0; i < 8; i++) {
			int move_x = temp_x + search_x[i];
			int move_y = temp_y + search_y[i];

			if (move_x >= 0 && move_x < n &&
				move_y >= 0 && move_y < m &&
				map[move_x][move_y] && !visit[move_x][move_y]) {

				Q.push({ move_x, move_y });
				visit[move_x][move_y] = true;
			}
		}
	}
}

int main() {

	while (1) {

		int cnt = 0;
		scanf("%d%d", &m, &n);

		if (m == 0 && n == 0) break;

		for (int i = 0; i < n; i++) {
			for (int j = 0; j < m; j++) {
				scanf("%d", &map[i][j]);
			}
		}

		for (int i = 0; i < n; i++) {
			for (int j = 0; j < m; j++) {
				if (map[i][j] == 1) {
					bfs(i, j);
					cnt++;
				}
			}
		}
		init();
		printf("%d\n", cnt);
	}

}