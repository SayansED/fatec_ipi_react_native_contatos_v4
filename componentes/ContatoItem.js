import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import cores from '../constantes/cores';

const ContatoItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onSelect} style={styles.contatoItem}>
            <Image 
                style={styles.imagem}
                source={{uri: props.imagem}}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.id}>{props.id}</Text>
                <Text style={styles.nomeContato}>{props.nomeContato}</Text>
                <Text style={styles.telefone}>{props.telefone}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    contatoItem: {
        borderBottomColor: '#95a5a6',
        borderBottomWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imagem: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#95a5a6',
        borderColor: cores.primary,
        borderWidth: 1
    },
    infoContainer: {
        marginLeft: 28,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    nomeContato: {
        color: '#2c3e50',
        fontSize: 18,
        marginBottom: 8
    },
    telefone: {
        color: '#555',
        fontSize: 16
    },
    id: {
        color: '#2c3e50',
        fontSize: 12
    }
   });

export default ContatoItem;