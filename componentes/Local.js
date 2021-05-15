import React, { useState } from 'react';
import { View, Button, Text, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import cores from '../constantes/cores';
import Mapa from './Mapa';

const Local = (props) => {

    const [estaCapturando, setEstaCapturando] = useState(false);
    const [localizacao, setLocalizacao] = useState();

    const verificarSePossuiPermissao = async () => {
        const resultado = await Permissions.askAsync(Permissions.LOCATION);
        if (resultado.status !== 'granted') {
            Alert.alert(
                "Sem permissão para uso do mecanismo de localização",
                "É preciso liberar acesso ao mecanismo de localização",
                [{text: 'OK'}]
            )
            return false;
        }
        return true;
    }

    const capturarLocalizacao = async () => {
        const temPermissao = verificarSePossuiPermissao();
        if (temPermissao) {
            try{
                setEstaCapturando(true);
                const localizacao = await Location.getCurrentPositionAsync({ timeout: 8000 });
                setLocalizacao({
                    lat: localizacao.coords.latitude,
                    lng: localizacao.coords.longitude
                });
                console.log (localizacao);
            }
            catch (err) {
                Alert.alert(
                    "Impossível obter localização",
                    "Tente novamente mais tarde ou escolha uma no mapa",
                    [{text: "OK"}]
                );
            }
            setEstaCapturando(false);
        }
    }

    return (
        <View style={estilos.Local}> 
            <Mapa style={estilos.Mapa} localizacao={localizacao}>
                {
                    estaCapturando ? 
                    <ActivityIndicator 
                        size="large"
                        color={cores.primary}
                    /> : 
                    <Text>Não há localizações disponíveis.</Text>
                } 
            </Mapa>
            <Button 
                title="Obter localização"
                cor={cores.primary}
                onPress={capturarLocalizacao}
            />
        </View>
    );

}

const estilos = StyleSheet.create({
    Local: {
        marginBottom: 16
    },
    Mapa: {
        marginBottom: 12,
        width: '100%',
        height: 150,
        borderColor: '#95a5a6',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'        
    }
});

export default Local;