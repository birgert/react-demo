import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/events/";

// [
//   {
//     id: 1,
//     name: "event1",
//     image: "https://picsum.photos/300/200",
//     shortDescription: "Short event 1 text goes here",
//     description:
//       "Event 1 Long text goes here.... lots of loooooooooooonnnng text to come.",
//   },
//   {
//     id: 2,
//     name: "event2",
//     image: "https://picsum.photos/300/200",
//     shortDescription: "Short event 2 text goes here",
//     description:
//       "Event 2 Long text goes here.... lots of loooooooooooonnnng text to come.",
//   },
//   {
//     id: 3,
//     name: "event3",
//     image: "https://picsum.photos/300/200",
//     shortDescription: "Short event 2 text goes here",
//     description:
//       "Event 3 Long text goes here.... lots of loooooooooooonnnng text to come.",
//   },
// ];

// export function getEvents() {
//   return events;
// }

// export function getEvent(id) {
//   return events.find((e) => e.id === id);
// }

export async function getEvents() {
  const { data } = await http.get(apiEndpoint);

  const returnedEvents = data;
  console.log("Events from API: ", returnedEvents);
  return returnedEvents;
}

export async function getEvent(id) {
  const url = apiEndpoint + id;
  const { data } = await http.get(url);

  const returnedEvent = data;
  console.log("Event from API: ", returnedEvent);
  return returnedEvent;
}

// export const getEvents = async () =>
//   await new Promise((resolve, reject) => {
//     if (events.length > 1) {
//       resolve(events);
//     } else {
//       const err = new Error("Unable to get services");
//       reject(err);
//     }
//   });

// export const getEvent = async (id) =>
//   await new Promise((resolve, reject) => {
//     const event = events.find((e) => e.id === Number(id));
//     if (event !== undefined) {
//       resolve(event);
//     } else {
//       const err = new Error("Unable to get event with ID: ", id);
//       reject(err);
//     }
//   });
