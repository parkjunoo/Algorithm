// 프로그래머스 DP 멀리뛰기
// https://programmers.co.kr/learn/courses/30/lessons/12914

public class Main {
	static class Solution {
		
	    int solution(int[][] land) {
	        
	    	for(int i = 0; i < land.length-1; i++) {
	    		for(int j = 0; j < 4; j++) {
	    			int max = 0;
	    			for(int k = 0; k < 4; k++) {
	    				
	    				if (j != k && max < land[i][k]) {
    						max = land[i][k];
	    				}
	    			}
	    			land[i+1][j] += max;
	    		}
	    	}
	    	int max = land[land.length-1][0];
	    	for(int t = 0; t < 4; t++) {
	    		if( max < land[land.length-1][t]) {
	    			max = land[land.length-1][t];
	    		}
	    	}
	        return max;
	    }
	}
	public static void main(String[] args) {
		Solution s = new Solution();
		System.out.println(s.solution(new int[][] {{1,2,3,5},{5,6,7,8},{4,3,2,1}})); // 16
	}
}
