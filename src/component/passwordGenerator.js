import { useState, useCallback, useEffect, useRef } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(4);
  const [char1, setChar] = useState(false);
  const [number, setNum] = useState(false);
  const [password, setPass] = useState("");

  const reference = useRef(null);

  const passGen = useCallback(() => {
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    let str1 = "";
    if (char1) str += "!@#$%^&*";
    if (number) str += "0123456789";
    for (let i = 0; i < length; i++) {
      const character = Math.floor(Math.random() * str.length);
      str1 += str.charAt(character);
      setPass(str1);
    }
  }, [length, char1, number, setPass]);
  useEffect(() => {
    passGen();
  }, [length, char1, number, setPass]);

  const copypass = () => {
    window.navigator.clipboard.writeText(password);
    reference.current?.select();
  };
  return (
    <>
      <div className="container">
        <div className="flex ">
          <input
            type="text"
            value={password}
            className="mx-6 my-5 p-2 border-black"
          ></input>
          <button onClick={copypass} ref={reference}>
            copy
          </button>
        </div>
        <div className="flex">
          <input
            type="range"
            min="5"
            max="50"
            className="cursor-pointer"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          ></input>
          <label>length: {length}</label>
          <input
            type="checkbox"
            className="ml-2"
            value={char1}
            onChange={() => {
              setChar((prev) => !prev);
            }}
          ></input>
          <label>Char</label>
          <input
            type="checkbox"
            className="ml-2 text-white"
            value={number}
            onChange={() => {
              setNum((prev) => !prev);
            }}
          ></input>
          <label>Number</label>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
