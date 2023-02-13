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
  /* Activity */
  const [activeEnergy, setActiveEnergy] = useState(0);
  const [basalEnergy, setBasalEnergy] = useState(0);
  const [standingTime, setStandingTime] = useState(0);

  /* Body */
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [heightSamples, setHeightSamples] = useState('');
  const [weightSamples, setWeightSamples] = useState('');
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

  /* Hearing */
  const [environmentalAudioExposure, setEnvironmentalAudioExposure] =
    useState('');
  const [headphoneAudioExposure, setHeadphoneAudioExposure] = useState('');

  /* Lab Tests */
  const [bloodType, setBloodType] = useState(0);
  const [bloodAlcoholContentSamples, setBloodAlcoholContentSamples] =
    useState('');
  const [bloodAlcoholContent, setBloodAlcoholContent] = useState(0);
  const [bloodGlucoseSamples, setBloodGlucoseSamples] = useState('');

  /* Nutrition */
  const [carbohydratesSamples, setCarbohydratesSamples] = useState('');

  /* MINDFULNESS */
  const [mindfulSessions, setMindfulSessions] = useState('');

  /* Sleep */
  const [sleepSamples, setSleepSamples] = useState('');

  /* Vitals */
  const [bloodPressureSamples, setBloodPressureSamples] = useState('');
  const [electrocardiogramSamples, setElectrocardiogramSamples] = useState('');
  const [heartRateSamples, setHeartRateSamples] = useState('');
  const [heartRateVariabilitySamples, setHeartRateVariabilitySamples] =
    useState('');
  const [heartBeatSeriesSamples, setHeartBeatSeriesSamples] = useState('');
  const [oxygenSaturationSamples, setOxygenSaturationSamples] = useState('');
  const [restingHeartRateSamples, setRestingHeartRateSamples] = useState('');
  const [vo2MaxSamples, setVo2MaxSamples] = useState('');
  const [bmi, setBmi] = useState(0);
  const [bmiSamples, setBmiSamples] = useState('');
  const [respiratoryRateSamples, setRespiratoryRateSamples] = useState('');
  const [walkingHeartRateAverage, setWalkingHeartRateAverage] = useState('');

  /* Workout */
  const [workoutSamples, setWorkoutSamples] = useState('');

  const colorScheme = useColorScheme();

  /* Permissions */
  const permissions = {
    permissions: {
      read: [
        AppleHealthKit.Constants.Permissions.ActiveEnergyBurned,
        AppleHealthKit.Constants.Permissions.ActivitySummary,
        AppleHealthKit.Constants.Permissions.AppleExerciseTime,
        AppleHealthKit.Constants.Permissions.AppleStandTime,
        AppleHealthKit.Constants.Permissions.BasalEnergyBurned,
        AppleHealthKit.Constants.Permissions.BiologicalSex,
        AppleHealthKit.Constants.Permissions.BloodType,
        AppleHealthKit.Constants.Permissions.BloodAlcoholContent,
        AppleHealthKit.Constants.Permissions.BloodGlucose,
        AppleHealthKit.Constants.Permissions.BloodPressureDiastolic,
        AppleHealthKit.Constants.Permissions.BloodPressureSystolic,
        AppleHealthKit.Constants.Permissions.BodyFatPercentage,
        AppleHealthKit.Constants.Permissions.BodyMass,
        AppleHealthKit.Constants.Permissions.BodyMassIndex,
        AppleHealthKit.Constants.Permissions.BodyTemperature,
        AppleHealthKit.Constants.Permissions.DateOfBirth,
        AppleHealthKit.Constants.Permissions.Biotin,
        AppleHealthKit.Constants.Permissions.Caffeine,
        AppleHealthKit.Constants.Permissions.Calcium,
        AppleHealthKit.Constants.Permissions.Carbohydrates,
        AppleHealthKit.Constants.Permissions.Chloride,
        AppleHealthKit.Constants.Permissions.Cholesterol,
        AppleHealthKit.Constants.Permissions.Copper,
        AppleHealthKit.Constants.Permissions.EnergyConsumed,
        AppleHealthKit.Constants.Permissions.EnvironmentalAudioExposure,
        AppleHealthKit.Constants.Permissions.FatMonounsaturated,
        AppleHealthKit.Constants.Permissions.FatPolyunsaturated,
        AppleHealthKit.Constants.Permissions.FatSaturated,
        AppleHealthKit.Constants.Permissions.FatTotal,
        AppleHealthKit.Constants.Permissions.Fiber,
        AppleHealthKit.Constants.Permissions.Folate,
        AppleHealthKit.Constants.Permissions.HeadphoneAudioExposure,
        AppleHealthKit.Constants.Permissions.Iodine,
        AppleHealthKit.Constants.Permissions.Iron,
        AppleHealthKit.Constants.Permissions.Magnesium,
        AppleHealthKit.Constants.Permissions.Manganese,
        AppleHealthKit.Constants.Permissions.Molybdenum,
        AppleHealthKit.Constants.Permissions.Niacin,
        AppleHealthKit.Constants.Permissions.OxygenSaturation,
        AppleHealthKit.Constants.Permissions.PantothenicAcid,
        AppleHealthKit.Constants.Permissions.Phosphorus,
        AppleHealthKit.Constants.Permissions.Potassium,
        AppleHealthKit.Constants.Permissions.Protein,
        AppleHealthKit.Constants.Permissions.Riboflavin,
        AppleHealthKit.Constants.Permissions.Selenium,
        AppleHealthKit.Constants.Permissions.Sodium,
        AppleHealthKit.Constants.Permissions.Sugar,
        AppleHealthKit.Constants.Permissions.Thiamin,
        AppleHealthKit.Constants.Permissions.VitaminA,
        AppleHealthKit.Constants.Permissions.VitaminB12,
        AppleHealthKit.Constants.Permissions.VitaminB6,
        AppleHealthKit.Constants.Permissions.VitaminC,
        AppleHealthKit.Constants.Permissions.VitaminD,
        AppleHealthKit.Constants.Permissions.VitaminE,
        AppleHealthKit.Constants.Permissions.VitaminK,
        AppleHealthKit.Constants.Permissions.Zinc,
        AppleHealthKit.Constants.Permissions.Water,
        AppleHealthKit.Constants.Permissions.DistanceCycling,
        AppleHealthKit.Constants.Permissions.DistanceSwimming,
        AppleHealthKit.Constants.Permissions.DistanceWalkingRunning,
        AppleHealthKit.Constants.Permissions.Electrocardiogram,
        AppleHealthKit.Constants.Permissions.FlightsClimbed,
        AppleHealthKit.Constants.Permissions.HeartbeatSeries,
        AppleHealthKit.Constants.Permissions.HeartRate,
        AppleHealthKit.Constants.Permissions.RestingHeartRate,
        AppleHealthKit.Constants.Permissions.HeartRateVariability,
        AppleHealthKit.Constants.Permissions.Height,
        AppleHealthKit.Constants.Permissions.LeanBodyMass,
        AppleHealthKit.Constants.Permissions.MindfulSession,
        AppleHealthKit.Constants.Permissions.NikeFuel,
        AppleHealthKit.Constants.Permissions.RespiratoryRate,
        AppleHealthKit.Constants.Permissions.SleepAnalysis,
        AppleHealthKit.Constants.Permissions.StepCount,
        AppleHealthKit.Constants.Permissions.Steps,
        AppleHealthKit.Constants.Permissions.Vo2Max,
        AppleHealthKit.Constants.Permissions.WaistCircumference,
        AppleHealthKit.Constants.Permissions.WalkingHeartRateAverage,
        AppleHealthKit.Constants.Permissions.Weight,
        AppleHealthKit.Constants.Permissions.Workout,
        AppleHealthKit.Constants.Permissions.WorkoutRoute,
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

      /* ACTIVITY */
      let activityOptions = {
        startDate: new Date(2023, 1, 11).toISOString(), // required
      };
      AppleHealthKit.getActiveEnergyBurned(activityOptions, (err, results) => {
        if (err) {
          return;
        }
        setActiveEnergy(
          JSON.stringify(results.map(item => item.value.toFixed(2))),
        );
      });

      AppleHealthKit.getBasalEnergyBurned(activityOptions, (err, results) => {
        if (err) {
          return;
        }
        setBasalEnergy(
          JSON.stringify(results.map(item => item.value.toFixed(2))),
        );
      });

      AppleHealthKit.getAppleStandTime(activityOptions, (err, results) => {
        if (err) {
          return;
        }
        setStandingTime(JSON.stringify(results.map(item => item.value)));
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

      AppleHealthKit.getHeightSamples(samplesOptions, (err, results) => {
        if (err) {
          return;
        }
        setHeightSamples(
          JSON.stringify(results.map(item => (item.value * 2.54).toFixed(2))),
        );
      });

      AppleHealthKit.getWeightSamples(samplesOptions, (err, results) => {
        if (err) {
          return;
        }
        setWeightSamples(
          JSON.stringify(
            results.map(item => (item.value * 0.4535924).toFixed(2)),
          ),
        );
      });

      AppleHealthKit.getBodyTemperatureSamples(
        samplesOptions,
        (err, results) => {
          if (err) {
            return;
          }
          setTemperatureSamples(
            JSON.stringify(results.map(item => item.value)),
          );
        },
      );

      AppleHealthKit.getLatestBodyFatPercentage(null, (err, results) => {
        if (err) {
          return;
        }
        const {value} = results;
        setFatPercentage(value);
      });

      AppleHealthKit.getBodyFatPercentageSamples(
        samplesOptions,
        (err, results) => {
          if (err) {
            return;
          }
          setFatPercentageSamples(
            JSON.stringify(results.map(item => item.value)),
          );
        },
      );

      AppleHealthKit.getLatestLeanBodyMass(null, (err, results) => {
        if (err) {
          return;
        }
        const {value} = results;
        setLeanBodyMass(value);
      });

      AppleHealthKit.getLeanBodyMassSamples(samplesOptions, (err, results) => {
        if (err) {
          return;
        }
        setLeanBodyMassSamples(JSON.stringify(results.map(item => item.value)));
      });

      /* DIET */

      let dietarySampleOptions = {
        startDate: new Date(2021, 0, 0).toISOString(), // required
        endDate: new Date().toISOString(), // required
        limit: 5,
      };

      AppleHealthKit.getEnergyConsumedSamples(
        dietarySampleOptions,
        (err, results) => {
          if (err) {
            return;
          }
          setEnergyConsumedSamples(
            JSON.stringify(results.map(item => item.value)),
          );
        },
      );

      AppleHealthKit.getProteinSamples(dietarySampleOptions, (err, results) => {
        if (err) {
          return;
        }
        setProteinSamples(JSON.stringify(results.map(item => item.value)));
      });

      AppleHealthKit.getTotalFatSamples(
        dietarySampleOptions,
        (err, results) => {
          if (err) {
            return;
          }
          setTotalFatSamples(JSON.stringify(results.map(item => item.value)));
        },
      );

      AppleHealthKit.getWater(null, (err, results) => {
        if (err) {
          return;
        }
        const {value} = results;
        setWater(value);
      });

      AppleHealthKit.getWaterSamples(dietarySampleOptions, (err, results) => {
        if (err) {
          return;
        }
        setWaterSamples(JSON.stringify(results.map(item => item.value)));
      });

      /* FITNESS */

      let fitnessSampleOptions = {
        startDate: new Date(2023, 1, 1).toISOString(),
        endDate: new Date().toISOString(),
        limit: 5,
      };

      AppleHealthKit.getDailyStepCountSamples(
        fitnessSampleOptions,
        (err, results) => {
          if (err) {
            return;
          }
          setDailyStepCountSamples(
            JSON.stringify(results.map(item => item.value.toFixed(0))),
          );
        },
      );

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

      AppleHealthKit.getSamples(
        {...fitnessSampleOptions, type: 'Walking'},
        (err, results) => {
          if (err) {
            return;
          }
          setDistanceSamples(
            JSON.stringify(
              results.map(({device, quantity, start}) => {
                return {
                  device,
                  quantity,
                  date: start,
                };
              }),
              null,
              2,
            ),
          );
        },
      );
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
              {
                color: colorScheme == 'dark' ? 'white' : 'black',
                fontStyle: 'italic',
                color: 'red',
              },
            ]}>{`Fitness Samples can be for 'Walking', 'StairClimbing', 'Running', 'Cycling' or 'Workout'. For instance the following is for 'Walking':`}</Text>
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
              {
                color: colorScheme == 'dark' ? 'white' : 'black',
                fontStyle: 'italic',
                color: 'red',
              },
            ]}>{`Similary it can be done for the following as well:`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Distance Swimming Samples`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Distance Swimming`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Distance Cycling Samples`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Distance Cycling`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Flights Climbed Samples`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Flights Climbed`}</Text>
        </View>

        {/* HEARING */}
        <Text
          style={[
            styles.header,
            {color: colorScheme == 'dark' ? 'white' : 'black'},
          ]}>
          Hearing
        </Text>
        <View style={styles.profileContainer}>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Environmental Audio Exposure: ${environmentalAudioExposure}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Headphone Audio Exposure: ${headphoneAudioExposure}`}</Text>
        </View>

        {/* LAB TESTS */}
        <Text
          style={[
            styles.header,
            {color: colorScheme == 'dark' ? 'white' : 'black'},
          ]}>
          Lab Tests
        </Text>
        <View style={styles.profileContainer}>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Blood Type: ${bloodType}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Blood Alcohol Content Samples: ${bloodAlcoholContentSamples}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Blood Alcohol Content: ${bloodAlcoholContent}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Blood Gluscose Samples: ${bloodGlucoseSamples}`}</Text>
        </View>

        {/* NUTRITION */}
        <Text
          style={[
            styles.header,
            {color: colorScheme == 'dark' ? 'white' : 'black'},
          ]}>
          Nutrition
        </Text>
        <View style={styles.profileContainer}>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Carbohydrates Samples: ${carbohydratesSamples}`}</Text>
        </View>

        {/* MINDFULNESS */}
        <Text
          style={[
            styles.header,
            {color: colorScheme == 'dark' ? 'white' : 'black'},
          ]}>
          Mindful Sessions
        </Text>
        <View style={styles.profileContainer}>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Mindful Sessions: ${mindfulSessions}`}</Text>
        </View>

        {/* SLEEP */}
        <Text
          style={[
            styles.header,
            {color: colorScheme == 'dark' ? 'white' : 'black'},
          ]}>
          Sleep
        </Text>
        <View style={styles.profileContainer}>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Sleep Samples: ${sleepSamples}`}</Text>
        </View>

        {/* VITALS */}
        <Text
          style={[
            styles.header,
            {color: colorScheme == 'dark' ? 'white' : 'black'},
          ]}>
          Vitals
        </Text>
        <View style={styles.profileContainer}>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Blood Pressure Samples: ${bloodPressureSamples}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Electrocardiogram Samples: ${electrocardiogramSamples}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Heart Rate Samples: ${heartRateSamples}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Heart Rate Variability Samples: ${heartRateVariabilitySamples}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Heart Beat Series Samples: ${heartBeatSeriesSamples}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Oxygen Saturation Samples: ${oxygenSaturationSamples}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Resting Heart Rate Samples: ${restingHeartRateSamples}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Vo2Max Samples: ${vo2MaxSamples}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`BMI: ${bmi}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`BMI Samples: ${bmiSamples}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Resoiratory Rate Samples: ${respiratoryRateSamples}`}</Text>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Walking Heart Rate Average: ${walkingHeartRateAverage}`}</Text>
        </View>

        {/* VITALS */}
        <Text
          style={[
            styles.header,
            {color: colorScheme == 'dark' ? 'white' : 'black'},
          ]}>
          Workout
        </Text>
        <View style={styles.profileContainer}>
          <Text
            style={[
              styles.text,
              {color: colorScheme == 'dark' ? 'white' : 'black'},
            ]}>{`Workout Samples: ${workoutSamples}`}</Text>
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
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default App;
