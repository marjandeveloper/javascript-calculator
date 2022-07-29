import { useState } from 'react'
import './App.scss'

function App() {
  const [display, setDisplay] = useState('0')
  const buttons = [
    {
      id: 'clear',
      text: 'C',
      className: 'clear',
    },
    {
      id: 'equals',
      text: '=',
      className: 'equals',
    },
    {
      id: 'decimal',
      text: '.',
    },
    {
      id: 'add',
      text: '+',
    },
    {
      id: 'subtract',
      text: '-',
    },
    {
      id: 'multiply',
      text: '*',
    },
    {
      id: 'divide',
      text: '/',
    },
    {
      id: 'zero',
      text: '0',
    },
    {
      id: 'one',
      text: '1',
    },
    {
      id: 'two',
      text: '2',
    },
    {
      id: 'three',
      text: '3',
    },
    {
      id: 'four',
      text: '4',
    },
    {
      id: 'five',
      text: '5',
    },
    {
      id: 'six',
      text: '6',
    },
    {
      id: 'seven',
      text: '7',
    },
    {
      id: 'eight',
      text: '8',
    },
    {
      id: 'nine',
      text: '9',
    },
  ]

  const showDisplay = (e) => {
    if (e.target.innerText === 'C') {
      setDisplay('0')
    } else if (+display) {
      setDisplay(display + e.target.innerText)
    } else {
      setDisplay(e.target.innerText)
    }
  }

  const showButtons = buttons.map((button) => {
    const defaultClass = 'button'
    return (
      <button
        className={defaultClass + ' ' + button.className}
        key={button.id}
        id={button.id}
        onClick={showDisplay}
      >
        {button.text}
      </button>
    )
  })
  return (
    <div className='App'>
      <div id='calculator'>
        <div id='display'>{display}</div>
        <div id='buttons'>{showButtons}</div>
      </div>
    </div>
  )
}

export default App
