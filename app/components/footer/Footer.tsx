import React from 'react';
import { View, Text } from 'react-native';
import styles from './FooterStyles';

export default function Footer(){
  const currentYear = new Date().getFullYear();

  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>
        © {currentYear} Pocket Tarot. All Rights Reserved.
      </Text>
    </View>
  );
};
