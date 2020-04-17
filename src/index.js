import readlineSync from 'readline-sync';

export function welcome() {
    console.log('Welcome to the Brain Games!');
}

export function askName() {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}`);
}



