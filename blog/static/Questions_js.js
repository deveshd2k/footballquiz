var allQuestions = [
  {
    question:"Which of among is the richest football club?",
    choices:["Bayern Munich","Manchester United","Chelsea","Juventus"],
    answer:1
  },
  {
    question:"Which country has won the World Cup the most times?",
    choices:["Brazil","Germany","Italy","France"],
    answer:0
  },
  {
    question:"Record for most number of goals in a season calendar belong to:",
    choices:["Cristiano Ronaldo","Wayne Rooney","Lionel Messi","Harry Kane"],
    answer:2
  },
  {
    question:"In which country is Soccer City Stadium situated?",
    choices:["Spain","South Africa","Brazil","England"],
    answer:1
  },
  {
    question:"2026 FIFA World Cup will take place in which continent?",
    choices:["Africa","Europe","South America","North America"],
    answer:3
  },
  {
    question:"Which team has been in the top English league for longer than any other?",
    choices:["Chelsea","Manchester United","Arsenal","Liverpool"],
    answer:2
  },
  {
    question:"Which of the following club's motto is 'Més que un club' ?",
    choices:["Real Madrid","FC Barcelona","Real Betis","RCD Espanyol"],
    answer:1
  },
  {
    question:"Which European football team has the following club badge?",
    choices:["Spain","Switzerland","Poland","Portugal"],
    answer:3
  },
  {
    question:"Identify the football personality:",
    choices:["Joel Matip","Ragnar Klavan","Oleksandr Zinchenko","Aleksandr Golovin"],
    answer:1
  },
  {
    question:"Who once said: 'Football is a simple game. Twenty-two men chase a ball for 90 minutes and at the end, the Germans always win.'?",
    choices:["Alan Shearer","Michael Owen","Gary Neville","Gary Lineker"],
    answer:3
  },
  {
    question:"Who was voted the European Player of the Century in 1999?",
    choices:["Johann Cruyffe","Franz Beckenbauer","Michel Platini","Ferenc Puskás"],
    answer:0
  },
  {
    question:"Which club did Sir Alex Ferguson call 'a small club, with a small mentality' in 2009?",
    choices:["Arsenal","Manchester City","Liverpool","Chelsea"],
    answer:1
  },
  {
    question:"Identify the club:",
    choices:["RCD Mallorca","Real Sociedad","UD Las Palmas","Getafe CF"],
    answer:0
  },
  {
    question:"Player with most Premier League appearences:",
    choices:["Frank Lampard","Ryan Giggs","Gareth Barry","David James"],
    answer:2
  },
  {
    question:"Who is the only goalkeeper to have won Ballon d'Or?",
    choices:["Gianluigi Buffon","David Seaman","Lev Yashin","Oliver Kahn"],
    answer:2
  },
  {
    question:"Who was the official mascot for 2010 FIFA World Cup?",
    choices:["Fuleco","Zabivaka","Kinas","Zakumi"],
    answer:3
  },
  {
    question:"Jurgen Klopp spent almost his entire playing career at which German club, before becoming their longest-serving manager?",
    choices:["Mainz 05","Borussia Dortmund","Eintracht Frankfurt","Hoffenheim"],
    answer:0
  },
  {
    question:"Who was the first footballer to win the FIFA World Cup both as a player and a manager?",
    choices:["Franz Beckenbauer","Mário Zagallo","Daniel Passarella","Jack Charlton"],
    answer:1
  },
  {
    question:"From which club did Zinedine Zidane started his professional football career?",
    choices:["Bordeaux","Juventus","Marseille","Cannes"],
    answer:3
  },
  {
    question:"Who is the only Scottish player to have been named European Footballer of the Year?",
    choices:["Ally McCoist","Kenny Dalglish","Denis Law","John Greig"],
    answer:2
  }
];
var score=0;
var ques_no=2;

