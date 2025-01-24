# Simple Form Demo

This project is a simple demonstration on how to get a React-driven App to send a simple form to a PHP script

## System requirements

- npm (tested with 10.9.2)
- PHP-enabled hosting


## Under the hood

This is a simple, _vite_-based frontend, presenting a HTML form which sends its payload to a PHP script via a `POST` request. Nothing more.
Yes, for that, _vite_ and _react_ are overkill. But it is for demonstration purposes only.

## How to run

1. Check out project
2. Run `npm install` from within the _frontend_ directory
3. Start frontend locally with `npm run dev`

The PHP file needs to be available via a PHP-enabled server. Make sure to configure the system correctly by changing the value in the _.env_ file.
For local development, simply copy the _.env_ file to _.env.local_ and change the value to whatever your need is.

## Notes

- The PHP script just needs PHP's `mail()` function available and set up correctly. In most cases, this is true for simple shared hosting packages.
- Right now, the PHP script just prints out the values. For production, it should send out the mail and redirect the request (e.g. via `<meta>`, `header()` or JavaScript redirect)