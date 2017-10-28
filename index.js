var arrayAllWords = [];
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

function wordAndDefinition(word, definition) {
    this.word = word;
    this.definition = definition;
};
// Initialize Firebase

var config = {
    apiKey: "AIzaSyCNjL-encte1mx1ZTsJrGlgGStt2pm6qz0",
    authDomain: "zostane-programistka.firebaseapp.com",
    databaseURL: "https://zostane-programistka.firebaseio.com",
    projectId: "zostane-programistka",
    storageBucket: "zostane-programistka.appspot.com",
    messagingSenderId: "638068947472"
};
firebase.initializeApp(config);

function load() {
    return new Promise(resolve => {
        firebase.database().ref("ITWords/").on("child_added", function (data) {
            var newWord = data.val();
            arrayAllWords.push(new wordAndDefinition(newWord.word, newWord.definition));
            resolve();
        });;
    })
}

async function startFirst() {
    await load();
    startIT();
}

function loadFirstImage() {
    $("#animation").html('<div id="people" style="background: white url(img1.png) no-repeat center bottom;  background-size: auto 90%; height: 250px;"></div>');
    $("#people").fadeIn(1000);
    setTimeout("changeImg()", 1500);

}

function changeImg() {
    $("#animation").html('<div id="people" style="background: white url(img2.png) no-repeat center bottom;  background-size: auto 90%; height: 250px;"></div>');
    $("#people").fadeIn(1000);

}

function startIT() {
    copyArray = arrayAllWords.slice(0);
    score = 0;
    wrongAnswer = 0;
    life = 3;

    $("section").html('<div id="info"><div><strong>Kategoria: IT</strong></div><div id="life">Życia: <span id="lifeData"> &#10084; &#10084; &#10084;</span></div><div id="score"><img src="goodImg.png"><span id="scoreData"></span><img src="wrongImg.png"><span id="wrongData"></span></div><div id="remainedWords">Pozostało: <span id="remainedData"></span></div></div><div id="board"><label id="word"></label><div class="button" id="answerA" onclick="check(&#34;A&#34;)"></div><div class="button" id="answerB" onclick="check(&#34;B&#34;)"></div><div class="button" id="answerC" onclick="check(&#34;C&#34;)"></div><div class="button" id="answerD" onclick="check(&#34;D&#34;)"></div></div>');
    $("#scoreData").html(score);
    $("#wrongData").html(wrongAnswer);
    $("#remainedData").html(copyArray.length);
    randomWord();

}

function randomWord() {
    index = Math.round(Math.random() * (copyArray.length - 1));
    var chooseWord = copyArray[index];

    goodAnswer = randomAnswer();
    if (goodAnswer == "A") {
        answerA = chooseWord.definition;
        for (; answerB == "" || answerB == answerA;) {
            answerB = randomAnotherAnswer();
        }
        for (; answerC == "" || answerC == answerA || answerC == answerB;) {
            answerC = randomAnotherAnswer();
        }
        for (; answerD == "" || answerD == answerA || answerD == answerB || answerD == answerC;) {
            answerD = randomAnotherAnswer();
        }


    } else if (goodAnswer == "B") {
        answerB = chooseWord.definition;
        for (; answerA == "" || answerA == answerB;) {
            answerA = randomAnotherAnswer();
        }
        for (; answerC == "" || answerC == answerA || answerC == answerB;) {
            answerC = randomAnotherAnswer();
        }
        for (; answerD == "" || answerD == answerA || answerD == answerB || answerD == answerC;) {
            answerD = randomAnotherAnswer();
        }

    } else if (goodAnswer == "C") {
        answerC = chooseWord.definition;
        for (; answerA == "" || answerA == answerC;) {
            answerA = randomAnotherAnswer();
        }
        for (; answerB == "" || answerB == answerA || answerB == answerC;) {
            answerB = randomAnotherAnswer();
        }
        for (; answerD == "" || answerD == answerA || answerD == answerB || answerD == answerC;) {
            answerD = randomAnotherAnswer();
        }

    } else if (goodAnswer == "D") {
        answerD = chooseWord.definition;
        for (; answerA == "" || answerA == answerD;) {
            answerA = randomAnotherAnswer();
        }
        for (; answerB == "" || answerB == answerA || answerB == answerD;) {
            answerB = randomAnotherAnswer();
        }
        for (; answerC == "" || answerC == answerA || answerC == answerB || answerC == answerD;) {
            answerC = randomAnotherAnswer();
        }


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
        yes.play();
        score++;
        copyArray.splice(index, 1);


    } else {
        no.play();
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
    $("#scoreData").html(score);
    $("#wrongData").html(wrongAnswer);
    $("#remainedData").html(copyArray.length);
    if (copyArray.length > 0) {
        randomWord();
    } else {
        endWords();
    }

}

function endLifes() {
    loseWav.play();
    $("section").html('<div id="endLifeEvent">Koniec żyć :( <br>Twój wynik to: <span id="endInfo"><img src="goodImg.png"> &nbsp; ' + score + ' &nbsp; <img src="wrongImg.png"> &nbsp; ' + wrongAnswer + ' &nbsp; </span>Pozostało: ' + copyArray.length + '<br><span id="tryAgain" onclick="startIT()">Spróbuj ponownie</span></div>');

}

function endWords() {
    winWav.play();
    $("section").html('<div id="endLifeEvent">Brawo. Udzieliłeś/aś odpowiedzi na wszystkie zadania:) <br>Twój wynik to: <span id="endInfo"><img src="goodImg.png"> &nbsp; ' + score + ' &nbsp; <img src="wrongImg.png"> &nbsp; ' + wrongAnswer + ' &nbsp; </span><span id="tryAgain" onclick="startIT()">Spróbuj ponownie</span></div>');
}
