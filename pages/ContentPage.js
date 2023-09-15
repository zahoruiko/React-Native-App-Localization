import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { getLanguageName, localizations } from '../localizations';

const ContentPage = ({ route, navigation }) => {
  useEffect(() => {
    const heading = getLanguageName(route.params.selectedLanguageCode);
    navigation.setOptions({ title: heading });
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>
          {localizations.title}
        </Text>
        <Text style={styles.text}>
          {localizations.details}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
    height: '100%'
  },
  title: {
    color: '#005',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 15,
  },
  text: {
    color: '#005',
    fontSize: 25,
    marginTop: 15,
  },
});

export default ContentPage;