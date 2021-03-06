var arrayAllWords = [];
var arrayWrongAnswer = [];
var copyArray = [];
var arrayAnswer = ["A", "B", "C", "D"];
var goodAnswer = "";
var answerA = "";
var answerB = "";
var answerC = "";
var answerD = "";
var score;
var wrongAnswer;
var life;
var index;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
var winWav = new Audio("win.wav");
var loseWav = new Audio("lost.wav");
var categoryName;
var category;
var numberChooseWords;
document.getElementById("numbersOfWords").innerHTML = document.getElementById("myRange").value;

function changeSlider() {
    document.getElementById("numbersOfWords").innerHTML = document.getElementById("myRange").value;
    numberChooseWords = document.getElementById("myRange").value;
}

function wordAndDefinition(word, definition) {
    this.word = word;
    this.definition = definition;
};
// Initialize Firebase




function load(category) {
    showLoadingAnimation();
    numberChooseWords = document.getElementById("myRange").value;
    var config = {
        apiKey: "AIzaSyCNjL-encte1mx1ZTsJrGlgGStt2pm6qz0",
        authDomain: "zostane-programistka.firebaseapp.com",
        databaseURL: "https://zostane-programistka.firebaseio.com",
        projectId: "zostane-programistka",
        storageBucket: "zostane-programistka.appspot.com",
        messagingSenderId: "638068947472"
    };
    firebase.initializeApp(config);
    return new Promise(resolve => {
        firebase.database().ref(category).on("child_added", function (data) {
            var newWord = data.val();
            arrayAllWords.push(new wordAndDefinition(newWord.word, newWord.definition));
            resolve();

        });
    })
}
async function startFirst() {

    if (document.getElementById("selectCategory").value == "IT") {
        category = "ITWords/";
        categoryName = "IT";

    } else if (document.getElementById("selectCategory").value == "zycieCodzienne") {
        category = "Życie codzienne/";
        categoryName = "Życie codzienne";
    } else if (document.getElementById("selectCategory").value == "czlowiek") {
        category = "Człowiek/";
        categoryName = "Człowiek";
    } else if (document.getElementById("selectCategory").value == "emocjeIUczucia") {
        category = "Emocje i uczucia/";
        categoryName = "Emocje i uczucia";
    } else if (document.getElementById("selectCategory").value == "zdrowie") {
        category = "Zdrowie/";
        categoryName = "Zdrowie";
    } else if (document.getElementById("selectCategory").value == "kultura") {
        category = "Kultura/";
        categoryName = "Kultura";
    } else if (document.getElementById("selectCategory").value == "nauka") {
        category = "Nauka/";
        categoryName = "Nauka";
    } else if (document.getElementById("selectCategory").value == "cywilizacja") {
        category = "Cywilizacja/";
        categoryName = "Cywilizacja";
    }

    await load(category);
    play();



}

function play() {
    copyArray = arrayAllWords.slice(0);
    arrayWrongAnswer.length = 0;
    score = 0;
    wrongAnswer = 0;
    life = 3;


    $("section").html('<div id="info"><div><div style="text-align:center"><strong>Kategoria:<br>' + categoryName + '</strong></div><div id="life">Życia: <span id="lifeData"> &#10084; &#10084; &#10084;</span></div></div><div><div id="score"><img class="goodAnswerImg" src="goodImg.png"><span id="scoreData"></span><img class="wrongAnswerImg" src="wrongImg.png"><span id="wrongData"></span></div><div id="remainedWords">Pozostało: <span id="remainedData"></span></div></div></div><div id="board"><label id="word"></label><div class="button" id="answerA" onclick="check(&#34;A&#34;)"></div><div class="button" id="answerB" onclick="check(&#34;B&#34;)"></div><div class="button" id="answerC" onclick="check(&#34;C&#34;)"></div><div class="button" id="answerD" onclick="check(&#34;D&#34;)"></div></div>');
    $("#scoreData").html(score);
    $("#wrongData").html(wrongAnswer);
    $("#remainedData").html((numberChooseWords - score));
    randomWord();

}

