# training-SimpleChat

A simple chat server-client for training using Node.js/express/socket.io.

> WARNING! PLEASE DON'T PUSH YOUR IMPLEMENTATION TO MASTER DIRECTLY. CREATE NEW BRANCH AND WORK WITH IT INSTEAD. TRAINING PURPOSE ONLY.

## Prerequisite

- Node.js v10+

## Install

```
~$ npm install
```

## Run

### Server

```
~$ node app.js
```

### Client

Open `index.html` in Chrome browser after launching the server. You may see the connection logs in both server and client developer console.

## Assignment

1. Create new branch from `master`.
1. Implement `TODO`s in `app.js` file so that the server would broadcast the message received from a client to other connected clients.
1. Implement `TODO`s in `index.html` file so that the client could handle send and receive operations. The right operation is that the message should be sent when a user put `send('message')` into the developer console and receive the message back. And it also receives the message sent by other clients as well.
1. (Stretched goal) Could you add `userId` parameter to `connect()` function so that the user could give the ID and the message is going to be sent with the `userId`? The result should also contain the `userId` along with the `message`. The display should be like `chrisallo: hello world!` instead of mere `hello world!`.