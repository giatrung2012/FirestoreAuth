import { StyleSheet, Text, View } from 'react-native'
import React, { createContext } from 'react'

const MyContext = createContext();
MyContext.displayName = "MyContextContext";

function reducer(state, action) {
    switch(action.type) {
        return { ...state, userLogin: action.value }
    }
    default: {
        throw new Error(`Unhandled act`)
    }
}

=> {
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})