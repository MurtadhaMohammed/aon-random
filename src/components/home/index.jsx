"use client";

import { useEffect, useState } from "react";
import StudentCard from "./studentCard";
import { PiStudent } from "react-icons/pi";
import { Button, Spacer } from "@nextui-org/react";

export const StudentsList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [current, setCurrent] = useState({});

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const resp = await fetch("https://sheetdb.io/api/v1/fs8zkijl5cdsv");
    const jsonResp = await resp.json();
    setData(jsonResp);
    setLoading(false);
  };

  function getRandomNumber(min, max) {
    const random = Math.random();
    const range = max - min;
    const randomNumber = min + random * range;
    return Math.ceil(randomNumber);
  }

  const handleRandomActive = () => {
    setLoading(true);
    const randomSelect = getRandomNumber(
      0,
      data.length - selectedIndices.length - 1
    );
    const student =
      data.filter((std) => {
        return !selectedIndices.find((use) => use?.id === std?.id);
      })[randomSelect] || {};

    if (selectedIndices.length === data.length) {
      setSelectedIndices([]);
      setCurrent({});
      setLoading(false);
      return;
    }
    setTimeout(() => {
      setCurrent(() => student);
      setSelectedIndices([...selectedIndices, student]);
      setLoading(false);
    }, 500);
  };

  const handleReset = () => {
    setSelectedIndices([]);
    setCurrent({});
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Backspace") {
        handleReset();
      }
    };

    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyPress);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  // if (loading) return <SkeletonLinks total={8} />;

  return (
    <div className="max-w-8xl m-auto pl-6 pr-6 md:pl-10 md:pr-10">
      <div className="flex items-center justify-between pt-2 flex-wrap">
        <div className="flex flex-col gap-2 items-start">
          <div className="flex gap-4 items-end">
            <div className="flex gap-2 items-center">
              <img className="w-[50px]" src="/logo.png" />
              <b className="sm:text-lg text-gray-500">Aon 2024</b>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center mr-2 md:ml-4">
          <PiStudent className="text-gray-500 -mt-1" size={18} />
          <p className="text-gray-500">
            <b>{data?.length}</b> Students
          </p>
          <Spacer />
          <Button onClick={handleRandomActive} size="sm" isLoading={loading}>
            Go
          </Button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-2 pb-8">
        {data?.map((el, i) => (
          <StudentCard
            active={current?.id == el?.id}
            key={i}
            data={el}
            isSellected={selectedIndices.find((s) => s.id === el?.id)}
            onPress={() => setCurrent(el)}
          />
        ))}
      </div>
    </div>
  );
};
