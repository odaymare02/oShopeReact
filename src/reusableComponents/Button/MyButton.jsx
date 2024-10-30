import React from 'react'
import style from "./Button.module.css"
export default function MyButton({value}) {
  return (
    <div>
      <button className='btn btn-outline-main '>
        {
            value
        }
      </button>
    </div>
  )
}
