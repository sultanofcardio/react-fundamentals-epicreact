// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const nameRef = React.useRef()
  const [errorMessage, setErrorMessage] = React.useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(nameRef.current.value)
  }

  const handleChange = event => {
    event.preventDefault()
    const {value} = event.target
    if (value !== value.toLowerCase()) {
      setErrorMessage('Username must be lower case')
    } else {
      setErrorMessage(null)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Username:</label>
        <input id="name" type="text" ref={nameRef} onChange={handleChange} />
        <div role="alert">{errorMessage}</div>
      </div>
      <button type="submit" disabled={errorMessage !== null}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
