function OpeningCeremony(callback) {
    console.log("Let the games begin");
    setTimeout(() => {
      const score = { red: 0, blue: 0, green: 0, yellow: 0 };
      callback(score, Race100M);
    }, 1000);
  }
  
  function Race100M(score, callback) {
    console.log("Race 100M begins");
    setTimeout(() => {
      const colors = ['red', 'blue', 'green', 'yellow'];
      colors.forEach(color => {
        score[color] = Math.floor(Math.random() * 6) + 10;
      });
      colors.sort((a, b) => score[a] - score[b]);
      score[colors[0]] += 50;
      score[colors[1]] += 25;
      console.log("Race 100M results:", colors[0], "won gold,", colors[1], "won silver");
      callback(score, LongJump);
    }, 3000);
  }
  
  function LongJump(score, callback) {
    console.log("Long jump begins");
    setTimeout(() => {
      const colors = ['red', 'blue', 'green', 'yellow'];
      const randomIndex = Math.floor(Math.random() * colors.length);
      const winnerColor = colors[randomIndex];
      score[winnerColor] += 150;
      console.log(`${winnerColor} wins the long jump`);
      callback(score, HighJump);
    }, 2000);
  }
  
  function HighJump(score, callback) {
    console.log("High jump begins");
    const userInput = prompt("What colour secured the highest jump?");
    if (userInput in score) {
      score[userInput] += 100;
      console.log(`${userInput} wins the high jump`);
    } else {
      console.log("Event was cancelled");
    }
    callback(score, AwardCeremony);
  }
  
  function AwardCeremony(score) {
    console.log("Award Ceremony begins");
    const sortedScores = Object.entries(score).sort((a, b) => b[1] - a[1]);
    console.log(`${sortedScores[0][0]} came first with ${sortedScores[0][1]} points`);
    console.log(`${sortedScores[1][0]} came second with ${sortedScores[1][1]} points`);
    console.log(`${sortedScores[2][0]} came third with ${sortedScores[2][1]} points`);
  }
  
  
  OpeningCeremony(Race100M);
  