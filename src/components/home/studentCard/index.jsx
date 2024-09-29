"use client";

import { Card, User } from "@nextui-org/react";
import { PiCrownBold } from "react-icons/pi";

const StudentCard = ({
  isSellected,
  active,
  data,
  isCrown = false,
  onPress,
}) => {
  let { name, section, image } = data;

  return (
    <div onClick={onPress}>
      <Card
        className="p-5 w-full border-4 border-[#fff]"
        shadow="sm"
        style={{
          borderColor: active ? "#f5a523" : "#fff",
          transition: "0.4s",
        }}
      >
        <div className="absolute top-2 left-4  -rotate-30">
          <PiCrownBold size={18} className="text-yellow-500" />
        </div>

        <div className="flex justify-between items-center">
          <User
            avatarProps={{
              src: image,
              isBordered: isCrown,
              color: isCrown && "warning",
              style: {
                marginRight: 10,
              },
            }}
            name={<span className="text-trunc text-[16px]">{name}</span>}
            description={section}
          />
        </div>
        <div
          className="absolute inset-0 bg-[#eaeced] z-10 transition-all flex items-center justify-center"
          style={{
            visibility: active || isSellected ? "hidden" : "visible",
          }}
        >
          <img
            className="w-[50px] filter grayscale opacity-40"
            src="/logo.png"
          />
        </div>
      </Card>{" "}
    </div>
  );
};

export default StudentCard;
