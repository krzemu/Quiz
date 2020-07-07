
let Question = [10];

let Answer1 = [10];
let Answer2 = [10];
let Answer3 = [10];
let Answer4 = [10];
let gAnswer = [10];



Question[0] = "Do którego klubu należał Harry Potter?";
Answer1[0] = "Hufflepuff";
Answer2[0] = "Gryffindor";
Answer3[0] = "Slyterin";
Answer4[0] = "Ravenclaw";
gAnswer[0] = 2;
Question[1] = "Jak nazywał się Hobbit, który musiał udać się do Mordoru?";
Answer1[1] = "Sam Gamgee";
Answer2[1] = "Balrog";
Answer3[1] = "Faramir";
Answer4[1] = "Frodo Baggins";
gAnswer[1] = 4;

Question[2] = "Jak wcześniej nazywał się Darth Vader?";
Answer1[2] = "Anakin Skywalker";
Answer2[2] = "Sheev Palpatine";
Answer3[2] = "Luke Skywalker";
Answer4[2] = "Kylo Ren"
gAnswer[2] = 1;

Question[3] = "Co jest ulubionym napojem Jacka Sparrowa?";
Answer1[3] = 'Wino';
Answer2[3] = "Rum";
Answer3[3] = "whisky";
Answer4[3] = "Szkocka";
gAnswer[3] = 2;

Question[4] = "Jak zginął dziadek Petera Parkera?";
Answer1[4] = "Zawał";
Answer2[4] = "Został zastrzelony";
Answer3[4] = "Wpadł pod samochód";
Answer4[4] = "Zginął w napadzie na bank";
gAnswer[4] = 2;

Question[5] = "Który tytuł to tytuł 4 części Harrego Pottera";
Answer1[5] = "Zakon Feniksa";
Answer2[5] = "Więzień Askabanu";
Answer3[5] = "Czara ognia";
Answer4[5] = "Kamień filozoficzny";
gAnswer[5] = 3;

Question[6] = "Jak nazywał się idol Arniego z 13 posterunku?";
Answer1[6] = "Robert Więckiewicz";
Answer2[6] = "Robert Downey Junior";
Answer3[6] = "Arnold Schwarzenegger";
Answer4[6] = "Bogusław Linda";
gAnswer[6] = 3;

Question[7] = "Jak nazywał się pies Obelisxa?";
Answer1[7] = "Kakofonix";
Answer2[7] = "Idefix";
Answer3[7] = "Mitonix";
Answer4[7] = "Zakonix"
gAnswer[7] = 2;

Question[8] = "Jak nazywał się główny bohater Batmana?";
Answer1[8] = "Bill Finger";
Answer2[8] = "Bruce Wayne";
Answer3[8] = "Bruce Finger";
Answer4[8] = "Bill Wayne";
gAnswer[8] = 2;

Question[9] = 'Ile części ma seria: "Piraci z Karaibów"?';
Answer1[9] = "3";
Answer2[9] = "4";
Answer3[9] = "5";
Answer4[9] = "6";
gAnswer[9] = 3;




const ansBox1 = document.getElementById("ansBox1");
const ansBox2 = document.getElementById("ansBox2");
const ansBox3 = document.getElementById("ansBox3");
const ansBox4 = document.getElementById("ansBox4");




let questionNumber = 0;
let lifes = 3;
let Score = 0;




let activated = true;

$(document).ready(function () {
    dataPrint(questionNumber);
    lifePrint(lifes);

    if (activated == true) {
        $('#ansBox1').click(function (e) { e.preventDefault(); answCheck(1); });
        $('#ansBox2').click(function (e) { e.preventDefault(); answCheck(2); });
        $('#ansBox3').click(function (e) { e.preventDefault(); answCheck(3); });
        $('#ansBox4').click(function (e) { e.preventDefault(); answCheck(4); });

    }

});


function lifePrint(lifes) {
    $('.heart').remove();
    for (let i = 0; i < lifes; i++) {
        $('.heartBar').append(' <div class="heart"></div>');
    }
}


function dataPrint(nr) {
    $('#Qnumber').html('Pytanie ' + (nr + 1));
    $('#question').html(Question[nr]);
    $('#ansBox1').html(Answer1[nr]);
    $('#ansBox2').html(Answer2[nr]);
    $('#ansBox3').html(Answer3[nr]);
    $('#ansBox4').html(Answer4[nr]);
}

function lifeLost(life) {

    $('.heart:nth-child(' + life + ')').addClass('heartOut');
    $('.heart:nth-child(' + life + ')').fadeOut(1000);
    life--;
    if (life == 0) {

        activated = false;
        setTimeout(function () {
            $('#Qnumber').html("Nie udało Ci się ukończyć Quizu");
            $('#question').html('Spróbuj jeszcze raz!')
            $('#showScore').html('<div class="buttonArea"><span ></span ><a href="Quiz.html"><div class="nextButton">Powrót</div></a></div > ');
        }, 1000);
    }
}

function answCheck(button) {
    if (gAnswer[questionNumber] == button && activated) {
        Score++;
        questionNumber++;
        if (Score > 9) {
            $('.heart').remove();
            $('#Qnumber').html("Gratulacje!!!");
            $('#question').html('Ukończyłeś nasz Quiz');
            $('#showScore').html('<div class="buttonArea"><span ></span ><a href="Quiz.html"><div class="nextButton">Powrót</div></a></div > ');
        }
        
        dataPrint(questionNumber);
    }
    else {
        lifeLost(lifes);
        lifes--;
    }
}