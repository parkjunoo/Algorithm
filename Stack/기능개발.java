import java.util.*;
import java.util.stream.*;

class Solution {
    public int[] solution(int[] progresses, int[] speeds) {
        int jobs = 1;
        double max = Math.ceil((100 - progresses[0]) / (double) speeds[0]);
        List<Integer> answer = new ArrayList<Integer>();
        
        for(int i = 1; i < progresses.length; i++){
            double day = Math.ceil((100 - progresses[i]) / (double) speeds[i]);
            if(max < day){
                max = day;
                answer.add(jobs);
                jobs = 1;
            }else{
                jobs++;
            }
        }
        answer.add(jobs);
        return answer.stream().mapToInt(Integer::intValue).toArray();
    }
}
