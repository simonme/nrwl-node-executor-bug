# NrwlNodeExecutorBug

This project was generated using [Nx](https://nx.dev).

Node version: v16.11.1

Nx + plugin versions: 13.0.0 (also verified on 12.10.0 and 12.7.2)

## Bug description

The node executor doesn't seem to wait for async operations to finish (at least if watch mode is disabled).

This can be reproduced with the app `my-app`, which logs two lines on the console, waiting 2000 ms in between.

The command works when the compiled `main.js` is directly used with `node`.

## Working Command And Output

```bash
➜  nrwl-node-executor-bug git:(main) nx run my-app:working-command

>  NX  Running target working-command for project my-app and 1 task(s) that it depends on.
        

———————————————————————————————————————————————

> nx run my-app:build [existing outputs match the cache, left as is]
chunk (runtime: main) main.js (main) 365 bytes [entry] [rendered]
webpack compiled successfully (06dfbd1ab26302c6)

> nx run my-app:working-command 
First log
Second log

———————————————————————————————————————————————

>  NX   SUCCESS  Running target "working-command" succeeded

  Nx read the output from cache instead of running the command for 1 out of 2 tasks.

➜  nrwl-node-executor-bug git:(main) ✗
```

## Broken Command And Output

```bash
➜  nrwl-node-executor-bug git:(main) ✗ nx run my-app:broken-command

> nx run my-app:broken-command 
chunk (runtime: main) main.js (main) 365 bytes [entry] [rendered]
webpack compiled successfully (06dfbd1ab26302c6)

———————————————————————————————————————————————

>  NX   SUCCESS  Running target "broken-command" succeeded


First log     
➜  nrwl-node-executor-bug git:(main) ✗ Second log
```
