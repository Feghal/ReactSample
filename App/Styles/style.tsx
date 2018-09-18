import {StyleSheet} from "react-native";

export const DetailScreenStyle = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center'
    },
    imageView: {
        width: '90%',
        height: 100,
        borderRadius : 7,
        padding:10,
    },
    textView: {
        width:'100%',
        textAlignVertical:'center',
        padding:10,
        color: '#002b9d',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center"
    },
    textInput: {
        marginBottom:60,
        height: 40,
        width: '60%',
    }
});

export const ListItemStyle = StyleSheet.create({
    imageView: {
        width: '50%',
        height: 100 ,
        margin: 7,
        borderRadius : 7
    },
    textView: {
        width:'50%',
        textAlignVertical:'center',
        padding:10,
        color: '#000'
    }
});

export const PhotoListStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
});

export const Status = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    errorTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    errorMessage: {
        textAlign: 'center',
        padding: 20
    }
});
