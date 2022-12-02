var questions = {
    1: {
        title: "O que significa a sigla ONU ?",
        a: "Organização Nacional Unidas",
        b: "Ordem das Nações Unidas",
        c: "Organização de Normas Universais",
        d: "Organização Das Nações Unidas", /* Correct */
        e: "Ordens Naturais Unidas",
    },
    2: {
        title: "O Politeísmo é... ?",
        a: "A crença em várias divindades", /* Correct */
        b: "O ato de não crer em nada",
        c: "A crença em um único Deus",
        d: "A crença em falsas divindades",
        e: "O ato de crer mas não seguir",
    },
    3: {
        title: "Todo número elevado a expoente zero(0) é igual á ?",
        a: "Zero - (0)", 
        b: "Igual á ele mesmo",
        c: "Igual a seu dobro",
        d: "Um - (1)", /* Correct */
        e: "Cem - (100)",
    },
    4: {
        title: "Qual o menor país do mundo ?",
        a: "Singapura",
        b: "Maldivas",
        c: "Vaticano", /* Correct */
        d: "Mônaco",
        e: "Alemanha",
    },
    5: {
        title: "Em que ano começou a segunda guerra Mundial ?",
        a: "1939", /* Correct */
        b: "1945",
        c: "1940",
        d: "1941",
        e: "1943.",
    },
    6: {
        title: "'Penso, logo existo' foi uma frase dita por qual filósofo?",
        a: "Platão",
        b: "Aristóteles",
        c: "Sócrates",
        d: "René Descartes", /* Correct */
        e: "Immanuel Kant",
    },
    7: {
        title: "Quantos centímetros tem um quilômetro?",
        a: "1.000",
        b: "100",
        c: "10.000",
        d: "100.000", /* Correct */
        e: "1.100",
    },
    8: {
        title: "Como John Locke foi considerado ?",
        a: "O grande musicista",
        b: "Defensor do ideias relevantes",
        c: "Pai do iluminismo",  /* Correct */
        d: "Mestre do Pós-impressionismo",
        e: "Pai dos ideias originais",
    },
    9: {
        title: "Qual é a capital dos Estados Unidos ?",
        a: "Chicago",
        b: "Washington, D.C.", /* Correct */
        c: "New York",
        d: "Los Angeles",
        e: "Seattle",
    },
    10: {
        title: "É exemplo de tecido muscular estriado cardíaco ?",
        a: "Braço",
        b: "Perna",
        c: "Coração", /* Correct */
        d: "Mandíbula",
        e: "Pescoço",
    },
    11: {
        title: "Quantas seleções participam da Copa de 2022 ?",
        a: "32", /* Correct */
        b: "34",
        c: "30",
        d: "28",
        e: "23",
    },
    12: {
        title: "Qual o planeta mais longe do Sol ?",
        a: "Plutão",
        b: "Saturno",
        c: "Netuno", /* Correct */
        d: "Marte",
        e: "Mercúrio",
    },
    13: {
        title: "Planeta com menor gravidade ?",
        a: "Mercúrio", /* Correct */
        b: "Netuno",
        c: "Saturno",
        d: "Terra",
        e: "N.D.A",
    },
    14: {
        title: "Qual o maior oceano da Terra ?",
        a: "Pacífico", /* Correct */
        b: "Índico",
        c: "Atlântico",
        d: "Ártico",
        e: "N.D.A",
    },
    15: {
        title: "Qual país inventou o sorvete ?",
        a: "Áustria", 
        b: "China", /* Correct */
        c: "Peru",
        d: "Itália",
        e: "Estados Unidos",
    },
    16: {
        title: "Quem foi a única pessoa na história a receber o Prêmio Nobel em áreas científicas distintas ?",
        a: "Nikola Tesla",
        b: "Marie Curie", /* Correct */
        c: "Mahatma Gandhi",
        d: "Albert Einstein",
        e: "Thomas Edison",
    },
};

// Res question corrects
var resSystem = ['Start','d','a','d','c','a','d','d','c','b','c','a','c','a','a','b'];


// Info Tecs
var resUser = [];
var numberQuestion = 1;
var tokenStart = 0;

// Qtd question
var qtdQuestion = 16;

// Value Start
var start = false;

// Res Question
var correct = 0;
var failed = 0;

while(start == false) {
    start = window.confirm("Start");
    if(start != false) {
        optionsBtn('Start');
    };
};

function optionsBtn(letter) {
    tokenStart = 1;
    hiddenShoqQuestion(tokenStart);

    // Add Res
    resUser.push(letter);
    // Print Res (tests)
    console.log(resUser);

    if(numberQuestion > qtdQuestion) {
        tokenStart = 2;
        hiddenShoqQuestion(tokenStart);
    } else {

        // Verify Correct
        if(letter == resSystem[numberQuestion - 1]) {
            correct++;
        } else {
            failed++;
        };

        renderQuestion(numberQuestion);
        numberQuestion++;
    };
};

function renderQuestion(codeQuestion) {
    
    let titleReq = document.querySelector("#question");
    let questionA = document.querySelector("#question1");
    let questionB = document.querySelector("#question2");
    let questionC = document.querySelector("#question3");
    let questionD = document.querySelector("#question4");
    let questionE = document.querySelector("#question5");

    titleReq.innerHTML = questions[codeQuestion].title;
    questionA.innerHTML = questions[codeQuestion].a;
    questionB.innerHTML = questions[codeQuestion].b;
    questionC.innerHTML = questions[codeQuestion].c;
    questionD.innerHTML = questions[codeQuestion].d;
    questionE.innerHTML = questions[codeQuestion].e;

    // Count DOM question
    document.querySelector('.number_question').innerHTML = `${codeQuestion}/16`;

};

function hiddenShoqQuestion(codeToken) {
    if(codeToken == 1) {
        document.querySelector(".questions__res").style.display = "block";
        document.querySelector("#question").style.display = "block";
    };
    if(codeToken == 2) {
        console.log(codeToken)
        document.querySelector(".questions__res").style.display = "none";

        countPoints();

    };
};

function countPoints() {
    document.querySelector('#question').innerHTML = `Acertos: ${correct} | Erros: ${failed}`;
    document.querySelector('.number_question').style.display = 'none';
};