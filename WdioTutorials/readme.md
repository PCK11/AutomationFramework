###install wdio
npm init wdio .

#package.json

check "type": "module",


tsconfig.json

check "module": "ESNext",
check  "resolveJsonModule": true,
check   "esModuleInterop": true,
change  "strict": false,


wdio.config.ts

tsConfigPath: './tsconfig.json',

check  specs: [
        // ToDo: define location for spec files here
        ${process.cwd()}/test/features/**/*.feature
    ],

check     require: ['./test/features/step-definations/*.ts'],
Joined