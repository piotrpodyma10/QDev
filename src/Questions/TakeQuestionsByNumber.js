import Questions from './index'

const TakeQuestionsByNumber = (number = 30) => {
  const allQuestions = Questions()
  const selectedQuestions = []
  
  for (let i = 0; i < number; i++) {
    let selectedIndex = Math.floor(Math.random()*allQuestions.length)
    selectedQuestions.push(allQuestions[selectedIndex])
    allQuestions.splice(selectedIndex, 1)
  }

  return selectedQuestions
}

export default TakeQuestionsByNumber
