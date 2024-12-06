# Unhandled Errors in Node.js HTTP Server

This repository demonstrates a common error in Node.js: unhandled exceptions in HTTP servers. The `bug.js` file shows a server that's vulnerable to crashes due to missing error handling.  The `bugSolution.js` provides a corrected version with robust error handling.

## Problem

The original server lacks error handling, meaning any unexpected issues (like a database error or file system failure) will cause the server to crash without providing useful information.  This leads to downtime and makes debugging difficult.

## Solution

The solution incorporates `try...catch` blocks to gracefully handle potential errors.  Error messages are logged to the console for debugging, and appropriate responses are sent to the client.  This prevents crashes and provides better feedback in case of problems.

## How to Run

1. Clone the repository.
2. Navigate to the repository directory.
3. Run `node bug.js` to see the unhandled error.
4. Run `node bugSolution.js` to see the improved error handling.