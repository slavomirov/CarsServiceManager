import { isTheSameDay } from "./date.js";

const eventsEndpoint = "https://localhost:7053/Events";

export function initEventStore() {
  document.addEventListener("event-create", async (event) => {
    await createEvent(event.detail.event);
    document.dispatchEvent(new CustomEvent("events-change", { bubbles: true }));
  });

  document.addEventListener("event-delete", async (event) => {
    await deleteEvent(event.detail.event.id);
    document.dispatchEvent(new CustomEvent("events-change", { bubbles: true }));
  });

  document.addEventListener("event-edit", async (event) => {
    await editEvent(event.detail.event);
    document.dispatchEvent(new CustomEvent("events-change", { bubbles: true }));
  });

  return {
    async getEventsByDate(date) {
      const events = await fetchEventsFromAPI();
      return events.filter((event) => isTheSameDay(event.date, date));
    }
  };
}

async function createEvent(event) {
  try {
    await fetch(`${eventsEndpoint}/Create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...event, date: event.date.toISOString() })
    });
  } catch (error) {
    console.error("Failed to create event", error);
  }
}

async function deleteEvent(eventId) {
  try {
    await fetch(`${eventsEndpoint}/Delete?id=${eventId}`, {
      method: "DELETE"
    });
  } catch (error) {
    console.error("Failed to delete event", error);
  }
}


async function editEvent(event) {
  try {
    await fetch(`${eventsEndpoint}/Update`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...event, date: event.date.toISOString().split("T")[0] })
    });
  } catch (error) {
    console.error("Failed to edit event", error);
  }
}

async function fetchEventsFromAPI() {
  try {
    const response = await fetch(`${eventsEndpoint}/GetAll`);
    const data = await response.json();
    return data.map(event => ({
      ...event,
      date: new Date(event.date)
    }));
  } catch (error) {
    console.error("Failed to fetch events", error);
    return [];
  }
}



// export function initEventStore() {
//   document.addEventListener("event-create", (event) => {
//     const createdEvent = event.detail.event;
//     const events = getEventsFromLocalStorage();
//     events.push(createdEvent)
//     saveEventsIntoLocalStorage(events);

//     document.dispatchEvent(new CustomEvent("events-change", {
//       bubbles: true
//     }));
//   });

//   document.addEventListener("event-delete", (event) => {
//     const deletedEvent = event.detail.event;
//     const events = getEventsFromLocalStorage().filter((event) => {
//       return event.id !== deletedEvent.id;
//     })
//     saveEventsIntoLocalStorage(events);

//     document.dispatchEvent(new CustomEvent("events-change", {
//       bubbles: true
//     }));
//   });

//   document.addEventListener("event-edit", (event) => {
//     const editedEvent = event.detail.event;
//     const events = getEventsFromLocalStorage().map((event) => {
//       return event.id === editedEvent.id ? editedEvent : event;
//     });
//     saveEventsIntoLocalStorage(events);

//     document.dispatchEvent(new CustomEvent("events-change", {
//       bubbles: true
//     }));
//   });

//   return {
//     getEventsByDate(date) {
//       const events = getEventsFromLocalStorage();
//       const filteredEvents = events.filter((event) => isTheSameDay(event.date, date));

//       return filteredEvents;
//     }
//   };
// }

// function saveEventsIntoLocalStorage(events) {
//   const safeToStringifyEvents = events.map((event) => ({
//     ...event,
//     date: event.date.toISOString()
//   }));

//   let stringifiedEvents;
//   try {
//     stringifiedEvents = JSON.stringify(safeToStringifyEvents);
//   } catch (error) {
//     console.error("Stringify events failed", error);
//   }
  
//   localStorage.setItem("events", stringifiedEvents);

// }

// function getEventsFromLocalStorage() {
//   const localStorageEvents = localStorage.getItem("events");
//   if (localStorageEvents === null) {
//     return [];
//   }

//   let parsedEvents;
//   try {
//     parsedEvents = JSON.parse(localStorageEvents);
//   } catch (error) {
//     console.error("Parse events failed", error);
//     return [];
//   }

//   const events = parsedEvents.map((event) => ({
//     ...event,
//     date: new Date(event.date)
//   }));

//   return events;
// }


