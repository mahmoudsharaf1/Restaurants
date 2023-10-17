import { StyleSheet, Text, View } from 'react-native'
import { Colors, ScaleHeight, ScaleWidth } from '../../common/foundation'



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: ScaleWidth(15),
        marginTop: ScaleHeight(17)
    },
    text: {
        fontSize: ScaleWidth(18),
        fontWeight: '700',

    }
})
export default styles