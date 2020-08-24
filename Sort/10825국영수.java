/*
	https://www.acmicpc.net/problem/10825
	10825 - sort - 국영수
*/


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

class Main {

	static public class Student { // 학생 점수 Class
		String name;
		int korScore;
		int engScore;
		int mathScore;

		Student(String name, int korScore, int engScore, int mathScore) {
			this.name = name;
			this.korScore = korScore;
			this.engScore = engScore;
			this.mathScore = mathScore;
		}
		
		

	}
	
	static Comparator<Student> comparator = new Comparator<Student>() {

		@Override
		public int compare(Student a, Student b) { // a , b 객체끼리 비교
			if(b.korScore == a.korScore) { //a, b의 국어점수가 같으면 영어비교 
				if(a.engScore == b.engScore) { //a, b의 영어점수가 같으면 수학비교
					if(b.mathScore == a.mathScore) { //a, b의 수학점수가 같으면 문자열 비교
						return a.name.compareTo(b.name);
					}
					return b.mathScore - a.mathScore; // b-a내림차순, a-b오름차순
				}
				return a.engScore - b.engScore;
			}
			return b.korScore - a.korScore;
		}
	};
	
	

	static String[] temp;
	static ArrayList<Student> list = new ArrayList<Student>();

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(bf.readLine()); // T: 학생의 수
		for (int i = 0; i < T; i++) {
			temp = bf.readLine().split(" "); //temp[0]:이름 , temp[1]:국어, temp[2]:영어, temp[3]:수학
			list.add(new Student(temp[0], Integer.parseInt(temp[1]), Integer.parseInt(temp[2]),Integer.parseInt(temp[3])));
		}
		
		Collections.sort(list,comparator);
		
		for(Student s : list) {
			System.out.println(s.name);
		}
	

	}
}