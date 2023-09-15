import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { languages, localizations } from '../localizations';

const MenuPage = ({ navigation }) => {
  const setTextsTranslations = (languageCode) => {
    localizations.setLanguage(languageCode);
    navigation.navigate('Content', { selectedLanguageCode: languageCode });
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.headingStyle}>
          Interface language:
        </Text>
        {languages.map((item, key) => (
          <View style={styles.elementContainer} key={key}>
            <Text
              onPress={() => setTextsTranslations(item.code)}
              style={styles.textStyle}>
              {item.name}
            </Text>
          </View>
        ))}
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
    paddingTop: 80,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
  },
  headingStyle: {
    color: '#005',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  elementContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  textStyle: {
    color: '#005',
    fontSize: 25,
    width: '200',
    height: 35,
  },
});

export default MenuPage;
