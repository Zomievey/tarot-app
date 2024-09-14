import React from 'react';
import { View, Text } from 'react-native';
import styles from './FooterStyles';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>
        © {currentYear} Pocket Tarot. All Rights Reserved.
      </Text>
    </View>
  );
};

export default Footer;
