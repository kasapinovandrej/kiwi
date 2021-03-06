// import { useState } from 'react'
import { useState, useEffect } from 'react'
import Layout from './components/layout/layout'
import Screen from './components/screen/screen'
import Header from './components/header/header'
import Display from './components/display/display'
import Keyboard from './components/keyboard/keyboard'

function App() {
  const [inputNumber, setInputNumber] = useState('')
  const [combinationArray, setCombinationArray] = useState([])
  const [wordsArray, setWordsArray] = useState([])
  const [feedback, setFeedback] = useState('')

  useEffect(() => {
    const data = { value: inputNumber }
    const updateNumber = async () => {
      try {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        };
        const res = await fetch('/convert', requestOptions);
        if (!res.ok) throw new Error('Input must contain numbers from 2-9, with maximum length of 8 characters')
        const content = await res.json();
        setCombinationArray(content.combinations)
        setWordsArray(content.words)
      } catch (err) {
        setWordsArray([])
        setCombinationArray([])
        setFeedback(err.message)
        console.error(err)
      }
    }
    if (inputNumber.length === 0) {
      setCombinationArray([])
      setWordsArray([])
      return
    }
    if (inputNumber.length >= 8) {
      setFeedback('You have reached the maximum number of characters')
      return
    }
    updateNumber()
  }, [inputNumber])


  const inputNumberHandler = (value) => {
    if (inputNumber.length >= 8) {
      setFeedback('You have reached the maximum number of characters')
      return
    }
    setInputNumber(prevInputNumber => prevInputNumber + value)
    setFeedback('')
  }
  const backspaceHandler = () => {
    setInputNumber(prevInputNumber => prevInputNumber.slice(0, -1))
    setFeedback('')
  }
  const resetHandler = () => {
    setInputNumber('')
    setFeedback('')
  }
  const feedbackHandler = () => {
    setFeedback('Use 2 - 9 keys for input')
  }

  return (
    <Layout>
      <Screen >
        <Header />
        <Display inputNumber={inputNumber} combinations={combinationArray} words={wordsArray} feedback={feedback} />
        <Keyboard
          inputNumber={inputNumber}
          inputHandlers={{
            input: inputNumberHandler,
            back: backspaceHandler,
            reset: resetHandler,
            feedback: feedbackHandler
          }} />
      </Screen>
    </Layout>
  );
}

export default App;










// const [combinationArray, setCombinationArray] = useState([])
  // const data = { value: '22' }

  // const updateNumber = async () => {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(data)
  //   };
  //   const res = await fetch('/convert', requestOptions);
  //   const content = await res.json();
  //   setCombinationArray(content)
  //   console.log(content)
  // }
  // console.log(combinationArray)