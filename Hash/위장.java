import java.util.Arrays;
import java.util.HashMap;
class Solution {
    public int solution(String[][] clothes) {
    	int answer = 1;
        HashMap <String, Integer> li = new HashMap<String, Integer>();
        for(int i = 0; i < clothes.length; i++) {
        	if(li.containsKey(clothes[i][1])) {
        		li.put(clothes[i][1], li.get(clothes[i][1])+1);
        	}else {
        		li.put(clothes[i][1], 1);
        	} 
        }
        	
        for (Integer i : li.values()){
        	System.out.println(i);
        	answer *= ((int)i+1);
        }
       

        return (int)(answer-1);
    }
}