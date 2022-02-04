//https://programmers.co.kr/learn/courses/30/lessons/42626

import java.util.*;

class Solution {
    public boolean checkScovile(){
        return false;
    }
    public int solution(int[] scoville, int K) {
        int count = 0;
        PriorityQueue<Integer> foods = new PriorityQueue<Integer>();
        for(int i = 0 ; i < scoville.length; i++ ){
            foods.add(scoville[i]);
        }
        
        while(true){
            Integer top = foods.peek();
            if(top == null) return -1;
            if(top < K){
                count++;
                Integer i = foods.poll();
                Integer j = foods.poll();
                if(j == null) return -1;
                foods.add(i + (j * 2));
                continue;
            }
            break;   
        }
        return count;
    }
}
