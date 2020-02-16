import React from 'react'
import Input from './Input'

function Form({ setIsShowFooter }) {
  const elements = ['', '', '', '']
  return (
    <form>
      <Input type="email" id="email1" 
        onFocus={e => { setIsShowFooter(false) }}
        onBlur={e => { setIsShowFooter(true) }}
      />
      <Input type="password" id="password1" 
        onFocus={e => { setIsShowFooter(false) }}
        onBlur={e => { setIsShowFooter(true) }}
      />
      {elements.map((element, index) => (
        <Input key={index} type="number" id={`num${index}`} title="Amount of sugar"
          placeholder="Enter number of sugar bags"
          onFocus={e => { setIsShowFooter(false) }}
          onBlur={e => { setIsShowFooter(true) }}
          description="The number of sugar bags that needed to make a cake" />
      ))}

      <button type="button" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Form

