import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";
import Checkbox from "expo-checkbox";

const RegisterMember = () => {
  const [station, setStation] = useState<string>("");
  const [commStatus, setCommStatus] = useState<string>("");
  const [isBaptChecked, setBaptChecked] = useState(false);
  const [isConfChecked, setConfChecked] = useState(false);
  const [isEucChecked, setEucChecked] = useState(false);
  const [isMarrChecked, setMarrChecked] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <StatusBar barStyle="dark-content" backgroundColor="#0cc" translucent />
        <View style={styles.container}>
          <Text style={styles.title}>RegisterMember New Member</Text>

          <View style={styles.div}>
            <Text style={styles.label}>Station:</Text>
            <Picker
              selectedValue={station}
              onValueChange={(itemValue) => setStation(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select" value="" />
              <Picker.Item label="Station1" value="station1" />
              <Picker.Item label="Station2" value="station2" />
              <Picker.Item label="Station3" value="station3" />
              <Picker.Item label="Station4" value="station4" />
              <Picker.Item label="Station5" value="station5" />
            </Picker>
          </View>

          <View style={styles.div}>
            <Text style={styles.label}>Name:</Text>
            <TextInput style={styles.input} />
          </View>

          <View style={styles.div}>
            <Text style={styles.label}>ID No:</Text>
            <TextInput style={styles.input} />
          </View>

          <View style={styles.div}>
            <Text style={styles.label}>Cell:</Text>
            <TextInput style={styles.input} />
          </View>

          <View style={styles.div}>
            <Text style={styles.label}>Yr of Birth:</Text>
            <TextInput style={styles.input} />
          </View>

          <View style={styles.div}>
            <Text style={styles.label}>Comm. Status:</Text>
            <Picker
              selectedValue={commStatus}
              onValueChange={(itemValue) => setCommStatus(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select" value="" />
              <Picker.Item label="Commissioned" value="Commissioned" />
              <Picker.Item label="In Waiting" value="InWaiting" />
              <Picker.Item label="Not Commissioned" value="notCommissioned" />
            </Picker>
          </View>

          <View style={styles.div}>
            <Text style={styles.label}>Commission No:</Text>
            <TextInput style={styles.input} />
          </View>

          <View style={styles.div}>
            <Text style={styles.label}>Comm. Status:</Text>
            <Picker
              selectedValue={commStatus}
              onValueChange={(itemValue) => setCommStatus(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select" value="" />
              <Picker.Item label="Active" value="active" />
            </Picker>
          </View>

          <View style={styles.div}>
            <Text style={styles.label}>Sacraments:</Text>
            <View style={styles.section}>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  value={isBaptChecked}
                  onValueChange={setBaptChecked}
                />
                <Text style={styles.paragraph}>Bapt</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  value={isConfChecked}
                  onValueChange={setConfChecked}
                />
                <Text style={styles.paragraph}>Conf</Text>
              </View>

              <View style={styles.checkboxContainer}>
                <Checkbox value={isEucChecked} onValueChange={setEucChecked} />
                <Text style={styles.paragraph}>Euc</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  value={isMarrChecked}
                  onValueChange={setMarrChecked}
                />
                <Text style={styles.paragraph}>Marr</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterMember;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  scrollContainer: {
    alignItems: "stretch",
    paddingBottom: 20,
  },
  container: {
    paddingHorizontal: 16,
  },
  div: {
    marginBottom: 20,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#0ccc",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    width: "100%",
  },
  picker: {
    height: 50,
    width: "100%",
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
  },
  section: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    marginLeft: 5,
    fontSize: 16,
  },
});
