import React, { useState } from "react";

export default function MainLayout({ children }) {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>
        <button onClick={() => setCounter(counter + 1)}>
          Cliqueado {counter} veces
        </button>
      </p>

      {children}
    </>
  )
}
