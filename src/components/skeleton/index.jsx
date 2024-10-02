
"use client"
import dayjs from "dayjs";

import { Chip, Card, Skeleton } from "@nextui-org/react"
import { PiStudent } from "react-icons/pi"
import { TbCalendarTime } from "react-icons/tb"

export const SkeletonLinks = ({ total }) => {
  let list = [...new Array(total || 30)];

  return (
    <div className="max-w-8xl m-auto pl-6 pr-6 md:pl-10 md:pr-10">
      <div className="flex items-end justify-between pt-2  flex-wrap">
        <div className="flex flex-col gap-2 items-start">
        
          <Skeleton className="rounded-lg mt-2 mb-2">
            <div className="h-4 w-60 rounded-lg bg-default-100"></div>
          </Skeleton>
        </div>
        <div className="flex gap-2 items-center mr-2 md:ml-4">
          <PiStudent className="text-gray-500 -mt-1" size={18} />
          <p className="text-gray-500">
            <b>{list?.length}</b> Students
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6 pb-8">
        {list?.map((el, i) => (
          <Card key={i} className="w-full" shadow="none">
            <Skeleton className="rounded-lg">
              <div className="h-20 rounded-lg bg-default-100"></div>
            </Skeleton>
          </Card>
        ))}
      </div>
    </div>
  );
};
