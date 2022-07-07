const questions = [
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
    Legal Luís!
    
    Hoje você fez:
    ${answers[0]}
    
    Hoje você aprendeu:
    ${answers[1]}
    
    Isso lhe aborreceu:
    ${answers[2]}
    
    Você fez isso para melhorar:
    ${answers[3]}
    
    Isso lhe deixou feliz hoje:
    ${answers[4]}
    
    Volte amanhã para mais reflexões!`)
});