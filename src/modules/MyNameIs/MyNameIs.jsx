import React, {useState} from 'react'
import styles from './MyNameIs.module.css'

const MyNameIs = () => {
    const [inputValue, setInputValue] = useState("")
    const [usersName, setUsersName] = useState("")
  
    const handleInput = (e) => {
      setInputValue(e.target.value)
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      setUsersName(inputValue)
      setInputValue("")
      console.log(`User's name is ${usersName}`)
    }


  return (
    <div>
        <h1>We never plan to fail, but we fail to plan.</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.nameInput}          
          type='text' 
          placeholder='What is your name?' 
          value={inputValue}
          onChange={handleInput}/>
        <button
          className={styles.submit}
          type="submit">
            Submit
        </button>
      </form>
      <h2>
        Hi {usersName}!
      </h2>
    </div>
  )
}

export default MyNameIs


