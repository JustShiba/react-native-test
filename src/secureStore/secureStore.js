import * as SecureStore from 'expo-secure-store';
import { USER__TOKEN } from '../redux/constances/constances';

export async function saveToken(key, value) {
    await SecureStore.setItemAsync(USER__TOKEN, value);
}

export async function getToken() {
    let result = await SecureStore.getItemAsync(USER__TOKEN);
    if (result) {
        return result;
    } else {
        return;
    }
}
