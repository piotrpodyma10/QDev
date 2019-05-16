const RandomAnswers = (data) => {
  const randomAnswersArray = []

  for(let i = 0; i < data.length; i++) {
    const selectDeleteIndex = Math.floor(Math.random()*4)
    const selectSecondNewIndex = Math.floor(Math.random()*4)
    const selectNewIndex = Math.floor(Math.random()*4)
    const question = data[i].question
    const imgId = data[i].imgId
    const answers = data[i].answers
    const goodAnswer = answers[0]
    const changeAnswer = answers[selectDeleteIndex]
  
    answers.splice(selectDeleteIndex, 1)
    answers.splice(selectNewIndex, 0, changeAnswer)
    const goodAnswerIndex = answers.indexOf(goodAnswer)
    answers.splice(goodAnswerIndex, 1)
    answers.splice(selectSecondNewIndex, 0, goodAnswer)
    const goodNewAnswerIndex = answers.indexOf(goodAnswer)

    const obj = {
      question: question,
      imgId: imgId,
      answers: answers,
      goodAnswerIndex: goodNewAnswerIndex
    }
    randomAnswersArray.push(obj)
  }
  return randomAnswersArray
}

export default RandomAnswers