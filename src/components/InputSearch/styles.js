import { StyleSheet, Text, View } from 'react-native'
import { Colors, ScaleHeight, ScaleWidth } from '../../common/foundation'


const styles = StyleSheet.create({
    container: {
        marginHorizontal: ScaleWidth(15),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: ScaleHeight(1),
        paddingHorizontal: ScaleHeight(11),
        marginTop: ScaleHeight(19),
        borderRadius: ScaleHeight(7)
    },
    input: {
        color: Colors.black,
        alignSelf: 'flex-start',
        flexGrow: 1,
        paddingVertical: ScaleHeight(9)
    }
})
export default styles