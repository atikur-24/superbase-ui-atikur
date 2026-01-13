import { Program } from "@/types/program";
import Image from "next/image";
import { programs } from "../../../public/data/programs";
import Card from "../ui/Card";
import { Checkbox } from "../ui/checkbox";

interface ProgramsProps {
  selectedProgram: Program | null;
  onSelect: (program: Program | null) => void;
}

const Programs = ({ selectedProgram, onSelect }: ProgramsProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {programs?.map((program) => {
        const isSelected = selectedProgram?.id === program.id;

        return (
          <Card
            key={program.id}
            onClick={() => (isSelected ? onSelect(null) : onSelect(program))}
            className="relative flex flex-col items-center justify-center gap-4 text-center"
          >
            <div className="absolute top-6 right-6">
              <Checkbox checked={isSelected} />
            </div>

            <Image
              src={program.image}
              height={100}
              width={100}
              alt={program.title}
            />

            <div className="space-y-2">
              <p className="text-body text-heading leading-[80%] font-medium uppercase">
                {program.title}
              </p>
              <div className="text-paragraph text-caption leading-[115%] font-light">
                ${program.price} for {program.duration} days
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Programs;
