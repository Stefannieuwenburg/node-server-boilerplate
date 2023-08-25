# Node.js server template

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Style guide](#style-guide)
- [Architecture guide](#architecture-guide)

### General info

19.07.23. Updates. We create a new version of the template. It is already written in Typescript !
In this template every time we manually create 7 files for one CRUD logic. Now you can create your CRUD new files at once just using `rest-resource-file-generator` npm module made by me :tophat: \
Here is the link of instructions in npm [rest-resource-file-generator](https://www.npmjs.com/package/rest-resource-file-generator) \
This is a simple Node.js server application boilerplate with CRUD operations simple logic. It provides REST APIs.
Before using it, please ensure that you've already installed the following programs\
[Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) as version control,\
[Node.js](https://nodejs.org/en/) as server program,\
[Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) as Node.js package manager,\
[MongoDb](https://docs.mongodb.com/manual/installation/) as database program.\
If you haven't, these are their links for installing.

### Technologies

Program/lib | version | command for checking\
Git | 2.37.0 | `git --version`\
Node.js | v16.6.1 | `node -v` \
Express | ^4.18.1 | see in app package.json\
MongoDB | v4.4.5 | `mongo --version`\
Mongoose | ^6.4.6 | see in this app package.json\
Mocha | 9.1.3 | see in this app package.json\
Eslint | 8.24.0 | see in this app package.json\
Yarn | 1.22.19 | `yarn -v`

### Setup

for npm

- install packages\
   `npm i`
- run server\
   `npm run start`
  or \
   `npm start`
- if you want your server stay always running\
  `npm run nodemon`

for yarn

- install packages\
  `yarn`
- run server\
  `yarn run start`
  or\
   `yarn start`
- if you want your server stay always running\
  `yarn run nodemon`
