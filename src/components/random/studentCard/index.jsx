"use client";

import { Card, User } from "@nextui-org/react";
import { PiCrownBold } from "react-icons/pi";

const StudentCard = ({ data, scale }) => {
  let { name, phone, image } = data;

  return (
    <Card
      className="p-5 min-w-[240px]"
      shadow="sm"
      style={{ transform: `scale(${scale})`, transition: "0.3s" }}
    >
      <div className="absolute top-2 left-4  -rotate-30">
        <PiCrownBold size={18} className="text-yellow-500" />
      </div>

      <div className="flex justify-between items-center">
        <User
          avatarProps={{
            src: image,
            isBordered: true,
            //size: 'lg',
            color: "warning",
          }}
          name={name || ". . ."}
          description={phone}
        />
      </div>
    </Card>
  );
};

export default StudentCard;
