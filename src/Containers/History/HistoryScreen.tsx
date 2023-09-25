import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { clearHistory } from '@/Stores/User/User'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '@/Hooks'
import { FlatList } from 'react-native'

type Props = {}

const HistoryScreen = (props: Props) => {
  const navigation = useNavigation<any>()
  const dispatch = useDispatch()
  const historyList = useAppSelector((store) => store.user?.historyName)
  console.log('historyList: ', historyList)

  const removeAllHistory = () => {
    Alert.alert(`Removing all history`, `Are you sure you want to remove all history?`, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => onRemoveAllHistory() },
    ])
  }

  const onRemoveAllHistory = () => {
    dispatch(clearHistory())
  }

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.item}>
        <Text style={styles.txtItem}>{item}</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}
        >
          <Icon name='chevron-back-outline' size={30} color={'#000'} />
        </TouchableOpacity>
        <Text style={styles.txtHeader}>History</Text>
        <TouchableOpacity onPress={removeAllHistory}>
          <Icon name='trash-outline' size={30} color={'#000'} />
        </TouchableOpacity>
      </View>
      <FlatList data={historyList || []} keyExtractor={(item) => item} renderItem={renderItem} />
    </View>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: '#33333322',
    borderBottomWidth: 2,
  },
  txtHeader: {
    color: '#000',
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#33333322',
    borderBottomWidth: 2,
  },
  txtItem: {
    fontSize: 20,
    color: '#000',
  },
})
