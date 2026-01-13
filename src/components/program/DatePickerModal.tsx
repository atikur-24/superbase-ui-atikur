"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import FloatingInput from "../ui/FloatingInput";

type WheelLoopProps = {
  items: string[];
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  className?: string;
};

const WheelLoop = ({
  items,
  selectedIndex,
  setSelectedIndex,
  className = "",
}: WheelLoopProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "y",
    loop: true,
    dragFree: true,
    containScroll: false,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.scrollTo(selectedIndex, true);
  }, [emblaApi, onSelect, selectedIndex]);

  return (
    <div
      ref={emblaRef}
      className={`relative h-48 shrink-0 overflow-hidden ${className}`}
    >
      <div className="flex h-full flex-col items-center">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex h-10 min-h-10 items-center justify-center text-xl whitespace-nowrap transition-all duration-200 ${
              selectedIndex === index
                ? "font-semibold text-black opacity-100"
                : "text-paragraph opacity-30"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

interface DatePickerModalProps {
  onDateConfirm?: (date: string) => void;
  selectedDate?: string;
}

const DatePickerModal = ({
  onDateConfirm,
  selectedDate,
}: DatePickerModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const today = new Date();

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from({ length: 20 }, (_, i) => (2020 + i).toString());

  const defaultDayIdx = today.getDate() - 1;
  const defaultMonthIdx = today.getMonth();
  const defaultYearIdx = years.indexOf(today.getFullYear().toString());

  const [dayIdx, setDayIdx] = useState(defaultDayIdx);
  const [monthIdx, setMonthIdx] = useState(defaultMonthIdx);
  const [yearIdx, setYearIdx] = useState(
    defaultYearIdx !== -1 ? defaultYearIdx : 0,
  );

  const handleConfirm = () => {
    const formattedDate = `${months[monthIdx]} ${days[dayIdx]}, ${years[yearIdx]}`;
    onDateConfirm?.(formattedDate);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <FloatingInput
            type="text"
            name="start_date"
            label="Start date"
            value={selectedDate || ""}
            readOnly
          />
        </div>
      </DialogTrigger>

      <DialogContent
        className="overflow-hidden p-0 sm:max-w-[505px]"
        showCloseButton={false}
      >
        <DialogHeader className="pt-12 text-center">
          <DialogTitle>Please select your start date</DialogTitle>
          <DialogDescription className="sr-only">
            Date picker modal
          </DialogDescription>
        </DialogHeader>

        {/* wheel */}
        <div className="px-6 pb-12">
          <div className="relative mx-auto flex max-w-[70%] justify-center py-8">
            <div className="pointer-events-none absolute inset-0 flex items-center">
              <div className="border-border h-12 w-full border-y" />
            </div>

            <div className="flex items-center">
              <WheelLoop
                items={days}
                selectedIndex={dayIdx}
                setSelectedIndex={setDayIdx}
                className="w-16"
              />

              <WheelLoop
                items={months}
                selectedIndex={monthIdx}
                setSelectedIndex={setMonthIdx}
                className="mr-10 w-30"
              />

              <WheelLoop
                items={years}
                selectedIndex={yearIdx}
                setSelectedIndex={setYearIdx}
                className="w-20"
              />
            </div>
          </div>

          {/* note */}
          <div className="text-paragraph text-body text-center leading-[160%]">
            <strong>NB:</strong> You&apos;ve chosen a 4-week schedule starting
            on {months[monthIdx]} {days[dayIdx]}, {years[yearIdx]}, with
            sessions on Mon, Tue, Thu, Fri, and Sat. We&apos;ll automatically
            set your end date, and you can renew whenever you like—no worries!
          </div>
        </div>

        <DialogFooter className="grid grid-cols-2 border-t border-[rgba(221,221,221,0.5)] p-6">
          <DialogClose asChild>
            <Button variant="ghost" className="text-danger">
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={handleConfirm} className="w-full">
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DatePickerModal;
