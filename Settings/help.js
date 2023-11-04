import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function Help() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Help and Support</Text>
      <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
      <Text style={styles.text}>
        1. How do I make a donation to a nonprofit organization?
        {'\n'}
        - You can make a donation by navigating to the organization's profile and clicking the "Donate" button.
        {'\n\n'}

        2. Can I get a receipt for my donations?
        {'\n'}
        - Yes, you can receive a receipt for your donations for tax purposes. We'll send it to your registered email.
        {'\n\n'}

        3. How can I contact support?
        {'\n'}
        - If you need help, please send an email to charityconnect@gmail.com or call our support line at (011) 456-7890 or go to the contact us page .
        {'\n'}
        
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
  },
});

export default Help;
