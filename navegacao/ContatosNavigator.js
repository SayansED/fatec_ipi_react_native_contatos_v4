import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import DetalhesDoContatoTela from '../interface/DetalhesDoContatoTela';
import ListaDeContatosTela from '../interface/ListaDeContatosTela';
import NovoContatoTela from '../interface/NovoContatoTela';

const ContatosNavigator = createStackNavigator ({
    ListaDeContatos: ListaDeContatosTela,
    DetalhesDoContato: DetalhesDoContatoTela,
    NovoContato: NovoContatoTela
});

export default createAppContainer (ContatosNavigator);