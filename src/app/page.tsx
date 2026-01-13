"use client";

/* eslint-disable @next/next/no-img-element */

import Programs from "@/components/program/Programs";
import Schedule from "@/components/program/Schedule";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import SvgIcon from "@/components/ui/SvgIcon";
import { Program } from "@/types/program";
import { useState } from "react";

export default function Home() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  return (
    <div className="flex flex-1 flex-col">
      {/* main part */}
      <div className="bg relative flex-1">
        <Container py>
          <div className="h-full">
            {/* background images */}
            <img
              className="absolute top-0 left-1/2 -translate-x-1/2"
              src="/images/Star-11.png"
              alt="start"
            />
            <img
              className="absolute right-0 bottom-0"
              src="/images/Star-12.png"
              alt="start"
            />

            <div className="space-y-12">
              <div>
                <div className="mb-6 inline-flex items-center gap-2">
                  <SvgIcon src="rectangle-left.svg" size={7} />
                  <span className="text-paragraph text-body leading-[100%] font-light">
                    Regular aftercare program
                  </span>
                </div>
                <h1 className="text-heading text-title mb-2 leading-[100%] font-medium">
                  How many weeks you like to continue?
                </h1>
                <p className="text-paragraph text-body leading-[100%] font-light">
                  Based on your selection Mon, Tue, Thu, Fri, Sat
                </p>
              </div>

              {/* programs selection */}
              <Programs
                selectedProgram={selectedProgram}
                onSelect={setSelectedProgram}
              />

              {/* program schedule */}
              {selectedProgram && (
                <Schedule selectedProgram={selectedProgram} />
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* bottom part */}
      <Container className="py-6">
        <div className="flex flex-col flex-wrap items-center justify-between gap-4 lg:flex-row">
          {selectedProgram ? (
            <div className="text-heading text-body leading-[100%] font-semibold uppercase">
              <span>${selectedProgram.price}</span> for{" "}
              <span>{selectedProgram.duration}</span> Days (1 Activity per Day)
            </div>
          ) : (
            <div className="text-heading/70 text-body leading-[100%] font-semibold uppercase">
              Please select a program
            </div>
          )}

          <div className="flex items-baseline gap-6">
            <Button variant="ghost">Back</Button>
            <Button disabled>Next</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
