import React from 'react';
import { View, Text, Linking } from 'react-native';
import { STYLES } from './fagito-terms-condition-style';

const FagitoTermsAndCondition = () => (
    <View style={STYLES.termsViewContainer}>
        <Text style={STYLES.termsColor}>By creating this account, you agree to our <Text style={STYLES.linksColor} onPress={() => Linking.openURL('http://www.tinmen.in/termsandconditions.html')}>Terms & Conditions</Text> & <Text style={STYLES.linksColor} onPress={() => Linking.openURL('http://www.tinmen.in/privacypolicy.html')}>Privacy Policy.</Text></Text>
    </View>
);

export default FagitoTermsAndCondition;