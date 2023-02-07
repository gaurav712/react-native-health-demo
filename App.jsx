import {useEffect, useState} from 'react';
import AppleHealthKit from 'react-native-health';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const [stepCount, setStepCount] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bloodType, setBloodType] = useState(0);
  const [gender, setGender] = useState('');
  const [age, setAge] = useState(0);

  const colorScheme = useColorScheme();

  /* Permissions */
  const permissions = {
    permissions: {
      read: [
        AppleHealthKit.Constants.Permissions.Weight,
        AppleHealthKit.Constants.Permissions.Height,
        AppleHealthKit.Constants.Permissions.StepCount,
        AppleHealthKit.Constants.Permissions.BloodType,
        AppleHealthKit.Constants.Permissions.BiologicalSex,
        AppleHealthKit.Constants.Permissions.DateOfBirth,
      ],
      write: [AppleHealthKit.Constants.Permissions.Steps],
    },
  };

  useEffect(() => {
    AppleHealthKit.initHealthKit(permissions, error => {
      if (error) {
        console.log('[ERROR] Cannot grant permissions!', error);
      }

      /* Can now read or write to HealthKit */

      const options = {
        startDate: new Date(2020, 1, 1).toISOString(),
      };

      AppleHealthKit.getHeartRateSamples(options, (_, results) => {
        /* Samples are now collected from HealthKit */
        console.log(JSON.stringify(results));
      });

      /* STEP COUNT */
      let stepOptions = {
        includeManuallyAdded: false, // optional: default true
      };

      AppleHealthKit.getStepCount(stepOptions, (err, results) => {
        if (err) {
          return;
        }
        const {value} = results;
        setStepCount(value);
      });

      /* HEIGHT & WEIGHT */
      AppleHealthKit.getLatestWeight({}, (err, results) => {
        if (err) {
          console.log('error getting latest weight: ', err);
          return;
        }
        const {value} = results;
        setWeight((value * 0.4535924).toFixed(0));
      });

      AppleHealthKit.getLatestHeight({}, (err, results) => {
        if (err) {
          console.log('error getting latest height: ', err);
          return;
        }
        const {value} = results;
        setHeight((value * 2.54).toFixed(0));
      });

      /* BLOOD TYPE */
      AppleHealthKit.getBloodType(null, (err, results) => {
        if (err) {
          return;
        }
        const {value} = results;
        setBloodType(value);
      });

      /* GENDER */
      AppleHealthKit.getBiologicalSex(null, (err, results) => {
        if (err) {
          return;
        }
        const {value} = results;
        setGender(value);
      });

      /* DOB */
      AppleHealthKit.getDateOfBirth(null, (err, results) => {
        if (err) {
          return;
        }
        const {age} = results;
        setAge(age);
      });
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={[
          styles.header,
          {color: colorScheme == 'dark' ? 'white' : 'black'},
        ]}>
        About Me
      </Text>
      <View style={styles.profileContainer}>
        <Text
          style={[
            styles.text,
            {color: colorScheme == 'dark' ? 'white' : 'black'},
          ]}>{`Height: ${height} centimeters`}</Text>
        <Text
          style={[
            styles.text,
            {color: colorScheme == 'dark' ? 'white' : 'black'},
          ]}>{`Weight: ${weight} kilograms`}</Text>
        <Text
          style={[
            styles.text,
            {color: colorScheme == 'dark' ? 'white' : 'black'},
          ]}>{`Blood Group: ${bloodType}`}</Text>
        <Text
          style={[
            styles.text,
            {color: colorScheme == 'dark' ? 'white' : 'black'},
          ]}>{`Gender: ${gender}`}</Text>
        <Text
          style={[
            styles.text,
            {color: colorScheme == 'dark' ? 'white' : 'black'},
          ]}>{`Age: ${age}`}</Text>
      </View>
      <Text
        style={[
          styles.header,
          {color: colorScheme == 'dark' ? 'white' : 'black'},
        ]}>
        Health Info
      </Text>
      <View style={styles.profileContainer}>
        <Text
          style={[
            styles.text,
            {color: colorScheme == 'dark' ? 'white' : 'black'},
          ]}>{`Steps walked today: ${stepCount}`}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    paddingHorizontal: 20,
  },
  header: {
    margin: 20,
    fontSize: 24,
  },
  text: {
    fontSize: 16,
  },
});

export default App;
