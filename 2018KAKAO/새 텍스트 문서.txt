/*
	프로그래머스 - [카카오 인턴] 키패드 누르기
	https://programmers.co.kr/learn/courses/30/lessons/67256
*/

#include <string>
#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int solution(string dartResult) {
	int answer = 0;
	int a = 0;
	int score = 0;
	int arr[3];

	for (int i = 0; i < dartResult.length(); i++) {

		switch (dartResult[i]) {
		case 'S':
			arr[a] = score;
			a++; score = 0;
			break;
		case 'D':
			score = score * score;
			arr[a] = score;
			a++; score = 0;
			break;
		case 'T':
			score = score * score * score;
			arr[a] = score;
			a++; score = 0;
			break;
		case '*':
			for (int j = a - 2; j < a; j++) {
				if (j < 0) {}
				else
					arr[j] = arr[j] * 2;
			}
			break;
		case '#':
			arr[a - 1] = arr[a - 1] * (-1);
			break;
		default:
			score = (score * 10) + (dartResult[i] - '0');
		}
	}


	for (int i = 0; i < a; i++) {
		answer += arr[i];
	}
	return answer;
}

int main() {
	printf("%d\n", solution("1S2D*3T"));
	printf("%d\n", solution("1D2S#10S"));
	printf("%d\n", solution("1D2S0T"));
	printf("%d\n", solution("1S*2T*3S"));
	printf("%d\n", solution("1D#2S*3S"));
	printf("%d\n", solution("1T2D3D#"));
	printf("%d\n", solution("1D2S3T*"));
} 