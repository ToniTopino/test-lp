# Test Task For LoppiPoppi

## System requirements

- Node.js 16+ (https://nodejs.org/)
- Nest.js 8.0.0+ (https://nestjs.com/)
- Yarn 1.22.1+ (https://classic.yarnpkg.com/)
- Firebase 11.0.1+ (https://firebase.google.com/docs/cli)

## Installation

### Node.js

- Linux: https://nodejs.org/en/download/package-manager/
- Windows: https://nodejs.org/en/download/

### Nest

https://docs.nestjs.com/#installation

### Yarn

https://classic.yarnpkg.com/en/docs/install

### Firebase

https://firebase.google.com/docs/cli


## Running the server

1. `git clone ssh://git@github.com:ToniTopino/test-lp.git`
1. `cd test-lp/serve`
1. `yarn`
1. `yarn start:dev` or `yarn start:debug`
1. Open http://localhost:3000/swagger

## Running the firebase-functions

1. `git clone ssh://git@github.com:ToniTopino/test-lp.git`
1. `cd test-lp/serve`
1. `yarn`
1. `yarn serve:firebase`
1. Open http://localhost:5000/test-lp-1406/us-central1/api

## Deploy the firebase-functions

1. `git clone ssh://git@github.com:ToniTopino/test-lp.git`
1. `cd test-lp/serve`
1. `yarn`
1. `yarn deploy:firebase`

## Connect firebase-firestore

1. Specify environment variables in the serve/environment.ts file
