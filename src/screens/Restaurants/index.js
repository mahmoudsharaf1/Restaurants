
import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, BackHandler } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';
import Header from '../../components/Header';
import InputSearch from '../../components/InputSearch';
import { Colors, ScaleWidth } from '../../common/foundation';
import RestaurantsItems from '../../components/RestaurantsItems';
import { getRestaurants } from '../../apis/apis';


const Home = ({ navigation }) => {
    const [inputValue, setInputValue] = useState('')
    const [listView, setListView] = useState('rows')
    const [numCols, setColumnNo] = useState(2);
    const [bitPricer, setBitPricer] = useState(false);
    const [bitSpender, setBitSpender] = useState(false);
    const [restaurants, setRestaurants] = useState([]);




    useEffect(() => {
        getRestaurants((response) => {
            setRestaurants(response.data.businesses);
        });
    })

    const changeListView = () => {
        if (listView == 'rows') {
            setListView('columns')
        } else {
            setListView('rows')
        }
    }

    const renderCostEffectiveItem = ({ item }) => {
        return (
            <RestaurantsItems
                image_url={item.image_url}
                name={item.name}
                review_count={item.review_count}
                rating={item.rating}
                listView={listView}
                onPress={() => navigation.navigate('RestaurantsDetails', { item })}
            />
        )

    }



    return (
        <View style={styles.container}>
            <Header
                title={'Restaurants'}
                onPress={() => BackHandler.exitApp()}
            />
            <InputSearch
                value={inputValue}
                onChangeText={setInputValue}
                onDeleteInput={() => setInputValue('')}
            />
            <View style={styles.headerList}>
                <Text style={styles.text}>Cost Effective</Text>
                <TouchableOpacity onPress={changeListView}>
                    <Entypo
                        name='menu'
                        size={ScaleWidth(26)}
                    />
                </TouchableOpacity>
            </View>

            <FlatList
                data={restaurants}
                renderItem={renderCostEffectiveItem}
                key={listView == 'columns' ? numCols : null}
                numColumns={listView == 'columns' ? numCols : null}

                keyExtractor={(item, index) => JSON.stringify(index)}
                ListEmptyComponent={
                    <ActivityIndicator
                        color={Colors.black}
                        size={'small'}
                    />
                }
            />

            {/* <Text>{bitPricer ? 'Bit Price' : null}</Text> */}




        </View>
    )
}

export default Home;