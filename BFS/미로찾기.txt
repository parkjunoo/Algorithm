/*
	https://www.acmicpc.net/problem/2178
	BFS 2178 미로찾기
*/


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

class Pair{
	private int x;
	private int y;
	Pair(int x, int y){
		this.x = x;
		this.y = y;
	}
	
	int getX() {
		return x;
	}
	int getY() {
		return y;
	}
	
}
public class Main {


	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine(), " ");
		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());
		int[][] map = new int[n+1][m+1];
		boolean[][] visit = new boolean[n+1][m+1];
		int[][] d = new int [n+1][m+1];
		int[] dx = {1,0,-1,0};
		int[] dy = {0,-1,0,1};
		Queue<Pair> q = new LinkedList<Pair>();
		
		for(int i = 0; i < n; i++) {
			String s = br.readLine();
			for(int j= 0; j< m; j++) {
				map[i][j] = s.charAt(j) - '0';
			}
		}
		
		visit[0][0] = true;
		d[0][0] = 1;
		q.offer(new Pair(0,0));
		
		while(!q.isEmpty()) {
			Pair p = q.poll();
			int temp_x = p.getX();
			int temp_y = p.getY();
			
			for(int i = 0; i < 4; i ++) {
				int x = temp_x + dx[i];
				int y = temp_y + dy[i];
				if(x >= 0 && x < n && y >= 0 && y < m && !visit[x][y] && map[x][y] == 1) {
					q.offer(new Pair(x,y));
					visit[x][y] = true;
					d[x][y] = d[temp_x][temp_y] +1;
					
				}
				
				
			}
			
        }
		System.out.println(d[n-1][m-1]);
	}

}
/*ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ*/
