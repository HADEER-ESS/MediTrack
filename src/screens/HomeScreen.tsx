import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { userInfo } from '../utils/db'
import mainStyle from '../constant/styles'
import COLORS from '../constant/colors'
import AddBtn from '../components/AddBtn'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation()
    const welcomeName = userInfo.getString("user_name")
    const handleAddMedication = () => {
        // Handle the logic to add a new medication
        navigation.navigate("medication" as never)
    }
    return (
        <View style={[mainStyle.screenView, { marginHorizontal: 20 }]}>
            <Text style={mainStyle.mainText}>Welcome, {welcomeName}</Text>
            <View style={styles.titleContainer}>
                <Text style={styles.mainTitleStyle}>Medicals :</Text>
                <AddBtn onPress={() => handleAddMedication()} />
            </View>
            {/* section where display the CARDs of user medications */}

            <Text style={styles.mainTitleStyle}>Calender :</Text>
            {/* section where display the CALENDER VIEW in month */}

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    mainTitleStyle: {
        fontSize: 24,
        color: COLORS.PRIMARY,
        fontWeight: 'bold',
    }
})