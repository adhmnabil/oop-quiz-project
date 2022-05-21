function questions(text , choices ,answer){
    this.text = text
    this.choices = choices
    this.answer = answer
}

questions.prototype.correctAnswer = function(choice){
    return choice === this.answer
}

function quiz(question){
    this.score = 0
    this.question = question
    this.questionIndex = 0
}

quiz.prototype.getQuestionIndex = function(){
    return this.question[this.questionIndex]
}

quiz.prototype.isEnded = function(){
    return this.question.length === this.questionIndex
}

quiz.prototype.guess = function(answer){
    if(this.getQuestionIndex().correctAnswer(answer)){
        this.score++ 
    }
    this.questionIndex++
}

function pop(){
    if(quiz.isEnded()){
        showscore()
    }else{
        var element = document.getElementById("quies")
        element.innerHTML = quiz.getQuestionIndex().text

        // show choices
        var choicess = quiz.getQuestionIndex().choices
        for (let i = 0; i < choicess.length; i++) {
            var elements = document.getElementById('choice' + i) 
            elements.innerHTML = choicess[i]
            guesss("btn"+ i ,choicess[i] )
        }

        showprogress()
    }
}

function guesss(id , guesse) {

    var btnn = document.getElementById(id)
    btnn.onclick = function (){
        quiz.guess(guesse)
        pop()
    }
    
}

function showprogress() {
    var currentQues = quiz.questionIndex + 1
    let elment = document.getElementById('progress')
    elment.innerHTML = `question ${currentQues} of ${quiz.question.length}`
}

function  showscore(){
    var gameover = `<h1>Result</h1>`
    gameover += `<h2 id="score"> your score is ${quiz.score} </h2>`
    var elemente = document.getElementById("quiz")
    elemente.innerHTML = gameover
}

var question = [

    new questions('Which one not an OOP language?' , ['java','C#','C++','c'],'c'),
    new questions('Which language use to design web page?', ['html','jquery','css','xml'],'css'),
    new questions('There are _______ main components of OOP', ['1' ,'6','2','4'], '4'),
    new questions('which langauge is used for web app?' , ['php','python','js','all'],'all'),
    new questions('MVC is _____' , ['language','library','framework','all'],'framework'),
]




var quiz = new quiz(question)

pop()