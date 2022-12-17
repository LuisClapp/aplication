const questions = [
    "Qual o seu nome?",
    "O que fiz hoje?",
    "O que aprendi hoje?",
    "O que te deixou aborrecido hoje? Conte mais...",
    "O que poderia fazer para melhorar?",
    "O que me deixou feliz?",
];

const ask = (index = 0) => {
    process.stdout.write("\n" + questions[index] + " > ");
};

ask();

const answers = []
process.stdin.on("data", data =>{
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        console.log(answers)
        process.exit();
    };
});

process.on("exit", () => {
    console.log(`
    Legal ${answers[0]}!
    
    Hoje você fez:
    ${answers[1]}
    
    Hoje você aprendeu:
    ${answers[2]}
    
    Isso lhe aborreceu:
    ${answers[3]}
    
    Você fez isso para melhorar:
    ${answers[4]}
    
    Isso lhe deixou feliz hoje:
    ${answers[5]}
    
    Volte amanhã para mais reflexões!`)
});