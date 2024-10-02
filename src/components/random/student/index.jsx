"use client";

import { Button, Divider, Spinner } from "@nextui-org/react";
import StudentCard from "../studentCard";
import { useEffect, useState } from "react";

// let  = data;
export const RandomStudent = ({ course }) => {
  // const students = [
  //   { id: 1, name: "Ali S. Salim", email: "ali@gmail.com", img: "" },
  //   { id: 2, name: "Noor S. Salim", email: "ali@gmail.com", img: "" },
  //   { id: 3, name: "Soso S. Salim", email: "ali@gmail.com", img: "" },
  //   { id: 4, name: "Foo S. Salim", email: "ali@gmail.com", img: "" },
  //   { id: 5, name: "Bar S. Salim", email: "ali@gmail.com", img: "" },
  //   { id: 6, name: "Z S. Salim", email: "ali@gmail.com", img: "" },
  //   { id: 7, name: "K S. Salim", email: "ali@gmail.com", img: "" },
  //   { id: 8, name: "G S. Salim", email: "ali@gmail.com", img: "" },
  // ];
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState({});
  const [used, setUsed] = useState([]);
  const [scale, setScale] = useState(1.5);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const resp = await fetch("https://sheetdb.io/api/v1/fs8zkijl5cdsv");
    const jsonResp = await resp.json();
    setStudents(jsonResp?.filter((el) => el?.section === course));
    setLoading(false);
  };

  function getRandomNumber(min, max) {
    // Generate a random floating-point number between 0 and 1
    const random = Math.random();

    // Scale the random number to the desired range
    const range = max - min;
    const randomNumber = min + random * range;

    // Use Math.floor to make it an integer if needed
    return Math.ceil(randomNumber);
  }

  //   useEffect(() => {
  //     next();
  //   }, []);

  const next = () => {
    const randomSelect = getRandomNumber(0, students.length - used.length - 1);
    const student =
      students.filter((std) => {
        return !used.find((use) => use?.id === std?.id);
      })[randomSelect] || {};

    if (used.length === students.length) {
      setUsed([]);
      setCurrent({});
      return;
    }
    setScale(1.8);
    setTimeout(() => {
      setScale(1.5);
      setCurrent(() => student);
      setUsed([...used, student]);
    }, 200);
  };

  //35924682-1d55-4e1f-b795-ad14d75cb6b5

  return (
    <div>
      {current?.id && <StudentCard scale={scale} data={current} />}

      {current?.id && <Divider className="mt-12 mb-6" />}
      <ul className=" text-lg">
        <li className="mt-4">Q1: What's your nickname? 😉</li>
        <li className="mt-4">Q2: Are you currently working or studying? 🧑‍💻</li>
        <li className="mt-4">Q3: What's your life goal? 👻 💀</li>
        <li className="mt-4">Q4: Tell us a fun fact about yourself! 🫣</li>
      </ul>
      <Divider className="mt-6 mb-6" />

      <div className="flex items-center justify-center mt-8 w-full">
        {used?.length === 0 ? (
          <Button size="lg" isLoading={loading} onClick={next} fullWidth>
            Start
          </Button>
        ) : used.length === students.length ? (
          <Button onClick={next} fullWidth>
            Reset
          </Button>
        ) : (
          <Button onClick={next} fullWidth>
            Next - {students?.length - used?.length}
          </Button>
        )}
      </div>
    </div>
  );
};
