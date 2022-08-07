const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");

const finalScore = document.getElementById("finalScore");

const mostRecent = localStorage.getItem("mostRecentScore");

const highScore = JSON.parse(localStorage.getItem("highScore")) || [];

finalScore.innerText = mostRecent;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: mostRecent,
    name: username.value,
  };
  highScore.push(score);

  console.log(highScore);

  highScore.sort((a, b) => b.score - a.score);

  highScore.splice(5);

  console.log(highScore);

  localStorage.setItem("highScore", JSON.stringify(highScore));
  location.assign("/");
};
