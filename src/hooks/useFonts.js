import * as Font from 'expo-font';

export const useFonts = async () =>
    await Font.loadAsync({
        RobotoSlab_Light: require('../../assets/fonts/RobotoSlab/RobotoSlab-Light.ttf'),
        RobotoSlab_Regular: require('../../assets/fonts/RobotoSlab/RobotoSlab-Regular.ttf'),
        RobotoSlab_Medium: require('../../assets/fonts/RobotoSlab/RobotoSlab-Medium.ttf'),
        RobotoSlab_SemiBold: require('../../assets/fonts/RobotoSlab/RobotoSlab-SemiBold.ttf'),
        RobotoSlab_Bold: require('../../assets/fonts/RobotoSlab/RobotoSlab-Bold.ttf'),
        Pattaya: require('../../assets/fonts/Pattaya/Pattaya-Regular.ttf'),
    });
