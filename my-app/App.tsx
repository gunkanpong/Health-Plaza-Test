import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";

interface Question {
  id: number;
  question: string;
  answers: string[];
  correctAnswerIndex: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    answers: ["London", "Paris", "Berlin", "Rome"],
    correctAnswerIndex: 1,
  },
  {
    id: 2,
    question: "What is the largest planet in our solar system?",
    answers: ["Earth", "Jupiter", "Mars", "Saturn"],
    correctAnswerIndex: 1,
  },
  {
    id: 3,
    question: "If you are _ cold, have a hot drink to warm you up.",
    answers: ["feel", "felt", "feels", "feeling"],
    correctAnswerIndex: 3,
  },
  {
    id: 4,
    question: "There _ empty seats left in the hall.",
    answers: ["were no", "is no", "were not", "are not"],
    correctAnswerIndex:0,
  },
  {
    id: 5,
    question: "If you’re agreeable to our proposal, we’ll______ahead.",
    answers: ["going", "gone", "go", "went"],
    correctAnswerIndex:2,
  },
  {
    id: 6,
    question: "She has been employed at this job_____ 2005.",
    answers: ["since", "at", "for", "on"],
    correctAnswerIndex:0,
  },
  {
    id: 7,
    question: "Her father has been missing _ five years.",
    answers: ["since", "when", "for", "on"],
    correctAnswerIndex:2,
  },
  {
    id: 8,
    question: "Do you _ anyone to help out in the shop?",
    answers: ["needful", "need", "needs", "needed"],
    correctAnswerIndex:1,
  },
  {
    id: 9,
    question: "People in Italy __ living under strict lockdown conditions for three months.",
    answers: ["has to", "has been", "have been", "have"],
    correctAnswerIndex:2,
  },
  {
    id: 10,
    question: "A lot of people __ complained about the noise.",
    answers: ["has to", "has been", "have been", "have"],
    correctAnswerIndex:3,
  },
  {
    id: 11,
    question: "I want to hear your explanation for __ late.",
    answers: ["being", "is", "been", "be"],
    correctAnswerIndex:0,
  },
  {
    id: 12,
    question: "I was just _____into the bath when the phone rang.",
    answers: ["getting", "got", "get", "gets"],
    correctAnswerIndex:0,
  },
  {
    id: 13,
    question: "John would have __ a boxer if his mother had let him.",
    answers: ["became", "become", "becoming", "becomes"],
    correctAnswerIndex:1,
  },
  {
    id: 14,
    question: "She was __ for threatening to spread coronavirus.",
    answers: ["arrests", "arresting", "arrested", "arrest"],
    correctAnswerIndex:2,
  },
  {
    id: 15,
    question: "John throws a big party at his house _ his parents are on vacation.",
    answers: ["among", "between", "during", "while"],
    correctAnswerIndex:3,
  },
  {
    id: 16,
    question: "My parents had already __ by the time I got home.",
    answers: ["eat", "eaten", "ate", "eating"],
    correctAnswerIndex:1,
  },
  {
    id: 17,
    question: "The hospital quarantined the _ patients to avoid cross infection.",
    answers: ["infection", "infect", "infected", "infects"],
    correctAnswerIndex:2,
  },
  {
    id: 18,
    question: "This insect is tiny, __ very dangerous.",
    answers: ["and", "so", "for", "but"],
    correctAnswerIndex:3,
  },
  {
    id: 19,
    question: "The _ terrible enemy is a former friend.",
    answers: ["more", "most", "almost", "many"],
    correctAnswerIndex:1,
  },
  {
    id: 20,
    question: "He was rejected because ____health was poor.",
    answers: ["him", "his", "her", "hers"],
    correctAnswerIndex:2,
  },
  
];

const leaderBoard: any = [
  {
    "name": "peter",
    "score": 19
  },
  {
    "name": "kevin",
    "score": 16
  },
  {
    "name": "anna",
    "score": 11
  },
  {
    "name": "flint",
    "score": 6
  },
]

const App: React.FC = () => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [Leaderboard, setLeaderBoard] = useState<boolean>(false);
  const [countQuestion, setCountQuestion] = useState<number>(1)

  useEffect(() => {
    setQuestionIndex(Math.floor(Math.random() * questions.length));
  }, []);

  const handleAnswer = (selectedAnswerIndex: number) => {
    const currentQuestion = questions[questionIndex];
    if (selectedAnswerIndex === currentQuestion.correctAnswerIndex) {
      setScore(score + 1);
    }
    setQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    setCountQuestion((prev: number) => prev + 1)
  };

  return (
    <>
      {!Leaderboard && (
        <View style={styles.container}>
          <View>
            <View style={{marginBottom: 16, padding:16 ,display: 'flex',alignItems: 'center', justifyContent: 'center', width: '100%', borderColor: "#f89", borderWidth: 1, borderStyle: 'solid'}}>
              <Text style={{fontSize:16, fontWeight: "700"}}>Question Number : {countQuestion} of {questions.length}</Text>
            </View>
            <Text style={styles.question}>
              {questions[questionIndex].question}
            </Text>
            {questions[questionIndex].answers.map((answer, index) => (
              <Button
                key={index}
                title={answer}
                onPress={() => handleAnswer(index)}
              />
            ))}
            <View style={styles.containerScore}>
            <Text style={styles.score}>Score: {score}</Text>
            </View>
            <Button
              title="View Leaderboard"
              onPress={() => setLeaderBoard(true)}
            />
          </View>
        </View>
      )}
      {Leaderboard && (
        <SafeAreaView>
          <View>
            <Text style={{marginLeft:20}}>Leader Board</Text>
          </View>
          <View style={{paddingLeft: 20, paddingRight: 20}}>
            {leaderBoard.map((d:any, i:number) => {return (
              <View style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', marginTop:8}} key={i+1}>
                <Text>{i+1}</Text>
                <Text>{d.name}</Text>
                <Text>{d.score}</Text>
              </View>
            )})}
          </View>
          <View>
            <Button title="Back" onPress={() => setLeaderBoard(false)} />
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  score: {
    marginTop: 20,
  },
  containerScore: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
