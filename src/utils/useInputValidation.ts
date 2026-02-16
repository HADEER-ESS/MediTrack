import { userInfo } from "./db";

const useInputValidation = () => {

    const validateName = (txt: string): boolean => {
        let str = txt.trim();
        const regex = /^[a-zA-Z\s]+$/;
        return regex.test(str);
    }
    const storeNameData = (name: string) => {
        // Store user info in MMKV
        userInfo.set("user_name", name)
    }

    return {
        validateName,
        storeNameData
    }
}

export default useInputValidation