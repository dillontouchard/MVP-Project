var currentQuestion = 0;
var triviaArr = [];
var incorrectAnswers = 0;
var correctAnswers = 0;
var dataObj = {
    name: '',
    gamescore: 0,
    incorrectscore: 0 
}
$.ajaxSetup({
    contentType: 'application/json',
});

//Get Sports Questions
$('#sports').on('click', function() {
    $.get('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple', (data) => {
        let questionsArr = data.results;
        for (let i = 0; i < questionsArr.length; i++) {
            if (questionsArr[i] === undefined || questionsArr[i] === null) {
                break;
            } else {
                triviaArr.push(questionsArr[i])
                $('#question').text(questionsArr[0].question)
                $('#correct').text(questionsArr[0].correct_answer)
                $('#incorrect0').text(questionsArr[0].incorrect_answers[0])
                $('#incorrect1').text(questionsArr[0].incorrect_answers[1])
                $('#incorrect2').text(questionsArr[0].incorrect_answers[2])
            }
        }
    })
});

//Get Geography Questions
$('#geography').on('click', function() {
    $.get('https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple', (data) => {
        let questionsArr = data.results;
        for (let i = 0; i < questionsArr.length; i++) {
            if (questionsArr[i] === undefined || questionsArr[i] === null) {
                break;
            } else {
                triviaArr.push(questionsArr[i])
                $('#question').text(questionsArr[0].question)
                $('#correct').text(questionsArr[0].correct_answer)
                $('#incorrect0').text(questionsArr[0].incorrect_answers[0])
                $('#incorrect1').text(questionsArr[0].incorrect_answers[1])
                $('#incorrect2').text(questionsArr[0].incorrect_answers[2])
            }
        }
    })
});

//Get History Questions
$('#history').on('click', function() {
    $.get('https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple', (data) => {
        console.log(data.results);
        let questionsArr = data.results;
        for (let i = 0; i < questionsArr.length; i++) {
            if (questionsArr[i] === undefined || questionsArr[i] === null) {
                break;
            } else {
                //console.log(questionsArr[i])
                triviaArr.push(questionsArr[i])
                console.log(triviaArr)
                $('#question').text(questionsArr[0].question)
                $('#correct').text(questionsArr[0].correct_answer)
                $('#incorrect0').text(questionsArr[0].incorrect_answers[0])
                $('#incorrect1').text(questionsArr[0].incorrect_answers[1])
                $('#incorrect2').text(questionsArr[0].incorrect_answers[2])
            }  
        }
    })
});

//Get Mythology Questions
$('#mythology').on('click', function() {
    $.get('https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple', (data) => {
        let questionsArr = data.results;
        for (let i = 0; i < questionsArr.length; i++) {
            if (questionsArr[i] === undefined || questionsArr[i] === null) {
                break;
            } else {
                triviaArr.push(questionsArr[i])
                $('#question').text(questionsArr[0].question)
                $('#correct').text(questionsArr[0].correct_answer)
                $('#incorrect0').text(questionsArr[0].incorrect_answers[0])
                $('#incorrect1').text(questionsArr[0].incorrect_answers[1])
                $('#incorrect2').text(questionsArr[0].incorrect_answers[2])
            }
        }
    })
});

//Get Politics Questions
$('#animals').on('click', function() {
    $.get('https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple', (data) => {
        let questionsArr = data.results;
        for (let i = 0; i < questionsArr.length; i++) {
            if (questionsArr[i] === undefined || questionsArr[i] === null) {
                break;
            } else {
                triviaArr.push(questionsArr[i])
                $('#question').text(questionsArr[0].question)
                $('#correct').text(questionsArr[0].correct_answer)
                $('#incorrect0').text(questionsArr[0].incorrect_answers[0])
                $('#incorrect1').text(questionsArr[0].incorrect_answers[1])
                $('#incorrect2').text(questionsArr[0].incorrect_answers[2])
            }
        }
    })
});

//Event Listeners For Multiple Choice
$('#correct').on('click', function() {
    correctAnswers += 1;
    correctPopup();
});
$('#incorrect0').on('click', function() {
    incorrectAnswers += 1;
    incorrectPopup();
});
$('#incorrect1').on('click', function() {
    incorrectAnswers += 1;
    incorrectPopup();
});
$('#incorrect2').on('click', function() {
    incorrectAnswers += 1;
    incorrectPopup();
});

