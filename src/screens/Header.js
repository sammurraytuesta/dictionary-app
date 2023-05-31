import { View, StyleSheet, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../components/svgr/Logo';
import ArrowDownIcon from '../components/svgr/ArrowDownIcon';
import MoonIcon from '../components/svgr/MoonIcon';

const Header = () => {
    const navigation = useNavigation();

    const navigateToThemeSetting = () => {
        navigation.navigate('Theme');
    };
    
    return (
        <View style={styles.header}>
            <Logo />
            <View style={styles.controls}>
                <ArrowDownIcon />
                <Pressable onPress={navigateToThemeSetting}>
                    <MoonIcon />
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: '5%',
        marginTop: 10,
    },
    controls: {
        width: '20%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default Header;
