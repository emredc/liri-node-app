$('#start').on('click',function(){
    trivia.start();
});

$('#done').on('click', function(){
  trivia.done();
});


var questions=[
{
question:"What was the first successful vaccine developed in history?",
answer:["Scarlet Fever","Smallpox","Rabies","Cholera"],
correctAnswer:"Smallpox"
},
{
question:"In which language was the book 'War and Peace' originally written?",
answer:["English","Russian","German","French"],
correctAnswer:"Russian"
},
{
question:"Which of these cities is closest to London, UK?",
answer:["Atlanta","New York","Miami","Boston"],
correctAnswer:"Boston"
},
{
question:"Which mammal first reached Earth's orbit alive?",
answer:["Human","Cat","Dog","Monkey"],
correctAnswer:"Dog"
},
{
question:"What is the largest planet in our Solar System?",
answer:["Earth","Saturn","Pluto","Jupiter"],
correctAnswer:"Jupiter"
},
{
question:"What is the largest country, by area, that has only one time zone?",
answer:["Australia","Turkey","China","Russia"],
correctAnswer:"China"
},
{
question:"Which country hosted the Summer Olympics in 2016?",
answer:["Brazil","China","Greece","Spain"],
correctAnswer:"Brazil"
},
{
question:"Which of these NBA franchises has never signed LeBron James?",
answer:["Los Angeles Lakers","Miami Heat","Cleveland Cavaliers","Boston Celtics"],
correctAnswer:"Boston Celtics"
},
{
question:"Adele performed the theme song to which James Bond film?",
answer:["Casino Royal","Quantum Solace","Skyfall","From Russia with Love"],
correctAnswer:"Skyfall"
}
];
//Created a variable for correct,incorrect and timer
var trivia= {
correct: 0,
incorrect:0,
counter:100,
countdown: function (){
      Gamepad.counter--;
      $('#counter').html(trivia.counter);
      if(trivia.counter==0){
      console.log("Time's UP!");
      trivia.done();
      }
    },
    start: function(){
        timer=setInterval(trivia.countdown,1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id= "counter">100</span> Seconds</h2>');
        $('#start').on('click',function(){
            $('#start').remove();
           for(var i=0 ; i<question.length ; i++ ){
            $('#subwrapper').append('<h2>'+questions[i].question+'<h2>');
        for(var j=0; j<questions[i].answers.length; j++){
        $('#subwrapper').append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
        }
      }
    },

    done= function() {
//starts with 0,because of the array 
        $.each($("input[name='question-0']:checked"), function() {
          if ($(this).val() === questions[0].correctAnswer) {
            trivia.correct++;
          }
          else {
            trivia.incorrect++;
          }
        });
    
        $.each($("input[name='question-1']:checked"), function() {
          if ($(this).val() === questions[1].correctAnswer) {
            trivia.correct++;
          }
          else {
            trivia.incorrect++;
          }
        });
    
        $.each($("input[name='question-2']:checked"), function() {
          if ($(this).val() === questions[2].correctAnswer) {
            trivia.correct++;
          }
          else {
            trivia.incorrect++;
          }
        });
    
        $.each($("input[name='question-3']:checked"), function() {
          if ($(this).val() === questions[3].correctAnswer) {
            trivia.correct++;
          }
          else {
            trivia.incorrect++;
          }
        });
    
        $.each($("input[name='question-4']:checked"), function() {
          if ($(this).val() === questions[4].correctAnswer) {
            trivia.correct++;
          }
          else {
            trivia.incorrect++;
          }
        });
    
        $.each($("input[name='question-5']:checked"), function() {
          if ($(this).val() === questions[5].correctAnswer) {
            trivia.correct++;
          }
          else {
            trivia.incorrect++;
          }
        });
    
        $.each($("input[name='question-6']:checked"), function() {
          if ($(this).val() === questions[6].correctAnswer) {
            trivia.correct++;
          }
          else {
            trivia.incorrect++;
          }
        });
    
        $.each($("input[name='question-7']:checked"), function() {
          if ($(this).val() === questions[7].correctAnswer) {
            trivia.correct++;
          }
          else {
            trivia.incorrect++;
          }
        });

        $.each($("input[name='question-8']:checked"), function() {
            if ($(this).val() === questions[8].correctAnswer) {
            trivia.correct++;
            }
            else {
            trivia.incorrect++;
            }
        });

        $.each($("input[name='question-9']:checked"), function() {
            if ($(this).val() === questions[9].correctAnswer) {
                trivia.correct++;
            }
            else {
                trivia.incorrect++;
            }
            }); 

        $.each($("input[name='question-10']:checked"), function() {
            if ($(this).val() === questions[10].correctAnswer) {
                trivia.correct++;
            }
            else {
                trivia.incorrect++;
            }
            }); 


          })

        }
