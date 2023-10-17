import { StyleSheet, Text, View } from 'react-native'
import { ScaleHeight, ScaleWidth } from '../../../common/foundation'


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerView: {
        alignSelf: 'center',
        marginTop: ScaleHeight(60)
    },
    name: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: ScaleWidth(21)
    },
    displayAddress: {
        textAlign: 'center',
        fontSize: ScaleWidth(16),
        marginTop: ScaleHeight(9)
    },
    map: {
        height: ScaleHeight(230),
        marginTop: ScaleHeight(70),
    },
    loadingView: {
        marginTop: ScaleHeight(50)
    },
    displayDataView: {

        marginTop: ScaleHeight(7),
        borderBottomWidth: 1
    },
    displayName: {
        fontWeight: '500',
        fontSize: ScaleWidth(17),
        marginLeft: ScaleWidth(15)
    },
    displayPhone: {
        paddingVertical: ScaleHeight(15),
        marginLeft: ScaleWidth(15)
    },
    categoriesView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: ScaleHeight(9)
    },

    icon: {
        paddingHorizontal: ScaleWidth(20),

    },
    categoriesTitle: {
        fontSize: ScaleWidth(15),
        fontWeight: '500'
    },
    alias: {}
})
export default styles