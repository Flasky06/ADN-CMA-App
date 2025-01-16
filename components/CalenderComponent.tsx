import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Calendar } from "react-native-calendars"; // Using react-native-calendars

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
}

interface CalendarComponentProps {
  events: Event[];
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({ events }) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  // Ensure events is defined and is an array
  const markedDates =
    events && Array.isArray(events)
      ? events.reduce((acc, event) => {
          acc[event.date] = {
            selected: true,
            selectedColor: "#0ccc", // Red color for the date background
            selectedTextColor: "#fff", // White text color
          };
          return acc;
        }, {})
      : {};

  // Function to render each day's events
  const renderEvents = (date: string) => {
    const dayEvents = events.filter((event) => event.date === date);
    return dayEvents.map((event) => (
      <TouchableOpacity
        key={event.id}
        style={[
          styles.eventCard,
          selectedDate === event.date && styles.selectedEventCard, // Highlight the selected event
        ]}
      >
        <Text style={styles.eventTitle}>{event.title}</Text>
        <Text style={styles.eventDescription}>{event.description}</Text>
        <Text style={styles.eventDate}>{event.date}</Text>{" "}
        {/* Display the date on the card */}
      </TouchableOpacity>
    ));
  };

  // Function to filter events by selected month
  const filterEventsByMonth = (month: string) => {
    const monthStartDate = `${month}-01`;
    const monthEndDate = `${month}-31`;

    return events.filter((event) => {
      return event.date >= monthStartDate && event.date <= monthEndDate;
    });
  };

  return (
    <View style={styles.container}>
      <Calendar
        // Dynamically marking dates
        markedDates={markedDates}
        onDayPress={(day: any) => {
          setSelectedDate(day.dateString); // Set the selected date
          setSelectedMonth(day.dateString.slice(0, 7)); // Extract and set the month (YYYY-MM)
          console.log("Selected day:", day);
        }}
        style={styles.calendar}
      />
      <View style={styles.eventsContainer}>
        <FlatList
          data={events.filter((event) => event.date === selectedDate)} // Filter events based on selected date
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.eventCard,
                selectedDate === item.date && styles.selectedEventCard, // Highlight selected event
              ]}
            >
              <Text style={styles.eventTitle}>{item.title}</Text>
              <Text style={styles.eventDescription}>{item.description}</Text>
              <Text style={styles.eventDate}>{item.date}</Text>{" "}
              {/* Display the date on the card */}
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Show all events of the selected month */}
      {selectedMonth && (
        <View style={styles.monthEventsContainer}>
          <Text style={styles.monthEventsTitle}>Events in {selectedMonth}</Text>
          <FlatList
            data={filterEventsByMonth(selectedMonth)} // Filter events for the selected month
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.eventCard}>
                <Text style={styles.eventTitle}>{item.title}</Text>
                <Text style={styles.eventDescription}>{item.description}</Text>
                <Text style={styles.eventDate}>{item.date}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default CalendarComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  calendar: {
    marginBottom: 20,
  },
  eventsContainer: {
    flex: 1,
    paddingTop: 10,
  },
  eventCard: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  selectedEventCard: {
    backgroundColor: "#0ccc",
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  eventDescription: {
    fontSize: 14,
    color: "#666",
  },
  eventDate: {
    fontSize: 12,
    color: "#999",
    marginTop: 5,
  },
  monthEventsContainer: {
    marginTop: 20,
  },
  monthEventsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
