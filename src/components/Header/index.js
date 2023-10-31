import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';
import { Colors, ScaleWidth } from '../../common/foundation';

const Header = ({
    title,
    onPress
}) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.backButton}>

                <Entypo
                    name='chevron-left'
                    color={Colors.white}
                    size={ScaleWidth(27)}
                />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header;