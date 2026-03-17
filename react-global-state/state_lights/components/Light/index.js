import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ room, onToggleLight }) {
  const [isOn, setIsOn] = useState(false);

  return (
    <LightButton
      type="button"
      onClick={() => {
        onToggleLight(room.id);
      }}
      $isOn={room.isOn}
    >
      <Icon $isOn={room.isOn}>💡</Icon>
      <Text>
        <Name>{room.name}</Name>
        <State>{room.isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
