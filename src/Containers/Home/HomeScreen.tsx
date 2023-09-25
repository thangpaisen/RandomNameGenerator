import { Texts } from '@/Constants'
import { useRandomName } from '@/Hooks/useRandomName'
import { addNewName } from '@/Stores/User/User'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch } from 'react-redux'
import Clipboard from '@react-native-clipboard/clipboard'
import Toast from 'react-native-toast-message'

const HomeScreen = () => {
  const navigation = useNavigation<any>()
  const dispatch = useDispatch<any>()

  const onCreateSuccess = (data: any) => {
    dispatch(addNewName(data?.name))
  }

  const { data, refetch, isFetching } = useRandomName(onCreateSuccess)

  const goToHistory = () => {
    navigation.navigate(Texts.HistoryScreen)
  }

  const handleOnSave = () => {
    Clipboard.setString(data?.name)
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Copied',
    })
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 10 }}>
      <View
        style={{
          alignItems: 'flex-end',
        }}
      >
        <TouchableOpacity onPress={goToHistory}>
          <Icon name='time-outline' size={30} color={'#000'} />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.viewName}>
          <Text style={styles.txtName}>{data?.name}</Text>
        </View>
        <TouchableOpacity
          disabled={isFetching}
          onPress={() => {
            refetch()
          }}
          style={styles.btnRandom}
        >
          <Text
            style={{
              fontSize: 24,
              color: '#fff',
            }}
          >
            Random Name
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSave} onPress={handleOnSave}>
          <Text style={styles.txtSave}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  btnRandom: {
    marginTop: 100,
    backgroundColor: '#000',
    borderRadius: 40,
    padding: 20,
    paddingHorizontal: 40,
    alignSelf: 'center',
  },
  viewName: {
    flex: 1,
    justifyContent: 'center',
  },
  txtName: {
    fontSize: 30,
    color: '#000',
  },
  btnSave: {
    marginVertical: 80,
    backgroundColor: '#333',
    borderRadius: 30,
    padding: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  txtSave: {
    fontSize: 24,
    color: '#fff',
  },
})
