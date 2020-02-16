import React from 'react'

const Input = ({
  type,
  id,
  title = type,
  placeholder = `Enter ${type}`,
  description = `We'll never share your ${type} with anyone else.`,
  onFocus,
  onBlur
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{title}</label>
      <input type={type}
        className="form-control" id={id}
        aria-describedby={`${type}Help`}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}/>
      <small id={`${type}Help`} className="form-text text-muted">{description}</small>
    </div>
  )
}

export default Input