//Next Question Event Listener
$('#next').on('click', function() {
    currentQuestion += 1;
    console.log(currentQuestion);
        if (currentQuestion === 1) {
            $('#question').text(triviaArr[1].question)
            $('#correct').text(triviaArr[1].correct_answer)
            $('#incorrect0').text(triviaArr[1].incorrect_answers[0])
            $('#incorrect1').text(triviaArr[1].incorrect_answers[1])
            $('#incorrect2').text(triviaArr[1].incorrect_answers[2])
        } else if (currentQuestion === 2) {
            $('#question').text(triviaArr[2].question)
            $('#correct').text(triviaArr[2].correct_answer)
            $('#incorrect0').text(triviaArr[2].incorrect_answers[0])
            $('#incorrect1').text(triviaArr[2].incorrect_answers[1])
            $('#incorrect2').text(triviaArr[2].incorrect_answers[2])
        } else if (currentQuestion === 3) {
            $('#question').text(triviaArr[3].question)
            $('#correct').text(triviaArr[3].correct_answer)
            $('#incorrect0').text(triviaArr[3].incorrect_answers[0])
            $('#incorrect1').text(triviaArr[3].incorrect_answers[1])
            $('#incorrect2').text(triviaArr[3].incorrect_answers[2])
        } else if (currentQuestion === 4) {
            $('#question').text(triviaArr[4].question)
            $('#correct').text(triviaArr[4].correct_answer)
            $('#incorrect0').text(triviaArr[4].incorrect_answers[0])
            $('#incorrect1').text(triviaArr[4].incorrect_answers[1])
            $('#incorrect2').text(triviaArr[4].incorrect_answers[2])
        } else if (currentQuestion === 5) {
            $('#question').text(triviaArr[5].question)
            $('#correct').text(triviaArr[5].correct_answer)
            $('#incorrect0').text(triviaArr[5].incorrect_answers[0])
            $('#incorrect1').text(triviaArr[5].incorrect_answers[1])
            $('#incorrect2').text(triviaArr[5].incorrect_answers[2])
        } else if (currentQuestion === 6) {
            $('#question').text(triviaArr[6].question)
            $('#correct').text(triviaArr[6].correct_answer)
            $('#incorrect0').text(triviaArr[6].incorrect_answers[0])
            $('#incorrect1').text(triviaArr[6].incorrect_answers[1])
            $('#incorrect2').text(triviaArr[6].incorrect_answers[2])
        } else if (currentQuestion === 7) {
            $('#question').text(triviaArr[7].question)
            $('#correct').text(triviaArr[7].correct_answer)
            $('#incorrect0').text(triviaArr[7].incorrect_answers[0])
            $('#incorrect1').text(triviaArr[7].incorrect_answers[1])
            $('#incorrect2').text(triviaArr[7].incorrect_answers[2])
        } else if (currentQuestion === 8) {
            $('#question').text(triviaArr[8].question)
            $('#correct').text(triviaArr[8].correct_answer)
            $('#incorrect0').text(triviaArr[8].incorrect_answers[0])
            $('#incorrect1').text(triviaArr[8].incorrect_answers[1])
            $('#incorrect2').text(triviaArr[8].incorrect_answers[2])
        } else if (currentQuestion === 9) {
            $('#question').text(triviaArr[9].question)
            $('#correct').text(triviaArr[9].correct_answer)
            $('#incorrect0').text(triviaArr[9].incorrect_answers[0])
            $('#incorrect1').text(triviaArr[9].incorrect_answers[1])
            $('#incorrect2').text(triviaArr[9].incorrect_answers[2])
        } else if (currentQuestion === 10) {
            currentQuestion = 0;
            displayModal();
        }
});

//Display Modal Function
function displayModal() {
    document.getElementById('overlay').style.display = 'flex';
}
//Submit Username with score
function submitUsername() {
    const username = document.getElementById('usernameInput').value;
    
    if (username) {
      alert(`Nice Job! You had ${incorrectAnswers} incorrect responses before getting the 10 correct responses! Click OK and select a new category to play again!`);
      document.getElementById('overlay').style.display = 'none';
      dataObj.name = username;
      dataObj.gamescore = correctAnswers;
      dataObj.incorrectscore = incorrectAnswers;
      console.log(dataObj);
      $.post('http://localhost:8000/trivia', JSON.stringify(dataObj), function(data) {
        console.log('POST Request Response:', data);
      });
    } else {
      alert("Please enter a username.");
    }

}
//Popups for correct or incorrect guesses
function correctPopup() {
    let popup = document.getElementById("correctPopup");
    popup.classList.toggle("show");
    setTimeout(function() {
        popup.classList.toggle("show")
    }, 2000); 
}
function incorrectPopup() {
    let popup = document.getElementById("incorrectPopup");
    popup.classList.toggle("show");
    setTimeout(function() {
        popup.classList.toggle("show")
    }, 2000); 
}