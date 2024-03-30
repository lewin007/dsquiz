const quizData = [
    {
      question: "Qui était le premier membre de l'équipage de Luffy à se joindre à lui après le départ de son village natal ?",
      answers: ["Roronoa Zoro", "Nami", "Usopp", "Sanji"],
      correctAnswer: "Roronoa Zoro"
    },
    {
      question: "Quel est le nom du fruit du démon que Luffy mange, et quel pouvoir lui confère-t-il ?",
      answers: ["Gomu Gomu no Mi - Pouvoir d'étirer son corps comme du caoutchouc", "Bara Bara no Mi - Pouvoir de se séparer en morceaux", "Hito Hito no Mi - Pouvoir de devenir un humain", "Mera Mera no Mi - Pouvoir du feu"],
      correctAnswer: "Gomu Gomu no Mi - Pouvoir d'étirer son corps comme du caoutchouc"
    },
    {
      question: "Comment s'appelle l'ancien chef de l'équipage de Barbe Blanche ?",
      answers: ["Gol D. Roger", "Shanks", "Portgas D. Ace", "Edward Newgate"],
      correctAnswer: "Edward Newgate"
    },
    {
      question: "Quel est le nom du royaume dirigé par Nefertari Vivi dans l'arc d'Alabasta ?",
      answers: ["Alabasta", "Skypiea", "Fishman Island", "Dressrosa"],
      correctAnswer: "Alabasta"
    },
    {
      question: "Qui a été le mentor de Zoro dans son entraînement aux techniques de sabre ?",
      answers: ["Dracule Mihawk", "Silvers Rayleigh", "Shanks", "Kizaru"],
      correctAnswer: "Dracule Mihawk"
    },
    {
      question: "Quel est le nom du médecin de l'équipage de Chapeau de Paille ?",
      answers: ["Tony Tony Chopper", "Nico Robin", "Usopp", "Brook"],
      correctAnswer: "Tony Tony Chopper"
    },
    {
      question: "Comment s'appelle le bateau des Chapeaux de Paille après l'ellipse de deux ans ?",
      answers: ["Thousand Sunny", "Going Merry", "Red Force", "Victory Hunter"],
      correctAnswer: "Thousand Sunny"
    },
    {
      question: "Quel est le nom de la technique de Sanji qui utilise le feu ?",
      answers: ["Diable Jambe", "Tempest Kick", "Black Leg Style", "Sky Walk"],
      correctAnswer: "Diable Jambe"
    },
    {
      question: "Qui est le père biologique de Portgas D. Ace ?",
      answers: ["Gol D. Roger", "Garp", "Whitebeard", "Sengoku"],
      correctAnswer: "Gol D. Roger"
    },
    {
      question: "Quelle est la vraie identité de Bartholomew Kuma après qu'il a été transformé par le Gouvernement Mondial ?",
      answers: ["Ursus Shock", "Cyborg Kuma", "PX-0", "Pacifista"],
      correctAnswer: "Ursus Shock"
    },
  ];
  
  
  const questionElement = document.getElementById('question');
  const answerButtons = document.getElementById('answers');
  const nextButton = document.getElementById('nextButton');
  const resultElement = document.getElementById('result');
  const feedbackElement = document.getElementById('feedback');
  const scoreElement = document.getElementById('score');
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    answerButtons.innerHTML = '';
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer;
      button.classList.add('answer');
      button.addEventListener('click', () => selectAnswer(answer, currentQuestion.correctAnswer));
      answerButtons.appendChild(button);
    });
  }
  
  function selectAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
      score++;
      feedbackElement.textContent = "Correct!";
      feedbackElement.classList.add('correct');
    } else {
      feedbackElement.textContent = `Incorrect! The correct answer is ${correctAnswer}.`;
      feedbackElement.classList.add('incorrect');
    }
    answerButtons.querySelectorAll('.answer').forEach(button => {
      button.disabled = true;
    });
    nextButton.classList.remove('hide');
  }
  
  function showResult() {
    resultElement.innerText = `Your score: ${score}/${quizData.length}`;
    scoreElement.innerText = `Your score: ${score}/${quizData.length}`;
  }
  
  nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      showQuestion();
      feedbackElement.textContent = '';
      feedbackElement.classList.remove('correct', 'incorrect');
      nextButton.classList.add('hide');
    } else {
      showResult();
      nextButton.disabled = true;
      scoreElement.classList.remove('hide');
    }
  });
  
  showQuestion();
  