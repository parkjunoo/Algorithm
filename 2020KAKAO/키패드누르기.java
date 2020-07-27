/*
	프로그래머스 - [카카오 인턴] 키패드 누르기
	https://programmers.co.kr/learn/courses/30/lessons/67256
*/

class Hand {
	String dir;
	int Position;

	Hand(int p, String s) {
		dir = s;
		Position = p;
	}
}

class Solution {				 0  1  2  3  4  5  6  7  8  9    #
	static int[][] distance = {  { 0, 4, 3, 4, 3, 2, 3, 2, 1, 2, 1, 1 }, 
							1{ 4, 0, 1, 0, 0, 2, 0, 0, 3, 0, 0, 0 },
							2{ 3, 1, 0, 1, 2, 1, 2, 3, 2, 3, 4, 4 }, 
							3{ 4, 0, 1, 0, 0, 2, 0, 0, 3, 0, 0, 0 },
							4{ 3, 0, 2, 0, 0, 1, 0, 0, 2, 0, 0, 0 }, 
							5{ 2, 2, 1, 2, 1, 0, 1, 2, 1, 2, 3, 3 },
							6{ 3, 0, 2, 0, 0, 1, 0, 0, 2, 0, 0, 0 }, 
							7{ 2, 0, 3, 0, 0, 2, 0, 0, 1, 0, 0, 0 },
							8{ 1, 3, 2, 3, 2, 1, 2, 1, 0, 1, 2, 2 }, 
							9{ 2, 0, 3, 0, 0, 2, 0, 0, 1, 0, 0, 0 },
						   10{ 1, 0, 4, 0, 0, 3, 0, 0, 2, 0, 0, 0 }, 
						   11{ 1, 0, 4, 0, 0, 3, 0, 0, 2, 0, 0, 0 } };
7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2
	public String solution(int[] numbers, String hand) {
		String answer = ;
		Hand RHand = new Hand(10,right);
		Hand LHand = new Hand(11,left);
		for (int i = 0; i  numbers.length; i++) {
			if (numbers[i] == 1  numbers[i] == 4  numbers[i] == 7) {
				answer += 'L';
				LHand.Position = numbers[i];
			} else if (numbers[i] == 3  numbers[i] == 6  numbers[i] == 9) {
				answer += 'R';
				RHand.Position = numbers[i];
			} else {
				
				if (distance[RHand.Position][numbers[i]]  distance[LHand.Position][numbers[i]]) {
					answer += 'L';
					LHand.Position = numbers[i];
				} else if (distance[RHand.Position][numbers[i]]  distance[LHand.Position][numbers[i]]) {
					answer += 'R';
					RHand.Position = numbers[i];
				} else {
					if(hand.equals(right)
							) {
						answer += 'R';
						RHand.Position = numbers[i];
					}else {
						answer += 'L';
						LHand.Position = numbers[i];
					}
					
				}
			}

		}

		return answer;
	}

}