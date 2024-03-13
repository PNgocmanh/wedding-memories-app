import React from "react";
import CreateButton from "./CreateButton";
import * as MenuS from "./Menu.style";

export default function MenuButton({ reload, setReload }) {
  return (
    <>
      <MenuS.Container>
        <CreateButton reload={reload} setReload={setReload} />
      </MenuS.Container>
    </>
  );
}
