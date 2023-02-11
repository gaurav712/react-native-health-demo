import {useEffect, useState} from 'react';
import AppleHealthKit from 'react-native-health';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const [bloodType, setBloodType] = useState(0);

  /* Activity */
  const [activeEnergy, setActiveEnergy] = useState(0);
  const [basalEnergy, setBasalEnergy] = useState(0);
  const [standingTime, setStandingTime] = useState(0);

  /* Body */
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [heightSamples, setHeightSamples] = useState('');
  const [weightSamples, setWeightSamples] = useState('');
  const [temperature, setTemperature] = useState(0);
  const [temperatureSamples, setTemperatureSamples] = useState('');
  const [fatPercentage, setFatPercentage] = useState(0);
  const [fatPercentageSamples, setFatPercentageSamples] = useState('');
  const [leanBodyMass, setLeanBodyMass] = useState(0);
  const [leanBodyMassSamples, setLeanBodyMassSamples] = useState('');

  /* Characteristics */
  const [gender, setGender] = useState('');
  const [age, setAge] = useState(0);

  /* Diet */
  const [energyConsumedSamples, setEnergyConsumedSamples] = useState('');
  const [proteinSamples, setProteinSamples] = useState('');
  const [totalFatSamples, setTotalFatSamples] = useState('');
  const [water, setWater] = useState(0);
  const [waterSamples, setWaterSamples] = useState('');

  /* Fitness */
  const [dailyStepCountSamples, setDailyStepCountSamples] = useState('');
  const [stepCount, setStepCount] = useState(0);
  const [samples, setSamples] = useState('');
  const [distanceSamples, setDistanceSamples] = useState('');
  const [distance, setDistance] = useState(0);
  const [distanceSwimmingSamples, setDistanceSwimmingSamples] = useState('');
  const [distanceSwimming, setDistanceSwimming] = useState(0);
  const [distanceCyclingSamples, setDistanceCyclingSamples] = useState('');
  const [distanceCycling, setDistanceCycling] = useState(0);
  const [distanceFlightsClimbedSamples, setDistanceFlightsClimbedSamples] =
    useState('');
  const [distanceFlightsClimbed, setDistanceFlightsClimbed] = useState(0);

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

      /* ACTIVITY */
      let activityOptions = {
        startDate: new Date(2021, 0, 0).toISOString(), // required
      };
      AppleHealthKit.getActiveEnergyBurned(activityOptions, (err, results) => {
        if (err) {
          return;
        }
        console.log('active energy', results);
      });

      AppleHealthKit.getBasalEnergyBurned(activityOptions, (err, results) => {
        if (err) {
          return;
        }
        console.log('basal energy', results);
      });

      AppleHealthKit.getAppleStandTime(activityOptions, (err, results) => {
        if (err) {
          return;
        }
        console.log(results);
      });

      /* BODY */
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

      let samplesOptions = {
        startDate: new Date(2021, 0, 0).toISOString(),
        limit: 5,
      };

      AppleHealthKit.getBodyTemperatureSamples(
        samplesOptions,
        (err, results) => {
          if (err) {
            return;
          }
          console.log('temperature samples', results);
        },
      );

      AppleHealthKit.getLatestBodyFatPercentage(null, (err, results) => {
        if (err) {
          return;
        }
        console.log('body fat percentage', results);
      });

      AppleHealthKit.getBodyFatPercentageSamples(
        samplesOptions,
        (err, results) => {
          if (err) {
            return;
          }
          console.log('body fat percentage samples', results);
        },
      );

      AppleHealthKit.getLatestLeanBodyMass(null, (err, results) => {
        if (err) {
          return;
        }
        console.log('lean mass', results);
      });

      AppleHealthKit.getLeanBodyMassSamples(samplesOptions, (err, results) => {
        if (err) {
          return;
        }
        console.log('lean body mass samples', results);
      });

      /* FITNESS */
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
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* ACTIVITY */}
        <Text
          style={[
            styles.header,
            {color: colorScheme == 'dark' ? 'white' : 'black'},
          ]}>
          Activity
        </Text>
        <View style={styles.profileContainer}>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Active energy burnt: ${activeEnergy}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Basal energy burnt: ${basalEnergy}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Standing time: ${standingTime}`}</Text>
        </View>

        {/* BODY */}
        <Text
          style={[
            styles.header,
            {color: colorScheme == 'dark' ? 'white' : 'black'},
          ]}>
          Body
        </Text>
        <View style={styles.profileContainer}>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Height: ${height}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Weight: ${weight}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Height Samples: ${heightSamples}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Weight Samples: ${weightSamples}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Temperature: ${temperature}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Temperature Samples: ${temperatureSamples}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Body Fat Percentage: ${fatPercentage}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Fat Percentage Samples: ${fatPercentageSamples}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Lean Body Mass: ${leanBodyMass}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Lean Body Mass Samples: ${leanBodyMassSamples}`}</Text>
        </View>

        {/* CHARACTERISTICS */}
        <Text
          style={[
            styles.header,
            {color: colorScheme == 'dark' ? 'white' : 'black'},
          ]}>
          Characteristics
        </Text>
        <View style={styles.profileContainer}>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Biological Sex: ${gender}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Age: ${age}`}</Text>
        </View>

        {/* CLINICAL RECORDS */}
        <Text
          style={[
            styles.header,
            {color: colorScheme == 'dark' ? 'white' : 'black'},
          ]}>
          Clinical Records
        </Text>
        <View style={styles.profileContainer}>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Clinical Records: `}</Text>
        </View>

        {/* DIET */}
        <Text
          style={[
            styles.header,
            {color: colorScheme == 'dark' ? 'white' : 'black'},
          ]}>
          Diet
        </Text>
        <View style={styles.profileContainer}>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Energy Consumed Samples: ${energyConsumedSamples}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Protein Samples: ${proteinSamples}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Total Fat Samples: ${totalFatSamples}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Water: ${water}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Water Samples: ${waterSamples}`}</Text>
        </View>

        {/* FITNESS */}
        <Text
          style={[
            styles.header,
            {color: colorScheme == 'dark' ? 'white' : 'black'},
          ]}>
          Fitness
        </Text>
        <View style={styles.profileContainer}>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Daily Step Count Samples: ${dailyStepCountSamples}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Step Count: ${stepCount}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Fitness Samples: ${samples}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Distance Walking/Running Samples: ${distanceSamples}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Distance Walking/Running: ${distance}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Distance Swimming Samples: ${distanceSwimmingSamples}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Distance Swimming: ${distanceSwimming}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Distance Cycling Samples: ${distanceCyclingSamples}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Distance Cycling: ${distanceCycling}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Flights Climbed Samples: ${distanceFlightsClimbedSamples}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Flights Climbed: ${distanceFlightsClimbed}`}</Text>
        </View>
      </ScrollView>
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
