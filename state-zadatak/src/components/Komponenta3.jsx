import React from 'react';

function Komponenta3({ name, age, children }) {
  return (
    <>
      <p>
        Pozdrav, zovem se {name} i imam {age} godina.
      </p>
      {children}
    </>
  );
}

export default Komponenta3;
