// import { useState } from 'react'
import Layout from './components/layout/layout'
import Screen from './components/screen/screen'
import Header from './components/header/header'
import Display from './components/display/display'
import Keyboard from './components/keyboard/keyboard'

function App() {
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
  return (
    <div className="App">
      <Layout>
        <Screen >
          <Header />
          <Display />
          <Keyboard />
        </Screen>
      </Layout>
    </div>
  );
}

export default App;