var downloadTimer;
function startTimer(){
var timeleft = 16;
downloadTimer = setInterval(function(){
timeleft--;
document.getElementById("timer").textContent = timeleft;
if(timeleft <= 0)
   {clearInterval(downloadTimer);
     $("#body-duplicate").show().html("Your final score is:  "+score+"/20");
     $("#final-score").html("Oops! Time over.");
     $("#overModal").modal();
     $("#scores").val(score);
     window.onbeforeunload = null;
     $(function(){
      $.ajax({
        type:"POST",
        url:'kickoff',
        data:{'scores':score},
        success:function(){
          console.log("score is " + score);
        }
      });
    });
   }
},1000);}
function stopTimer(){
  clearInterval(downloadTimer);
}
function nextQuestion() {
    $("#img").show();
    startTimer();
    for(var i=1;i<5;i++){
    document.getElementById('choice'+i).checked = false;
    document.getElementById('choice'+i).disabled = false;
    document.getElementById('label'+i).style.color="white";}
    document.getElementById("question").innerHTML= allQuestions[ques_no-1].question;
    for(var i=1;i<5;i++)
    {
      var $label = $('input[id=choice'+i+']').next();
      $label.text(allQuestions[ques_no-1].choices[i-1]);
    }
    if(ques_no == 4 || ques_no == 8 || ques_no == 9 || ques_no == 13 || ques_no == 16)
    {
      if(ques_no == 4)
      {
        document.getElementById("img").style.display="block";
        document.getElementById("img").style.backgroundImage="url('/static/images/soccercity.jpg')";
      }
      if(ques_no == 8)
      {
        document.getElementById("img").style.display="block";
        document.getElementById("img").style.backgroundImage="url('/static/images/Portugal_badge.png')";
      }
      if( ques_no == 9)
      {
        document.getElementById("img").style.display="block";
        document.getElementById("img").style.backgroundImage="url('/static/images/Ragnar-Klavan.jpeg')";
      }
      if(ques_no == 13)
      {
        document.getElementById("img").style.display="block";
        document.getElementById("img").style.backgroundImage="url('/static/images/rcd.png')";
      }
      if(ques_no == 16)
      {
        document.getElementById("img").style.display="block";
        document.getElementById("img").style.backgroundImage="url('/static/images/zakumi.png')";
      }
    }
    else {
        $("#img").hide();
      }
    ques_no++;
    document.getElementById("next").disabled = true;
  }
function checkIt(){
  if (!$("#choice1").is(':checked') && !$("#choice2").is(':checked') && !$("#choice3").is(':checked') && !$("#choice4").is(':checked') ) {
   alert('Please select an option!');
  }
  else
    stopTimer();

  for(var i=1;i<5;i++)
  {
    var $label = $('input[id=choice'+i+']').next();
    if(document.getElementById("choice"+i).checked)
    {
      if($label.text()==allQuestions[ques_no-2].choices[allQuestions[ques_no-2].answer])
      {
        var snd = new Audio("/static/audio/correct-ans.mp3"); // buffers automatically when created
        snd.play();
        score++;
        document.getElementById("label"+i).style.color = "#3f9e06";
        if(ques_no == 21)
        {document.getElementById("next").style.display='none';
        document.getElementById("over").style.display='block';}
        else{document.getElementById("next").disabled = false;}
        for(var i=1;i<5;i++){
          document.getElementById('choice'+i).disabled = true;
        }
      }
      else {
        var snd = new Audio("/static/audio/Wrong-answer.mp3"); // buffers automatically when created
        snd.play();
        document.getElementById("next").style.display='none';
        document.getElementById("over").style.display='block';
        document.getElementById("label"+i).style.color = "red";
        document.getElementById("label"+((allQuestions[ques_no-2].answer)+1)).style.color = "#3f9e06";
        for(var i=1;i<5;i++){
          document.getElementById('choice'+i).disabled = true;
        }
      }
    }
    else {
      continue;
    }
  }
}
$(document).ready(function(){
    $("#over").click(function(){
        $("#body-duplicate").hide();
        $("#final-score").html("Your final score is:  "+score+"/20");
        $("#overModal").modal();
        window.onbeforeunload = null;
            $(function(){
        $.ajax({
          type:"POST",
          url:'kickoff',
          data:{'scores':score},
          success:function(){
            console.log("score is " + score);
          }
        });
      });
    });
    $("#quit").click(function(){
        window.onbeforeunload = null;
    });
});
window.onload = function() {
         var btnRelease = document.getElementById('<%= btnRelease.ClientID %>');
         function setGlobal() {
             window.onbeforeunload = null;
         }
         $(btnRelease).click(setGlobal);
         $('a').click(function() {
             window.onbeforeunload = null;
         });
};
window.onbeforeunload = function() {
     return 'Are you sure you want to leave this page?';
};