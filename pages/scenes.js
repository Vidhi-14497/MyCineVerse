
      const scenes = [
        {
          src: "../assets/scenes/stranger-things.mp4",
          answer: "Stranger Things",
          hints: ["Netflix series", "Eleven", "Mind powers"],
        },
        {
          src: "../assets/scenes/joker.mp4",
          answer: "Joker",
          hints: ["Batman", "Harley Quin", "Gotham"],
        },
        {
          src: "../assets/scenes/sandman.mp4",
          answer: "The Sandman",
          hints: ["Dream", "Morpehous", "Nightwalker"],
        },
      ];

      let current = 0;
      let score = 0;
      let hintIndex = 0;

   
      const videoEl = document.getElementById("sceneVideo");
      const answerEl = document.getElementById("answerInput");
      const scoreEl = document.getElementById("scoreText");
      const hintEl = document.getElementById("hintText");

      function loadScene() {
        videoEl.src = scenes[current].src;
        answerEl.value = "";
        hintEl.textContent = "";
        hintIndex = 0;
        scoreEl.textContent = `Score: ${score}/${scenes.length}`;
      }

      function checkAnswer() {
        const user = answerEl.value.trim().toLowerCase();
        const correct = scenes[current].answer.toLowerCase();

        if (user === correct) {
          alert("Correct!");
          score++;
        } else {
          alert("Wrong! It was: " + scenes[current].answer);
        }
        nextScene();
      }

      function nextScene() {
        current++;

        if (current < scenes.length) {
          loadScene();
        } else {
          endGame();
        }
      }

      function showHint() {
        let s = scenes[current];
        if (hintIndex < s.hints.length) {
          hintEl.textContent = "Hint: " + s.hints[hintIndex];
          hintIndex++;
        } else {
          hintEl.textContent = "No more hints!";
        }
      }

      function endGame() {
        document.body.innerHTML = `
        <h2>Game Over!</h2>
        <p>Your final score: ${score}/${scenes.length}</p>
        <button onclick="location.reload()">Play Again</button>
    `;
      }

      document
        .getElementById("submitBtn")
        .addEventListener("click", checkAnswer);
      document.getElementById("hintBtn").addEventListener("click", showHint);

      answerEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter") checkAnswer();
      });

      loadScene();
