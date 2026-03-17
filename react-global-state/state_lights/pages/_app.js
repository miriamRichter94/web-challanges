import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialRooms = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [rooms, setRooms] = useState(initialRooms);

  const activeLights = rooms.filter((room) => room.isOn == true).length;

  const isDimmed =
    rooms.filter((room) => room.isOn == false).length === rooms.length;

  function handleToggle(id) {
    setRooms(
      rooms.map((room) =>
        room.id == id ? { ...room, isOn: !room.isOn } : room,
      ),
    );
  }

  function handleAllLightsOff() {
    setRooms(
      rooms.map((room) => {
        return { ...room, isOn: false };
      }),
    );
  }

  function handleAllLightsOn() {
    setRooms(
      rooms.map((room) => {
        return { ...room, isOn: true };
      }),
    );
  }

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        rooms={rooms}
        handleToggleLight={handleToggle}
        activeLights={activeLights}
        handleAllLightsOff={handleAllLightsOff}
        handleAllLightsOn={handleAllLightsOn}
      />
    </Layout>
  );
}
