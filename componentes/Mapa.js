import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import ENV from '../env';

const Mapa = (props) => {

    let mapaURL;

    if (props.localizacao) {
        mapaURL = `https://maps.googleapis.com/maps/api/staticmap?center=${props.localizacao.lat},${props.localizacao.lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:C%7C${props.localizacao.lat},${props.localizacao.lng}&key=${ENV.apiKey}`
    }

    return (
        <View style={{ ...estilos.Mapa, ...props.style}}>
        {
            props.localizacao ?
            < Image
                style={estilos.mapaImagem}
                source={{uri: mapaURL}}
            />:
            props.children
        }
        </View>
    )

}

const estilos = StyleSheet.create({
    Mapa: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapaImagem: {
        width: '100%',
        height: '100%'
    }
});

export default Mapa;