import { Program } from "@/types/program";
import { useEffect, useState } from "react";
import Card from "../ui/Card";
import FloatingInput from "../ui/FloatingInput";
import DatePickerModal from "./DatePickerModal";

interface ScheduleProps {
  selectedProgram: Program | null;
  onComplete: (completed: boolean) => void;
}

const Schedule = ({ selectedProgram, onComplete }: ScheduleProps) => {
  const [startDate, setStartDate] = useState<string>("");

  useEffect(() => {
    onComplete(Boolean(startDate));
  }, [startDate, onComplete]);

  const calculateEndDate = (start: string, duration: number): string => {
    if (!start) return "";

    const startDateObj = new Date(start);
    const endDateObj = new Date(startDateObj);
    endDateObj.setDate(endDateObj.getDate() + duration);

    return endDateObj.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const endDate =
    startDate && selectedProgram
      ? calculateEndDate(startDate, selectedProgram.duration)
      : "";

  return (
    <>
      <Card>
        <div className="my-auto flex min-h-25 flex-col items-center justify-center space-y-2 text-center">
          <div className="text-body text-heading leading-[100%] uppercase">
            {selectedProgram?.week}{" "}
            {selectedProgram?.week && selectedProgram?.week <= 1
              ? "week"
              : "weeks"}
          </div>
          <div className="text-caption text-paragraph leading-[115%] font-light">
            ({selectedProgram?.week} X{" "}
            {selectedProgram &&
              selectedProgram?.duration / selectedProgram?.week}{" "}
            Days) = {selectedProgram?.duration} Days{" "}
          </div>
        </div>

        <div
          className={`grid gap-6 ${startDate ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"}`}
        >
          <DatePickerModal
            onDateConfirm={setStartDate}
            selectedDate={startDate}
          />

          {startDate && (
            <FloatingInput label="End date" value={endDate} disabled readOnly />
          )}
        </div>
      </Card>
    </>
  );
};

export default Schedule;
