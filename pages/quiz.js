
      const questions = [
        {
          q: "What song saves Max from Vecna?",
          options: ["Running Up That Hill", "Heroes", "Africa", "Dreams"],
          correct: 0,
        },
        {
          q: "Who actually destroyed the final Horcrux (Nagini)?",
          options: ["Harry", "Neville", "Ron", "Hermione"],
          correct: 1,
        },
        {
          q: "What were Tony Stark’s last words in Endgame?",
          options: [
            "“Goodbye, kid.”",
            "“We’re in the endgame now.”",
            "“I am Iron Man.”",
            "“Pepper…”",
          ],
          correct: 2,
        },
        {
          q: "What does Hannibal always compliment before killing someone?",
          options: [
            "Their taste",
            "Their intelligence",
            "Their manners",
            "Their courage",
          ],
          correct: 0,
        },
        {
          q: "What does Harley Quinn break the store window for in the first Suicide Squad movie?",
          options: [
            "A baseball bat",
            "A stuffed unicorn",
            "A glitter jacket",
            "A handbag",
          ],
          correct: 2,
        },
        {
          q: "During their shows, what is the Horsemen’s signature trick theme?",
          options: [
            "Card illusions",
            "Bank heists",
            "Mind reading",
            "Disappearing acts",
          ],
          correct: 1,
        },
        {
          q: "What is the most terrifying hidden figure that appears repeatedly in the series (Haunting of Hill House)?",
          options: [
            "The Bent-Neck Lady",
            "The Tall Man",
            "Poppy Hill",
            "Abigail",
          ],
          correct: 0,
        },
        {
          q: "What phrase does Wanda whisper before taking her full Scarlet Witch form?",
          options: [
            "“I know who I am.”",
            "“This is my home.”",
            "“You’re the villain.”",
            "“Chaos magic exists.”",
          ],
          correct: 1,
        },
        {
          q: "What gives Thor the power of lightning in Ragnarok?",
          options: [
            "Odin’s blessing",
            "The hammer",
            "His own inner power",
            "The Bifrost",
          ],
          correct: 2,
        },
        {
          q: "In The Dark Knight, why does Joker say he doesn’t kill Batman?",
          options: [
            "“You’re my toy.”",
            "“You complete me.”",
            "“Gotham needs hope.”",
            "“You’re not ready.”",
          ],
          correct: 1,
        },
        {
          q: "In Batman Begins, what symbol inspires Bruce to pick the bat identity?",
          options: [
            "A bat crashes through the window",
            "A memory of his father",
            "A dream",
            "A riddle he read",
          ],
          correct: 0,
        },
        {
          q: "Which line is Joker known for across movies/comics?",
          options: [
            "“Smile, darling.”",
            "“We live in a society…”",
            "“I win by chaos.”",
            "“Never trust a clown.”",
          ],
          correct: 1,
        },
        {
          q: "What is Morpheus also known as?",
          options: [
            "The Black King",
            "The Lord of Dreams",
            "The Nightwalker",
            "The Dreamwatcher",
          ],
          correct: 1,
        },
        {
          q: "What truly awakens the dragons again? (Game of Thrones)",
          options: [
            "Valyrian blood",
            "Dany’s sacrifice",
            "The pyre magic",
            "Dragonstone",
          ],
          correct: 2,
        },
        {
          q: "Breaking Bad: What’s Walter White’s most iconic line?",
          options: [
            "“Say my name.”",
            "“I am the hero.”",
            "“I choose chaos.”",
            "“I built my empire.”",
          ],
          correct: 0,
        },
        {
          q: "Why is Wednesday feared at Nevermore even before her powers?",
          options: [
            "Her stare",
            "Her history of violence",
            "Her attitude",
            "All of the above",
          ],
          correct: 3,
        },
        {
          q: "What EXACT moment becomes the viral “Wednesday dance”?",
          options: [
            "Her training fight scene",
            "The Rave'N dance",
            "The Poe Cup scene",
            "Her violin performance",
          ],
          correct: 1,
        },
        {
          q: "Which villain breaks Robin mentally in the series?",
          options: ["Doctor Light", "Trigon", "Slade", "Jinx"],
          correct: 2,
        },
        {
          q: "What form does Raven enter when losing control? (Teen Titans)",
          options: [
            "Demon Form",
            "Dark Cloak",
            "White Raven",
            "Trigon’s Avatar",
          ],
          correct: 3,
        },
        {
          question: "What is Tanjiro's sister’s name?",
          options: ["Shinobu", "Mitsuri", "Nezuko", "Aoi"],
          correct: "Nezuko",
        },
      ];

      

      let index = 0;
let score = 0;

function loadQuestion() {
  const q = questions[index];

  document.getElementById("qText").textContent = q.q;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(i);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[index].correct;

  if (selected === correct) {
    score++;
  }

  index++;

  if (index < questions.length) {
    loadQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  document.getElementById("quizBox").innerHTML =
    `<h2>Quiz Finished</h2><p>Score: ${score}/${questions.length}</p>`;
}

// start
loadQuestion();
