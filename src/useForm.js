import React, { useState } from 'react'

const useForm = (initilValues) => {
    const [values, setValues] = useState(initilValues)
  return [
    values, 
    (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        })
    }
  ]
}

export default useForm