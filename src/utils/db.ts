import { createMMKV } from 'react-native-mmkv'

export const db = createMMKV({
    id: "meditrack_db"
})

{/**
    we will store 
    - User name  => to be set at WELCOME home page
    - User MEdications Data
        - Name
        - dosage
        - form
        - start -> end date of medication
        - time of the day to take medication
        - Alarm Time
        - Additional note (Doctor, pharmacy, NOTES)

    - History Data
    */}