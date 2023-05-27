import { View, StyleSheet, Pressable, Linking } from 'react-native';
import Logo from '../components/svgr/Logo';
import ArrowDownIcon from '../components/svgr/ArrowDownIcon';
import MoonIcon from '../components/svgr/MoonIcon';

const Header = () => {
    //maybe replace this whole thing with navigation??
    return (
        <View style={styles.header}>
            <Logo />
            <View style={styles.controls}>
                <ArrowDownIcon />
                <MoonIcon />
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
