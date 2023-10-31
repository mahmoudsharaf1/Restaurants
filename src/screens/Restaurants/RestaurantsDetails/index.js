import { ActivityIndicator, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import styles from './styles';
import { Get_Restaurant_Details, token } from '../../../apis/config';
import { Colors, ScaleWidth } from '../../../common/foundation';
import { ScrollView } from 'react-native';

const RestaurantsDetails = ({ route }) => {
    const [restaurantDetails, setRestaurantDetails] = useState([]);
    const [categories, setCategories] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const mapRef = useRef(null)
    const item = route.params.item;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        const headers = {
            Authorization: `Bearer ${token}`
        };
        const config = {
            method: 'get',
            url: `${Get_Restaurant_Details}/${item.id}`,
            headers,
        };

        axios(config)
            .then(function (response) {
                setRestaurantDetails(response.data);
                setCategories(response.data.categories);
            })
            .catch(function (error) {
                console.log(error);
            });
        return () => clearTimeout(timeout);
    }, [])



    if (isLoading) {
        return (
            <View style={styles.loadingView}>
                <ActivityIndicator
                    color={Colors.black}
                    size={'small'}
                />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Text style={styles.name}>{restaurantDetails.name}</Text>
                <Text style={styles.displayAddress}>{restaurantDetails.location.display_address}</Text>
            </View>
            <MapView
                ref={mapRef}
                provider={Platform.OS == 'android' ? PROVIDER_GOOGLE : null}
                showsUserLocation={true}
                initialRegion={{
                    latitude: restaurantDetails.coordinates.latitude,
                    longitude: restaurantDetails.coordinates.longitude,
                    latitudeDelta: 0.003,
                    longitudeDelta: 0.00035
                }}
                style={styles.map}
            />
            <View style={styles.displayDataView}>
                <Text style={styles.displayName}>{restaurantDetails.name}</Text>
                <Text style={styles.displayPhone}>{restaurantDetails.display_phone}</Text>
            </View>

            <ScrollView>
                {categories.map((item) => (
                    <View style={styles.categoriesView}>
                        <FontAwesome5
                            style={styles.icon}
                            name='map-marker-alt'
                            size={ScaleWidth(21)}
                        />
                        <View>
                            <Text style={styles.categoriesTitle}>{item.title}</Text>
                            <Text style={styles.alias}>{item.alias}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default RestaurantsDetails;