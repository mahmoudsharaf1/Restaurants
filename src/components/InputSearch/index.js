import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import styles from './styles';
import { ScaleWidth } from '../../common/foundation';
import { TextInput } from 'react-native';

const InputSearch = ({
    value,
    onChangeText,
    onDeleteInput
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <AntDesign
                    name='search1'
                    size={ScaleWidth(23)}
                />
            </TouchableOpacity>

            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={styles.input}
            />
            {value != '' ? (
                <TouchableOpacity onPress={onDeleteInput}>
                    <FontAwesome6
                        name='x'
                        size={ScaleWidth(15)}
                    />
                </TouchableOpacity>
            ) : null}
        </View>
    )
}

export default InputSearch;