import React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import classes from '../styles/styles.module.scss'
import type { CheckboxProps } from '../types/types'
import { CheckIcon } from './check-icon'

export const Checkbox: React.FC<CheckboxProps> = ({
  size = 'md',
  className,
  ...props
}) => {
  return (
    <CheckboxPrimitive.Root
      className={`${classes.checkbox} ${classes[`size-${size}`]} ${className || ''}`}
      {...props}
    >
      <CheckboxPrimitive.Indicator>
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
} 