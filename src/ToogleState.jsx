import { useState } from "react";

export default function ToggleState() {
  const [userIsGoingOut, setuserIsGoingOut] = useState(false);

  function toggle() {
    setuserIsGoingOut(() => setuserIsGoingOut(!userIsGoingOut));
  }
  return (
    <>
      <main>
        <h1>Do you want to go out</h1>
        <button onClick={toggle}>{userIsGoingOut ? "Yes" : "No"}</button>
      </main>
    </>
  );
}
