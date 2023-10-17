import { StyleSheet } from 'react-native'
import { Colors, ScaleHeight, ScaleWidth } from '../../common/foundation'


const styles = StyleSheet.create({
    cardView: {
        marginTop: ScaleHeight(9)
    },
    imageCard: {
        height: ScaleHeight('25%')
    },
    restaurantName: {
        color: Colors.white,
        fontSize: ScaleWidth(21),
        fontWeight: '500'
    },
    dataView: {
        marginLeft: ScaleWidth(13),
        marginTop: ScaleHeight(70)
    },
    ratingView: {
        backgroundColor: Colors.white,
        padding: ScaleHeight(4),
        borderRadius: ScaleHeight(7),
        width: ScaleWidth('60%'),
        marginTop: ScaleHeight(43)
    },
    ratingText: {
        textAlign: 'center',
    },


    columnsView: {
        marginTop: ScaleHeight(9),
        marginHorizontal: ScaleWidth(15)
    },
    imageColumns: {
        width: ScaleWidth('42%'),
        height: ScaleHeight(140),

    },
    dataView2: {
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 1
    },
    restaurantName2: {
        color: Colors.white,
        fontSize: ScaleWidth(18),
        fontWeight: '500'
    },
    ratingView2: {
        backgroundColor: Colors.white,
        padding: ScaleHeight(4),
        borderRadius: ScaleHeight(7),
        maxWidth: ScaleWidth('40%'),
        alignSelf: 'center'

    },
    ratingText2: {
        textAlign: 'center',
    }
})
export default styles