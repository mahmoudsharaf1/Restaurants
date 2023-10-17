import { StyleSheet, Text, View } from 'react-native'
import { Colors, ScaleHeight, ScaleWidth } from '../../common/foundation'



const styles = StyleSheet.create({
    container: {
        marginHorizontal: ScaleWidth(15),
        marginTop: ScaleHeight(27),
        flexDirection: 'row',
        alignItems: 'center'
    },
    backButton: {
        width: ScaleWidth(45),
        height: ScaleHeight(45),
        borderRadius: ScaleHeight(7),
        backgroundColor: Colors.black,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: '500',
        fontSize: ScaleWidth(23),
        textAlign: 'center',
        flexGrow: 1,
        right: ScaleWidth(20),
    }
})
export default styles