import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import { Colors, ScaleWidth } from '../../common/foundation';

const Header = ({
    title,
    onPress
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.backButton}>

                <Ionicons
                    name='chevron-back'
                    color={Colors.white}
                    size={ScaleWidth(21)}
                />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header;