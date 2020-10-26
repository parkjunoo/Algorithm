/*
  정규 표현식 - https://www.acmicpc.net/problem/1013
  Contact
*/

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

// 3
// 10010111  NO
// 011000100110001  NO
// 0110001011001  YES

class Main{
	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		String pattern = "";
		int n = Integer.parseInt(bf.readLine());
		for(int i = 0; i < n; i++) {
			pattern = bf.readLine();
			if(pattern.matches("(100+1+|01)+")) {
				System.out.println("YES");
			}else {
				System.out.println("NO");
			}
		}
						
	}
}
