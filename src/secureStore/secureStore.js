import * as SecureStore from 'expo-secure-store';

export async function localStore(method, key, value) {
    switch (method) {
        case 'save':
            return await SecureStore.setItemAsync(key, value);
        case 'get':
            return (await SecureStore.getItemAsync(key)) || null;
        case 'remove':
            return await SecureStore.deleteItemAsync(key);
    }
}
