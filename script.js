function wordAndDefinition(word, definition) {
    this.word = word;
    this.definition = definition;
};

var tabIT = [new wordAndDefinition('abort', 'przerwij'), new wordAndDefinition('accept', 'akceptuj'), new wordAndDefinition('access', 'dostęp'), new wordAndDefinition('accomplish', 'osiągać, wykonywać'), new wordAndDefinition('accordion', 'akordeon, harmonijka, harmonijkowy'), new wordAndDefinition('add', 'dodaj'), new wordAndDefinition('alias', 'pseudonim, ksywka, przydomek'), new wordAndDefinition('all files (*.*)', 'wszystkie pliki (*.*)'), new wordAndDefinition('anticipate', 'przewidywać, przyspieszać'), new wordAndDefinition('aperture', 'otwór, szczelina, szpara'), new wordAndDefinition('append', 'dodać, dołączyć'), new wordAndDefinition('apply', 'zastosuj'), new wordAndDefinition('as', 'jako'), new wordAndDefinition('asterisk', 'gwiazdka'), new wordAndDefinition('attach', 'przyłączyć'), new wordAndDefinition('background', 'tło'), new wordAndDefinition('backup', 'kopia zapasowa'), new wordAndDefinition('bad', 'zły, uszkodzony'), new wordAndDefinition('bar', 'pasek; słupek'), new wordAndDefinition('between', 'pomiędzy'), new wordAndDefinition('bin', 'pojemnik'), new wordAndDefinition('bitmap', 'mapa bitowa'), new wordAndDefinition('blink', 'miganie'), new wordAndDefinition('bold italic', 'pogrubiona kursywa'), new wordAndDefinition('bottom', 'dół'), new wordAndDefinition('braces', 'nawiasy {}'), new wordAndDefinition('breadcrumb', 'okruszek'), new wordAndDefinition('break', 'przerwij'), new wordAndDefinition('browse', 'przeglądaj'), new wordAndDefinition('bus', 'magistrala'), new wordAndDefinition('busy', 'zajęty'), new wordAndDefinition('buttons', 'przyciski'), new wordAndDefinition('cancel', 'anuluj'), new wordAndDefinition('center', 'środek'), new wordAndDefinition('change', 'zmień'), new wordAndDefinition('chart', 'wykres'), new wordAndDefinition('chat', 'rozmowa'), new wordAndDefinition('check box', 'pole wyboru'), new wordAndDefinition('choose', 'wybierz'), new wordAndDefinition('clear', 'wyczyść'), new wordAndDefinition('clipboard', 'schowek'), new wordAndDefinition('close', 'zamknij'), new wordAndDefinition('collapse', 'runąć, zwalać się, załamywać się, opadać z sił'), new wordAndDefinition('command', 'polecenie'), new wordAndDefinition('comment', 'komentarz'), new wordAndDefinition('confirm', 'potwierdź'), new wordAndDefinition('confirmation', 'potwierdzenie'), new wordAndDefinition('connect', 'połącz, podłącz'), new wordAndDefinition('conscious', 'świadomy'), new wordAndDefinition('contents', 'spis treści'), new wordAndDefinition('control panel', 'panel sterowania'), new wordAndDefinition('copies', 'liczba kopii'), new wordAndDefinition('copy', 'kopiuj'), new wordAndDefinition('counterintuitive', 'przeciwny, sprzeczne z intuicją '), new wordAndDefinition('create', 'utwórz'), new wordAndDefinition('critical', 'krytyczny, decydujący, rozstrzygający'), new wordAndDefinition('cumbersome', 'niewygodny, nieporęczny, nieefektywny'), new wordAndDefinition('currency', 'waluta'), new wordAndDefinition('current', 'bieżący'), new wordAndDefinition('cut', 'wytnij'), new wordAndDefinition('data', 'dane'), new wordAndDefinition('date', 'data'), new wordAndDefinition('default', 'domyślny'), new wordAndDefinition('delete', 'usuń'), new wordAndDefinition('demote', 'degradować '), new wordAndDefinition('desire', 'pragnienie, pragnąć'), new wordAndDefinition('desktop', 'pulpit'), new wordAndDefinition('device', 'urządzenie'), new wordAndDefinition('dial', 'wybierz numer'), new wordAndDefinition('directory', 'katalog'), new wordAndDefinition('disable', 'wyłącz'), new wordAndDefinition('discard', 'wyrzucać, pozbywać się, odrzucać, zarzucać'), new wordAndDefinition('disconnect', 'rozłącz'), new wordAndDefinition('display', 'wyświetl'), new wordAndDefinition('dos prompt', 'tryb dos, znak zgłoszenia'), new wordAndDefinition('down', 'w dół'), new wordAndDefinition('driver', 'sterownik'), new wordAndDefinition('edit', 'edytuj'), new wordAndDefinition('edit', 'edycja'), new wordAndDefinition('empty', 'pusty'), new wordAndDefinition('emulate', 'naśladować'), new wordAndDefinition('enable', 'włącz'), new wordAndDefinition('end', 'koniec'), new wordAndDefinition('enter', 'wprowadź; wpisz; zawartość'), new wordAndDefinition('evolve', 'ewoluować, rozwijać (się), przekształcać '), new wordAndDefinition('exaggeration', 'przesada, wyolbrzymienie'), new wordAndDefinition('example', 'przykład'), new wordAndDefinition('exception', 'wyjątek'), new wordAndDefinition('exclamation', 'wykrzyknik'), new wordAndDefinition('exit', 'zakończ'), new wordAndDefinition('explorer', 'eksplorator'), new wordAndDefinition('extension', 'rozszerzenie, zasięg'), new wordAndDefinition('failure', 'awaria, błąd'), new wordAndDefinition('file', 'plik'), new wordAndDefinition('find', 'znajdź'), new wordAndDefinition('finish', 'zakończ'), new wordAndDefinition('first', 'pierwszy'), new wordAndDefinition('flip', 'przerzucać, kartkować, zmieniać położenie, zwariować'), new wordAndDefinition('floppy disk', 'dyskietka'), new wordAndDefinition('font', 'czcionka'), new wordAndDefinition('free', 'wolne'), new wordAndDefinition('full', 'pełny'), new wordAndDefinition('hard disk', 'dysk twardy'), new wordAndDefinition('hardware', 'sprzęt'), new wordAndDefinition('header', 'nagłówek'), new wordAndDefinition('hidden', 'ukryte'), new wordAndDefinition('host', 'komputer główny'), new wordAndDefinition('hype', 'szum medialny, przesadna reklama'), new wordAndDefinition('ignore', 'ignoruj'), new wordAndDefinition('image', 'obraz'), new wordAndDefinition('inbound', 'przychodzące'), new wordAndDefinition('incorrect', 'nieprawidłowy'), new wordAndDefinition('insert', 'wstaw'), new wordAndDefinition('invalid', 'niewłaściwy; niepoprawny'), new wordAndDefinition('join', 'łączyć'), new wordAndDefinition('keyboard', 'klawiatura'), new wordAndDefinition('label', 'etykieta'), new wordAndDefinition('last', 'ostatnie'), new wordAndDefinition('left', 'lewy'), new wordAndDefinition('length', 'długość'), new wordAndDefinition('likelihood', 'możliwość, prawdopodobieństwo'), new wordAndDefinition('line', 'wiersz'), new wordAndDefinition('link', 'łączenie, łączyć, łącze'), new wordAndDefinition('load', 'załaduj'), new wordAndDefinition('lock', 'zablokuj'), new wordAndDefinition('logon/off', 'zaloguj się/wyloguj się'), new wordAndDefinition('low', 'niski'), new wordAndDefinition('mail', 'poczta'), new wordAndDefinition('mailbox', 'skrzynka pocztowa'), new wordAndDefinition('main', 'główny'), new wordAndDefinition('majority', 'większość'), new wordAndDefinition('master', 'główny'), new wordAndDefinition('master', 'poznać, opanować, nabyć, mistrz'), new wordAndDefinition('memory', 'pamięć'), new wordAndDefinition('menu bar', 'pasek menu'), new wordAndDefinition('misconception', 'nieporozumienie, błąd, przesąd'), new wordAndDefinition('mode', 'rodzaj, tryb, moda, sposób, tonacja'), new wordAndDefinition('mode', 'tryb'), new wordAndDefinition('modify', 'modyfikuj'), new wordAndDefinition('more', 'więcej'), new wordAndDefinition('mouse', 'mysz'), new wordAndDefinition('move', 'przenieś'), new wordAndDefinition('name', 'nazwa'), new wordAndDefinition('nefarious', 'nikczemny, niegodziwy, niemoralny'), new wordAndDefinition('network', 'sieć'), new wordAndDefinition('new', 'nowy'), new wordAndDefinition('next', 'następny'), new wordAndDefinition('nifty', 'sprytny, szykowny, wspaniały, świetny, ekstra'), new wordAndDefinition('nitty-gritty', 'zasadniczy, konkretny'), new wordAndDefinition('novice', 'nowicjusz'), new wordAndDefinition('nudge', 'namawianie, przekonywanie, trącanie łokciem '), new wordAndDefinition('number', 'liczba'), new wordAndDefinition('obfuscation', 'zaćmienie, zaciemnienie'), new wordAndDefinition('on', 'włącz'), new wordAndDefinition('open', 'otwórz'), new wordAndDefinition('options', 'opcje'), new wordAndDefinition('OS', 'OS (system operacyjny)'), new wordAndDefinition('other', 'inne'), new wordAndDefinition('out of memory', 'brak pamięci'), new wordAndDefinition('out of paper', 'brak papieru'), new wordAndDefinition('oversimplification', 'uproszczenie'), new wordAndDefinition('page', 'strona'), new wordAndDefinition('paper', 'papier'), new wordAndDefinition('paragraph', 'akapit'), new wordAndDefinition('password', 'hasło'), new wordAndDefinition('paste', 'wklej'), new wordAndDefinition('path', 'ścieżka'), new wordAndDefinition('picky', 'grymaśny, wybredny, kapryśny'), new wordAndDefinition('preview', 'podgląd'), new wordAndDefinition('previous', 'poprzedni'), new wordAndDefinition('print', 'drukuj'), new wordAndDefinition('printer', 'drukarka'), new wordAndDefinition('processing', 'przetwarzanie'), new wordAndDefinition('property', 'właściwość'), new wordAndDefinition('qualm', 'nudności, niepokój sumienia, wątpliwości'), new wordAndDefinition('query builder', 'budowniczy zapytań'), new wordAndDefinition('question', 'pytanie'), new wordAndDefinition('quit', 'opuść'), new wordAndDefinition('read-only', 'tylko do odczytu'), new wordAndDefinition('ready', 'gotów'), new wordAndDefinition('refresh', 'odśwież'), new wordAndDefinition('regardless', 'bez względu (na), niezależnie (od), pomimo tego, nie licząc się (z)'), new wordAndDefinition('remote', 'zdalny, odległy'), new wordAndDefinition('remove', 'usuń'), new wordAndDefinition('render', 'wydawać, wykonywać, składać, przedstawiać, zinterpretować'), new wordAndDefinition('replace', 'zamień'), new wordAndDefinition('resizable', 'możliwość zmiany rozmiaru'), new wordAndDefinition('retry', 'ponów próbę'), new wordAndDefinition('revamp', 'reorganizować, usprawniać, ulepszać'), new wordAndDefinition('right', 'prawy'), new wordAndDefinition('root directory', 'katalog główny'), new wordAndDefinition('rotate', 'obróć'), new wordAndDefinition('run', 'uruchom'), new wordAndDefinition('save', 'zapisz'), new wordAndDefinition('save as', 'zapisz jako'), new wordAndDefinition('scroll', 'przewiń'), new wordAndDefinition('search', 'szukaj'), new wordAndDefinition('select', 'wybierz'), new wordAndDefinition('serial mouse', 'mysz szeregowa')];

