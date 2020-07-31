import java.io.*
import java.util.*

var arr = Array(100) { IntArray(100) }
var visited = Array(100) {IntArray(100) }
var dx = intArrayOf(1, 0, -1, 0)
var dy = intArrayOf(0, 1, 0, -1)
var n  = 0
var m  = 0

fun init():Unit {
	for(i in 0 until 100){
		for(j in 0 until 100){
			arr[i][j] = 0
			visited[i][j] = 0
		}
	}
}
		
fun DFS(a: Int, b: Int):Unit{
	if(visited[a][b] == 1) return
	
	visited[a][b] = 1
	arr[a][b] = 0
	
	for(i in 0 until 4){
		var temp_x = a + dx[i]
		var temp_y = b + dy[i]
		if(temp_x >= 0 && temp_x < n && temp_y >= 0 && temp_y < m &&
				arr[temp_x][temp_y] == 1 && visited[temp_x][temp_y] == 0){
			DFS(temp_x, temp_y)
		}
	}
}

fun main(args : Array<String>) = with(BufferedReader(InputStreamReader(System.`in`))){
	var t = readLine().toInt()
	var cnt = 0;
	for(i in 1..t){
		init()
		var input = readLine().split(" ")
		n = input[0].toInt()
		m = input[1].toInt()
		var a = input[2].toInt()
		for(j in 0 until a){
			input = readLine().split(" ")
			arr[input[0].toInt()][input[1].toInt()] = 1
		}

		
		for(k in 0 until n){
			for(j in 0 until m){
				if(arr[k][j] == 1){
					DFS(k,j)
					cnt++;
				 }
			}
		}
		
		println(cnt)
		cnt = 0
		
	}
}