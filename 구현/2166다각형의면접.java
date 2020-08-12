/*
	2166 - 구현 - 다각형의 면적 
*/

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
 
public class Main {
    static int N;
    static Po[] p;
    public static void main(String[] args) throws NumberFormatException, IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());
        p = new Po[N+1];
        for(int i=1; i<=N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int x = Integer.parseInt(st.nextToken());
            int y = Integer.parseInt(st.nextToken());
            p[i] = new Po(x,y);
        }
        long res = 0;
        for(int i=2; i<N; i++) {
            res += ccw(p[1], p[i], p[i+1]);
        }
        
        res = Math.abs(res);
        if(res % 2 == 0) {
            System.out.println(res/2+".0");
        }else
            System.out.println(res/2+".5");
    }
    
    public static long ccw(Po p1, Po p2, Po p3) {
        //CCW 공식 (x1y2+x2y3+x3y1)−(y1x2+y2x3+y3x1)
        return ((p1.x*p2.y) + (p2.x*p3.y) + (p3.x * p1.y)) - ((p1.y*p2.x) + (p2.y*p3.x) + (p3.y*p1.x));
        
    }
    
    public static class Po{
        long x;
        long y;
        public Po(long x, long y) {
            this.x=x;
            this.y=y;
        }
    }
}