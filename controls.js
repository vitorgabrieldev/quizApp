var questions = {
    1: {
        title: "12 X 12 ?",
        a: "120",
        b: "144",
        c: "235",
        d: "98",
        e: "N.D.A.",
    },
    2: {
        title: "20 + 20 ?",
        a: "15",
        b: "24",
        c: "35",
        d: "40",
        e: "39",
    },
    3: {
        title: "30 / 2 ?",
        a: "15",
        b: "23",
        c: "34",
        d: "14",
        e: "12",
    },
    4: {
        title: "8 X 8 ?",
        a: "56",
        b: "82",
        c: "64",
        d: "12",
        e: "48",
    },
    5: {
        title: "12 X 12 ?",
        a: "120",
        b: "144",
        c: "235",
        d: "98",
        e: "N.D.A.",
    },
    6: {
        title: "20 + 20 ?",
        a: "15",
        b: "24",
        c: "35",
        d: "40",
        e: "39",
    },
    7: {
        title: "30 / 2 ?",
        a: "15",
        b: "23",
        c: "34",
        d: "14",
        e: "12",
    },
    8: {
        title: "8 X 8 ?",
        a: "56",
        b: "82",
        c: "64",
        d: "12",
        e: "48",
    },
    9: {
        title: "12 X 12 ?",
        a: "120",
        b: "144",
        c: "235",
        d: "98",
        e: "N.D.A.",
    },
    10: {
        title: "20 + 20 ?",
        a: "15",
        b: "24",
        c: "35",
        d: "40",
        e: "39",
    },
    11: {
        title: "30 / 2 ?",
        a: "15",
        b: "23",
        c: "34",
        d: "14",
        e: "12",
    },
    12: {
        title: "8 X 8 ?",
        a: "56",
        b: "82",
        c: "64",
        d: "12",
        e: "48",
    },
    13: {
        title: "12 X 12 ?",
        a: "120",
        b: "144",
        c: "235",
        d: "98",
        e: "N.D.A.",
    },
    14: {
        title: "20 + 20 ?",
        a: "15",
        b: "24",
        c: "35",
        d: "40",
        e: "39",
    },
    15: {
        title: "30 / 2 ?",
        a: "15",
        b: "23",
        c: "34",
        d: "14",
        e: "12",
    },
    16: {
        title: "8 X 8 ?",
        a: "56",
        b: "82",
        c: "64",
        d: "12",
        e: "48",
    },
};

var resUser = [];
var numberQuestion = 0;

function optionsBtn(letter) {

    // Add Res
    resUser.push(letter);

    console.log(resUser);

    numberQuestion++;

    renderQuestion(numberQuestion);

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

};