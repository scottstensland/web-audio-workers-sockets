web-audio-workers-sockets
=========================

stream audio using web sockets in web worker rendered using web audio

The goal is to stream audio from server to browser to be rendered using web audio.
Without using webworkers, my experience is the audio gets choppy when the single thread
of the browser is used for everything (streaming sockets / audio rendering)

I have discovered firefox fails to allow websockets from inside a webworker, yet
this is OK on chrome.  Also, no browser supports web audio from a webworker.
So I will see if I can eliminate this choppy audio issue by creating a sandwich :
   
    websocket <--> webworker <--> webaudio

... but first I will attempt to get a smooth audio rendering using just websockets + web audio


# Installation

Dependencies include node/npm


```bash
npm install -g web-audio-workers-sockets
cd $NODE_PATH/web-audio-workers-sockets
npm start
```

... or if you prefer to have the git repo local :


```bash
git clone git@github.com:scottstensland/web-audio-workers-sockets.git
cd web-audio-workers-sockets
npm install    # install the dependent modules
npm start
```


Using a web audio/web worker/websocket savvy browser, point it at URL :

```bash
		 http://localhost:8888 
```


As of today - August 26th 2014 - only chrome works on linux, firefox (34.0a1 (2014-08-04)) fails since it cannot yet handle launching a websocket from a webworker thread.  Opera also fails on lack of web audio.