var tabAnswer = ["A", "B", "C", "D"];
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

function loadFirstImage() {
    $("#animation").html('<div id="people" style="background: white url(img1.png) no-repeat center bottom;  background-size: auto 90%; height: 250px;"></div>');
    $("#people").fadeIn(1000);
    setTimeout("changeImg()", 1500);

}

function changeImg() {
    $("#animation").html('<div id="people" style="background: white url(img2.png) no-repeat center bottom;  background-size: auto 90%; height: 250px;"></div>');
    $("#people").fadeIn(1000);

}

function start() {
    copyArray = tabIT.slice(0);
    score = 0;
    wrongAnswer = 0;
    life = 3;

    $("section").html('<div id="info"><div><strong>Kategoria: IT</strong></div><div id="life">Życia: <span id="lifeData"> &#10084; &#10084; &#10084;</span></div><div id="score"><img src="goodImg.png"><span id="scoreData"></span><img src="wrongImg.png"><span id="wrongData"></span></div><div id="remainedWords">Pozostało: <span id="remainedData"></span></div></div><div id="board"><label id="word"></label><div class="button" id="answerA" onclick="sprawdz(&#34;A&#34;)"></div><div class="button" id="answerB" onclick="sprawdz(&#34;B&#34;)"></div><div class="button" id="answerC" onclick="sprawdz(&#34;C&#34;)"></div><div class="button" id="answerD" onclick="sprawdz(&#34;D&#34;)"></div></div>');
    $("#scoreData").html(score);
    $("#wrongData").html(wrongAnswer);
    $("#remainedData").html(copyArray.length);
    losuj();
}

