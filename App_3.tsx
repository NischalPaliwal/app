import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

// Form Validation
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
    passwordLength: Yup.number()
    .min(4,'Should be of min. 4 characters')
    .max(16,'Should be of max. 16 characters')
    .required('Length is required')
})

export default function App_3() {
  const [password, setPassword] = useState('')
  const[isPassGenerated, setIsPassGenerated] = useState(false)
  const [lowerCase, setLowerCase] = useState(true)
  const[upperCase, setupperCase] = useState(false)
  const[numbers, useNumbers] = useState(false)
  const[symbols, useSymbols] = useState(false)

  const generatePasswordString = (passwordLength: number) => {
    
  }

  const createPassword = (characters: string, passwordLength: number) => {

  }

  const resetPasswordState = () => {
    
  }

  return (
    <View>
      <Text>App_3</Text>
    </View>
  )
}

const styles = StyleSheet.create({})