/*
  https://programmers.co.kr/learn/courses/30/lessons/49993
  프로그래머스 - 정규표현식 - 스킬트리
*/

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;


class Solution {
    public static int solution(String skill, String[] skill_trees) {
        int answer = 0;
        String skillSet = "";
        String pattern = "[^"+ skill +"]";
        for(String item : skill_trees) {
        	for(int i = 0; i < skill.length(); i++) {
        		
        		skillSet += skill.charAt(i);
        		if(skillSet.equals(item.replaceAll(pattern, "")) || item.replaceAll(pattern, "").length() == 0)  {
        			answer++;
        			break;
        		}
        	}
        	skillSet = "";
        }        
        return answer;
    }
    public static void main(String[] args) {
    	//System.out.println(solution("CBD", new String[] {"BACDE", "CBADF", "AECB", "BDA"})); // 2
    	System.out.println(solution("CBD", new String[] {"BACDE","CBADF", "AECB", "BDA", "AQWER"}));
	}
}
