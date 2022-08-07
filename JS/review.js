const option = document.querySelector(".question");

let ques = [];
fetch("answer.json")
  .then((res) => {
    return res.json();
  })
  .then((question) => {
    ques = question;
    MAX_QUESTIONS = question.length;
    printr();
  })
  .catch((error) => console.log(error));

printr = () => {
  // console.log(ques);
  const newQues = [...ques];
  let i = 0;
  newQues.forEach((data) => {
    const choice = `choice${data.answer}`;
    option.innerHTML += `<div><b>Que${i + 1}</b>) ${data.question} </div>
    <p><b>Ans:</b> ${data[choice]}</p>`;
    i++;
  });
};
