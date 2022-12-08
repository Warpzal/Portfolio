---
title: Learning with Advent of Code 2022
layout: post
date: 2022-12-8 20:23:00
tags:
    - life, programming
---

Lately I've been completing the 2022 challenges for
[Advent of Code 2022](https://adventofcode.com/) in Javascript/Typescript. It's been a lot of fun, but if you haven't heard of it. Advent of Code is a yearly event that takes place from Dec. 1 - 25. It focuses on Christmas themed questions, and they are usually a lot more fun than programming challenges you'd get on other sites.

People use it as an opportunity to learn new languages, study data structures and algorithms, or just for fun. Anyway if you want to be sharpening your skills in a fun way, you should be participating in Advent of Code.

To learn in programming, you need 2 things. To write a lot of code, and to get criticism, or perspective. Luckily, with AoC, you can do both! After each puzzle, please go look at other solutions. That's when you will learn about more concise and clever way to solve problems. I usually even rewrite these solutions in my language, just to drill the point home. I sincerely believe that this is the most fun, and efficient way to become a better problem solver. Sites like leetcode are great for learning, the problem is that they just aren't as fun! When you're trying to get good at a skill, you need to have a process you enjoy. I really like the phrase, "It's not about the destinatio, but the journey along the way". As someone who has tried to get better at programming through these other sites, I can say that they work, and that they can be fun, but theres something different about these puzzles, and it might be because of the giant community that's working on them at the same time. The [subreddit](https://www.reddit.com/r/adventofcode/) is filled with people who are constantly helping others, sharing solutions, or doing cool visualizations. It really helps to be part of a virtual classroom of your peers.

I wanted to write this to encourage others to learn new skills, and give some of these puzzles a go. As of writing this, 8 Puzzles have been released.
You can see my solutions in depth here [Repo](https://github.com/Zalonics/Advent-Of-Code-2022)

### - Bonus: Random Example of Types of problems-

##### Day 7 - File System

[Puzzle Here](https://adventofcode.com/2022/day/7)

![alt](https://preview.redd.it/kr2zc98jwh4a1.png?width=640&crop=smart&auto=webp&s=0ef9f65f233a66f0ad95fd04033facd5def2fb71)

In this challenge we are given a mock file system and we have to traverse through a list of nested folders and get the size of each one. I just dont see puzzles like this on other sites, and I find it immensely rewarding when completing. Here is my solution for this problem written in typescript. I used a stack to keep track of where I was in the file tree. Definitely one of my more elegant solutions. I first tried to make a nested JSON-like object, and that was way too silly.

```ts
import { readFileSync } from 'fs'

const lines = readFileSync('./input.txt', 'utf-8')
    .trim()
    .split('\n')

type Size = {
    [key: string]: number
}

const maxSize: number = 70000000
const spaceNeededForUpdate: number = 30000000
const sizes: Size = {}
const path: string[] = []

const cd = (dir: string): void => {
    if (dir === '..') {
        path.pop()
        return
    }
    path.push(dir)
}

for (const line of lines) {
    const words = line.split(' ')
    if (words[1] === 'ls' || words[0] === 'dir') continue
    if (words[1] === 'cd') {
        cd(words[2])
        continue
    }
    const size: number = +words[0]
    path.forEach((dir, index) => {
        const key = path.slice(0, index + 1).join('.')
        if (!sizes[key]) sizes[key] = 0
        sizes[key] += size
    })
}

console.log(sizes)

const unusedSpace = maxSize - sizes['/']
const spaceNeeded = spaceNeededForUpdate - unusedSpace
const candidates = Object.values(sizes).filter((val) => val > spaceNeeded)
const [dirToDelete] = candidates.sort((a, b) => a - b)
console.log(dirToDelete)
```
