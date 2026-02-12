 document.getElementById("restart-link").addEventListener("click", () => {
    location.reload();
  });

  const quiz = [
    {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "string", "float"],
    answer: "var"
  },
  // {
  //   question: "Which method converts JSON string into a JavaScript object?",
  //   options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"],
  //   answer: "JSON.parse()"
  // },
  // {
  //   question: "Which symbol is used for single-line comments in JavaScript?",
  //   options: ["//", "/* */", "#", "<!-- -->"],
  //   answer: "//"
  // },
  // {
  //   question: "What does typeof null return?",
  //   options: ["null", "object", "undefined", "number"],
  //   answer: "object"
  // },
  // {
  //   question: "Which function is used to print something to the console?",
  //   options: ["print()", "log()", "console.log()", "write()"],
  //   answer: "console.log()"
  // },
  // {
  //   question: "Which operator is used to compare both value and type?",
  //   options: ["==", "=", "===", "!="],
  //   answer: "==="
  // },
  // {
  //   question: "Which loop is guaranteed to run at least once?",
  //   options: ["for", "while", "do...while", "foreach"],
  //   answer: "do...while"
  // },
  // {
  //   question: "How do you declare an arrow function?",
  //   options: ["=>", "function()", "->", "::"],
  //   answer: "=>"
  // },
  // {
  //   question: "Which array method adds an element at the end?",
  //   options: ["push()", "pop()", "shift()", "unshift()"],
  //   answer: "push()"
  // },
  {
    question: "Which value means a variable has been declared but not assigned?",
    options: ["null", "NaN", "undefined", "false"],
    answer: "undefined"
  }
  ];

  let currentQuestion = 0;
  let score = 0;

  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');
  const scoreEl = document.getElementById('score');

  function loadQuestion() {
    optionsEl.classList.remove('answered');
    const q = quiz[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = '';
    
    q.options.forEach(option => {
      const btn = document.createElement('button');
      btn.textContent = option;
      btn.addEventListener("click", (e) => {
        checkAnswer(option, e.target);
      });
      optionsEl.appendChild(btn);
    });
  }

  function checkAnswer(selected, targetBtn) {
    optionsEl.classList.add('answered');
    const correctAnswer = quiz[currentQuestion].answer;

    if (selected === correctAnswer) {
      score++;
      targetBtn.classList.add('correct');
    } else {
      targetBtn.classList.add('wrong');
      Array.from(optionsEl.children).forEach(btn => {
        if (btn.textContent === correctAnswer) btn.classList.add('correct');
      });
    }

    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion < quiz.length) {
        loadQuestion();
      } else {
        showScore();
      }
    }, 2000);
  }

  function showScore() {
    document.getElementById('topBar').style.display = 'none';
    questionEl.style.display = 'none';
    optionsEl.style.display = 'none';
    scoreEl.style.display = 'block';
    
    const percentage = Math.round((score / quiz.length) * 100);
    document.getElementById('result-percent').textContent = percentage + "%";
    document.getElementById('get-score').textContent = score;
    document.getElementById('total-questions').textContent = quiz.length;

     document.getElementById("final-restart").addEventListener("click", () => {
  location.reload();
});
  }

  loadQuestion();