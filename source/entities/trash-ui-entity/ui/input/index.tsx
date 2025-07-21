'use client'

import React, { InputHTMLAttributes, useRef } from 'react'
import styles from '../../../../shared/ui/input/styles/styles.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  supportingText?: string
  onClear?: () => void
  label?: string
}

const Input: React.FC<InputProps> = ({ error = false, supportingText, onClear, value, label, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = React.useState(value ?? '')

  React.useEffect(() => {
    if (typeof value === 'string') setInputValue(value)
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    if (props.onChange) props.onChange(e)
  }

  const handleClear = () => {
    setInputValue('')
    if (onClear) onClear()
    if (inputRef.current) inputRef.current.focus()
  }

  const showClear = typeof inputValue === 'string' && inputValue.length > 0 && typeof onClear === 'function'

  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label className={styles.inputLabel} htmlFor={props.id}>
          {label}
        </label>
      )}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <input
          ref={inputRef}
          className={`${styles.inputField} ${error ? styles.error : ''}`}
          value={inputValue}
          onChange={handleChange}
          {...props}
        />
        {showClear && (
          <button
            type="button"
            aria-label="Очистить"
            onClick={handleClear}
            style={{
              position: 'absolute',
              right: 0,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              height: '100%'
            }}
          >
            <svg width="36" height="36" viewBox="0 0 36 36">
              <line x1="8" y1="8" x2="28" y2="28" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
              <line x1="28" y1="8" x2="8" y2="28" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>
      {supportingText && (
        <div className={`${styles.supportingText} ${error ? styles.error : ''}`}>{supportingText}</div>
      )}
    </div>
  )
}

export default Input
