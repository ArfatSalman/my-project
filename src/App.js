import { useRef, forwardRef, useState } from "react";

//! accepted solution
const FancyInput = forwardRef(function (_, ref) {
  return (
    <div>
      <input ref={ref} />
    </div>
  );
});

function Ref() {
  const input1Ref = useRef();
  const input2Ref = useRef();
  const input3Ref = useRef();

  return (
    <>
      <form>
        <FancyInput ref={input1Ref} />
        <FancyInput ref={input2Ref} />
        <FancyInput ref={input3Ref} />
        <div></div>
      </form>
      <button
        onClick={(event) => {
          const input1 = input1Ref.current;
          input1.focus();
        }}
      >
        Focus 1
      </button>
      <button
        onClick={(event) => {
          const input2 = input2Ref.current;
          input2.focus();
        }}
      >
        Focus 2
      </button>
      <button
        onClick={(event) => {
          input3Ref.current.focus();
        }}
      >
        Focus 3
      </button>
    </>
  );
}

console.log(
  <ul>
    <li>dasd</li>
  </ul>
);

export default function App() {
  const [flag, setFlag] = useState(false);

  return (
    <ul>
      <li onClick={() => setFlag(!flag)}>
        Click here
        {flag ? (
          <ul>
            <li>Sublist</li>
          </ul>
        ) : null}
      </li>
    </ul>
  );
}
