import java.util.*;

class Solution {
    public int solution(int[][] jobs) {
        int time = 0;
        int answer = 0;
        boolean isJob = false;
        
        PriorityQueue<int[]> tasks = new PriorityQueue<int[]>((a,b)-> a[1]-b[1]);
        PriorityQueue<int[]> inComes = new PriorityQueue<int[]>((a,b)-> a[0]-b[0]);
        for(int i = 0; i < jobs.length; i++){
            tasks.add(jobs[i]);
            inComes.add(jobs[i]);
        }
        while(!tasks.isEmpty()){
            isJob = false;
            for(int[] job : tasks){
                if(time >= job[0]){
                    answer += time - job[0] + job[1];
                    time += job[1];
                    tasks.remove(job);
                    inComes.remove(job);
                    isJob = true;
                    break;
                }
            }
            if(!isJob){
                int[] first_come = inComes.poll();
                answer += time - first_come[0] + first_come[1];
                time += first_come[1];
                tasks.remove(first_come);
            }
        }
        System.out.println("!!"+ (int)(answer / jobs.length));
        return (int)(answer / jobs.length);
    }
}
