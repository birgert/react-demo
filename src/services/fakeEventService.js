const events = [
  {
    id: 1,
    name: "event1",
    image: "https://picsum.photos/300/200",
    shortDescription: "Short event 1 text goes here",
    description:
      "Event 1 Long text goes here.... lots of loooooooooooonnnng text to come.",
  },
  {
    id: 2,
    name: "event2",
    image: "https://picsum.photos/300/200",
    shortDescription: "Short event 2 text goes here",
    description:
      "Event 2 Long text goes here.... lots of loooooooooooonnnng text to come.",
  },
  {
    id: 3,
    name: "event3",
    image: "https://picsum.photos/300/200",
    shortDescription: "Short event 2 text goes here",
    description:
      "Event 3 Long text goes here.... lots of loooooooooooonnnng text to come.",
  },
];

// export function getEvents() {
//   return events;
// }

// export function getEvent(id) {
//   return events.find((e) => e.id === id);
// }

export const getEvents = async () =>
  await new Promise((resolve, reject) => {
    if (events.length > 1) {
      resolve(events);
    } else {
      const err = new Error("Unable to get services");
      reject(err);
    }
  });

export const getEvent = async (id) =>
  await new Promise((resolve, reject) => {
    const event = events.find((e) => e.id === Number(id));
    if (event !== undefined) {
      resolve(event);
    } else {
      const err = new Error("Unable to get event with ID: ", id);
      reject(err);
    }
  });
