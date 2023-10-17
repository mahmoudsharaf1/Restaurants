import { ImageBackground, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import styles from './styles';

const RestaurantsItems = ({
    listView,
    name,
    review_count,
    rating,
    image_url,
    onPress
}) => {
    return (
        <View>
            {listView == 'rows' ? (

                <TouchableOpacity onPress={onPress} style={styles.cardView}>
                    <ImageBackground
                        source={{ uri: image_url }}
                        style={styles.imageCard}
                    >
                        <View style={styles.dataView}>
                            <Text style={styles.restaurantName}>{name}</Text>
                            <View style={styles.ratingView}>
                                <Text style={styles.ratingText}>{`${rating} Stars, ${review_count} Reviews`}</Text>

                            </View>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>

            ) : (

                <TouchableOpacity onPress={onPress} style={styles.columnsView}>
                    <ImageBackground
                        source={{ uri: image_url }}
                        style={styles.imageColumns}
                    >
                        <View style={styles.dataView2}>
                            <Text style={styles.restaurantName2}>{name}</Text>
                            <View style={styles.ratingView2}>
                                <Text style={styles.ratingText2}>{`${rating} Stars, ${review_count} Reviews`}</Text>
                            </View>

                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            )}
        </View>
    )
}

export default RestaurantsItems;