function losuj() {
    index = Math.round(Math.random() * (copyArray.length - 1));
    var wylosowaneSlowko = copyArray[index];

    goodAnswer = losujAnswer();
    if (goodAnswer == "A") {
        answerA = wylosowaneSlowko.definition;
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
        answerB = wylosowaneSlowko.definition;
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
        answerC = wylosowaneSlowko.definition;
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
        answerD = wylosowaneSlowko.definition;
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
    $("#word").html(wylosowaneSlowko.word);
    $("#answerA").html(answerA);
    $("#answerB").html(answerB);
    $("#answerC").html(answerC);
    $("#answerD").html(answerD);

}

function losujAnswer() {
    return tabAnswer[Math.round(Math.random() * (tabAnswer.length - 1))];
}

function randomAnotherAnswer() {
    return tabIT[Math.round(Math.random() * (tabIT.length - 1))].definition;

}

function sprawdz(letter) {
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
    losuj();
}

function endLifes() {
    loseWav.play();
    $("section").html('<div id="endLifeEvent">Koniec żyć. :( <br>Twój wynik to: <span id="endInfo"><img src="goodImg.png"> &nbsp; ' + score + ' &nbsp; <img src="wrongImg.png"> &nbsp; ' + wrongAnswer + ' &nbsp; </span>Pozostało: ' + copyArray.length + '<br><span id="tryAgain" onclick="start()">Spróbuj ponownie</span></div>');

}

function endWords() {
    winWav.play();
    $("section").html('<div id="endLifeEvent">Brawo. Udzieliłeś/aś odpowiedzi na wszystkie zadania:) <br>Twój wynik to: <span id="endInfo"><img src="goodImg.png"> &nbsp; ' + score + ' &nbsp; <img src="wrongImg.png"> &nbsp; ' + wrongAnswer + ' &nbsp; </span><span id="tryAgain" onclick="start()">Spróbuj ponownie</span></div>');
}
