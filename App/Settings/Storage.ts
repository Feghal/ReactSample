import {AsyncStorage} from "react-native";


export function storeWith(key: string, value: any) {
     AsyncStorage.setItem(key, JSON.stringify(value));
}

export function fetchWith(key: string, callback: (result: JSON) => void) {
    return AsyncStorage.getItem(key, (error, result) => {
        const res = JSON.parse(result);
        callback(res);
    });
}