function randomWord() {

    if (score + wrongAnswer >= numberChooseWords) {
        var chooseWord = arrayWrongAnswer[0];
    } else {
        index = Math.round(Math.random() * (copyArray.length - 1));
        var chooseWord = copyArray[index];
    }


    goodAnswer = randomAnswer();
    if (goodAnswer == "A") {
        answerA = chooseWord.definition;
    } else {
        answerA = randomAnotherAnswer();
    }
    if (goodAnswer == "B") {
        answerB = chooseWord.definition;
    } else {
        do {
            answerB = randomAnotherAnswer();
        }
        while (answerA == answerB);
    }
    if (goodAnswer == "C") {
        answerC = chooseWord.definition;
    } else {
        do {
            answerC = randomAnotherAnswer();
        }
        while (answerC == answerA || answerC == answerB);
    }
    if (goodAnswer == "D") {
        answerD = chooseWord.definition;
    } else {
        do {
            answerD = randomAnotherAnswer();
        }
        while (answerD == answerA || answerD == answerB || answerD == answerC);
    }

    $("#word").html(chooseWord.word);
    $("#answerA").html(answerA);
    $("#answerB").html(answerB);
    $("#answerC").html(answerC);
    $("#answerD").html(answerD);

}

function randomAnswer() {
    return arrayAnswer[Math.round(Math.random() * (arrayAnswer.length - 1))];
}

function randomAnotherAnswer() {
    return arrayAllWords[Math.round(Math.random() * (arrayAllWords.length - 1))].definition;

}

function check(letter) {
    if (letter == goodAnswer) {
        showImgAnswer("good");
        if (score + wrongAnswer >= numberChooseWords) {
            arrayWrongAnswer.splice(0, 1);
        } else {
            copyArray.splice(index, 1);
        }
        yes.play();
        score++;



    } else {
        showImgAnswer("wrong");
        no.play();
        if (score + wrongAnswer < numberChooseWords) {
            arrayWrongAnswer.push(copyArray[index]);
        }
        life--;
        wrongAnswer++;
        if (life == 1) {
            $("#lifeData").html("&#10084;");
        } else if (life == 2) {
            $("#lifeData").html("&#10084; &#10084;");
        } else if (life == 0) {
            endLifes();
        }

    }
    goodAnswer = "";
    answerA = "";
    answerB = "";
    answerC = "";
    answerD = "";
    if (life > 0) {
        $("#scoreData").html(score);
        $("#wrongData").html(wrongAnswer);
        $("#remainedData").html(numberChooseWords - score);
        if (score < numberChooseWords) {
            randomWord();
        } else {
            endWords();
        }
    }

}

function endLifes() {
    loseWav.play();

    $("section").html('<div id="endLifeEvent">Koniec żyć :( <br>Twój wynik to: <span id="endInfo"><img src="goodImg.png"> &nbsp; ' + score + ' &nbsp; <img src="wrongImg.png"> &nbsp; ' + wrongAnswer + ' &nbsp; </span>Pozostało: ' + (numberChooseWords - score) + '<br><span id="tryAgain" onclick="play()">Spróbuj ponownie</span></div>');

}

function endWords() {
    winWav.play();

    $("section").html('<div id="endLifeEvent">Brawo. Udzieliłeś/aś odpowiedzi na wszystkie zadania:) <br>Twój wynik to: <span id="endInfo"><img src="goodImg.png"> &nbsp; ' + score + ' &nbsp; <img src="wrongImg.png"> &nbsp; ' + wrongAnswer + ' &nbsp; </span><span id="tryAgain" onclick="play()">Spróbuj ponownie</span></div>');
}

function loadFirstImage() {
    $("#animation").html('<div id="people" style="background: white url(img1.png) no-repeat center bottom;  background-size: auto 35vh; height: 40vh;"></div>');
    $("#people").fadeIn(1000);
    setTimeout("changeImg()", 1500);

}

function changeImg() {
    $("#animation").html('<div id="people" style="background: white url(img2.png) no-repeat center bottom;  background-size: auto 35vh; height: 40vh;"></div>');
    $("#people").fadeIn(1000);

}

function showLoadingAnimation() {
    $("section").append('<div id="loadingAnimation"><div id="animation-background"></div><div id="loadingContainer"><div id="loading">Ładowanie<div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div></div></div></div>');
}

function showContactForm() {
    $("#contactForm").toggleClass("showContactForm");
    $("#logoMessage").toggleClass("arrowImage");
}

function showImgAnswer(e) {

    if (e == "good") {
        document.querySelector(".goodAnswerImg").classList.add("showImg");
    } else if (e == "wrong") {
        document.querySelector(".wrongAnswerImg").classList.add("showImg");
    }
    const imgs = document.querySelectorAll('img');
    imgs.forEach(img => img.addEventListener('transitionend', removeTransition));

}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('showImg');
}
