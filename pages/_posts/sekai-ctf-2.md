---
title: Sekai CTF - Let’s Play Osu!Mania
layout: post
date: 2022-10-13 20:23:00
tags:
    - ctf, sekaiCTF
---

[Webpage](https://2022.ctf.sekai.team/challenges/#Let%E2%80%99s-Play-Osu!Mania-34)
![image](https://files.catbox.moe/lz7401.jpg)
![image](https://files.catbox.moe/lyw0x9.jpg)
![image](https://files.catbox.moe/npjwqf.jpg)

---

This challenge was rather straight forward, read some inputs into stdin, parse the input and implement an algorithm

This was the final code

```js
/**
 * @return {Promise<String[]>}
 */
const fetchStdin = async () => {
    let chunks = []
    for await (const chunk of process.stdin) {
        chunks.push(chunk)
    }
    // Create an array holding a line of input
    return Buffer.concat(chunks)
        .toString()
        .split('\n')
}

;(async () => {
    let count = 0
    let [_, ...lines] = await fetchStdin()
    lines = lines.map((line) => line.substring(1, line.length - 1))

    for (let x = 0; x < lines[0].length; x++) {
        let y = -1
        while (y++ != lines.length - 1) {
            if (lines[y][x] === '-' && y === 0) {
                count++
                continue
            }
            if (lines[y][x] === '-') {
                if (lines[y - 1][x] === '#') continue
                count++
            }
        }
    }

    console.log(count)
})()
```

##### Algorithm

```
|-- -|
| #  |
| #- |
| #  |
| - -|
|-   |
| - -|
|    |
|  --|
|- # |
| -# |
|  # |
|  - |
```

1. Loop through each column.
2. For the each `-`, if there's no `#` before it, you add it to the count and continue with the next loop

`Note: Special case if its the first element in the column, if thats the case add it to the count and continue with the next loop`
