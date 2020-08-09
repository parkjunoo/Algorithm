/*
	프로그래머스 - 프린터
	https://programmers.co.kr/learn/courses/30/lessons/42587
*/


#include <iostream>
#include <queue>
#include <vector>
#include <list>

using namespace std;

int solution(vector<int> priorities, int location) {
	bool importance = false;
	int cnt = 0;
	int answer = 0;
	list <pair<int, int>> li;
	list<pair<int, int>>::iterator it;

	for (int i = 0; i < priorities.size(); i++) {
		li.push_back({ priorities[i], i });
	}

	while (!li.empty()) {
		int prior = li.front().first;
		int index = li.front().second;
		
		for (it = li.begin(); it != li.end(); it++) {
			if (prior < (*it).first) {
				importance = true;
				break;
			}
		}

		if (importance == true) {
			li.erase(li.begin());
			li.push_back({ prior, index });
			importance = false;
		}
		else {
			cnt++;
			if (location == index) answer = cnt;
			li.erase(li.begin());
		}
	}

	return answer;
}