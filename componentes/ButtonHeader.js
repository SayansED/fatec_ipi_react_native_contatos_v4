import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';
import cores from '../constantes/cores';

const ButtonHeader = (props) => {
    return (
        <HeaderButton 
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS === 'android' ? 'black' : cores.primary}
        />
    )
}

export default ButtonHeader;