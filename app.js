fetch("./data.json")
  .then((response) => response.json())
  .then((data) => showData(data));

const showData = (outputs) => {
  let scores = document.querySelectorAll(".score");
  outputs.forEach((output, outputIndex) => {
    scores.forEach((score, scoreIndex) => {
      console.log(outputIndex, scoreIndex);
      if (outputIndex === scoreIndex) {
        scores[scoreIndex].innerText = output.score;
      }
    });
  });
};
