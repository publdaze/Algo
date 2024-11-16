# [Gold IV] Chain Email - 26318 

[문제 링크](https://www.acmicpc.net/problem/26318) 

### 성능 요약

메모리: 12568 KB, 시간: 192 ms

### 분류

벨만–포드, 그래프 이론, 최단 경로

### 제출 일자

2024년 11월 16일 23:29:11

### 문제 설명

<p>A chain email is an email that people receive and then forward to all of their friends. This sort of email is very common amongst elderly people, who have notably bad memories. Elderly people’s memories are so bad that if they ever receive a chain email they will forward it to all of their contacts. This can become very problematic when elderly people continually send the same email to each other. For instance, if two people have each other in their contacts and if either of them receive a chain email they will continually send the email to each other back and forth forever. Email companies are worried that this will result in a massive amount of storage loss on their servers and have asked you to determine if a specific person were to start a chain email, who would receive that email forever.</p>

<p>Given each elderly person’s contacts and which elderly person will be starting a chain email, determine who will be indefinitely receiving emails.</p>

### 입력 

 <p>The first line of the input is a positive integer, n, indicating the number of scenarios that your program will have to analyze. Following this will be the description of each scenario. The first line of each scenario will have two single-space-separated integers, p (1 ≤ p ≤ 50), indicating the number of people who use the email service and, s (1 ≤ s ≤ p), indicating the source of the chain email, where each person is labeled from 1 to p. Following this will be a single line with the names of all of the people, from person 1 to person p, who use the email service, each separated by exactly one space. All names will contain alphabetic characters only and be between 1 and 19 characters (inclusive) in length. Following this will be p lines. The i th line will describe the contact list of the i th person. This description will consist of an integer, m (0 ≤ m < p), indicating the number of contacts this person has, followed by the 1-based index of each of the contacts, each separated by exactly one space. It's guaranteed that no one will contain themselves as a contact.</p>

### 출력 

 <p>The first line of the output for each scenario should be “Chain Email #d:”, where d is the scenario number, starting with 1. Following this should be a line containing the names of all of the people who will infinitely receive chain emails, assuming that everyone continually forwards the email to all of their contacts. Each name should be followed by a space. List these contacts in the order that they appear in the input. If no one will infinitely receive chain emails, then print “Safe chain email!” instead.</p>

<p>Leave a blank line after the output for each data set. Follow the format illustrated in Sample Output.</p>

