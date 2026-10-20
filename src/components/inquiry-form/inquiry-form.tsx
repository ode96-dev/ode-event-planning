"use client";

import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";
import type { ContactApiResponse, EventItem } from "@/types";
import { Send, Loader2, ArrowRight, ArrowLeft } from "lucide-react";
import { inquirySchema, type InquiryFormInput } from "./schemas";
import { MagnetButton } from "../animations/magnet-button/magnet-button";
import ContactDetails from "./contact-details";
import EventRequirements from "./event-requirements";
import BudgetProduction from "./budget-production";
import AdditionalVision from "./additional-vision";
import SuccessSubmission from "./success-submission";
import { Button } from "../ui/button";

interface InquiryFormProps {
  prefilledEvent?: EventItem | null;
}

const STEPS = [
  { id: 1, title: "Principal Contact", subtitle: "Patron Details" },
  { id: 2, title: "Event Scope", subtitle: "Category & Logistics" },
  { id: 3, title: "Investment Tier", subtitle: "KShs & Disciplines" },
  { id: 4, title: "Vision & Transmittal", subtitle: "Review & Dispatch" },
];

const InquiryForm = ({ prefilledEvent }: InquiryFormProps) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [submissionState, setSubmissionState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [apiResponse, setApiResponse] = useState<ContactApiResponse | null>(
    null,
  );
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    control,
    setValue,
    trigger,
    formState: { errors },
    reset,
  } = useForm<InquiryFormInput>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      eventType:
        prefilledEvent?.category === "weddings"
          ? "luxury_wedding"
          : "corporate_gala",
      guestCount: prefilledEvent?.guestCount || 250,
      estimatedDate: "Q4 2026 / Festive Season",
      budgetRange: 5000000,
      venuePreference: "indoor_ballroom",
      visionText: "",
      servicesNeeded: [
        "Full Spatial & Scenography Design",
        "Kinetic Light & Sound Architecture",
      ],
    },
  });

  const selectedBudget = useWatch({ control, name: "budgetRange" }) || 5000000;
  const selectedGuestCount = useWatch({ control, name: "guestCount" }) || 250;
  const selectedServices = useWatch({ control, name: "servicesNeeded" }) || [];

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setValue(
        "servicesNeeded",
        selectedServices.filter((s) => s !== service),
        { shouldValidate: true },
      );
    } else {
      setValue("servicesNeeded", [...selectedServices, service], {
        shouldValidate: true,
      });
    }
  };

  const handleNextStep = async () => {
    let isValid = false;

    if (currentStep === 1) {
      isValid = await trigger(["fullName", "email", "phone"]);
    } else if (currentStep === 2) {
      isValid = await trigger([
        "eventType",
        "estimatedDate",
        "guestCount",
        "venuePreference",
      ]);
    } else if (currentStep === 3) {
      isValid = await trigger(["budgetRange", "servicesNeeded"]);
    }

    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: InquiryFormInput) => {
    setSubmissionState("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData: ContactApiResponse = await res.json();

      if (!res.ok || !responseData.success) {
        throw new Error(responseData.message || "Failed to submit inquiry.");
      }

      setApiResponse(responseData);
      setSubmissionState("success");

      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#997312", "#0f172a", "#e2e8f0", "#b4861c"],
        });
      } catch (e) {
        console.log(e);
      }
    } catch (err: unknown) {
      console.error(err);
      const message =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again.";
      setErrorMessage(message);
      setSubmissionState("error");
    }
  };

  const handleResetForm = () => {
    reset();
    setCurrentStep(1);
    setSubmissionState("idle");
    setApiResponse(null);
  };

  return (
    <section
      id="inquiry-section"
      className="relative w-full bg-[#fbfbfc] text-neutral-900 py-24 sm:py-32 border-t border-neutral-200/80 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-linear-to-tr from-[#997312]/5 via-neutral-100 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-500 mb-6 leading-[1.08]">
            Let&apos;s get started!
          </h2>
        </div>

        <div className="p-7 sm:p-10 md:p-12 relative">
          <AnimatePresence mode="wait">
            {submissionState === "success" ? (
              <SuccessSubmission
                apiResponse={apiResponse}
                handleResetForm={handleResetForm}
              />
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <AnimatePresence mode="wait">
                  <ContactDetails
                    key={`${currentStep}-contact`}
                    currentStep={currentStep}
                    register={register}
                    errors={errors}
                  />

                  <EventRequirements
                    key={`${currentStep}-event`}
                    currentStep={currentStep}
                    register={register}
                    errors={errors}
                    control={control}
                    selectedGuestCount={selectedGuestCount}
                  />
                  <BudgetProduction
                    key={`${currentStep}-budget`}
                    currentStep={currentStep}
                    errors={errors}
                    selectedBudget={selectedBudget}
                    setValue={setValue}
                    control={control}
                    selectedServices={selectedServices}
                    toggleService={toggleService}
                  />

                  <AdditionalVision
                    key={`${currentStep}-additional`}
                    currentStep={currentStep}
                    errors={errors}
                    register={register}
                    errorMessage={errorMessage}
                  />
                </AnimatePresence>

                <div className="mt-10 pt-6 border-t border-neutral-200 flex items-center justify-between gap-4">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-wider text-neutral-600 hover:text-neutral-950 py-3 px-4 rounded-xl hover:bg-neutral-100 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < STEPS.length ? (
                    <Button
                      variant={"ghost"}
                      size={"lg"}
                      type="button"
                      onClick={handleNextStep}
                      className="inline-flex items-center h-12 gap-2 text-xs uppercase font-semibold tracking-wider bg-neutral-950 hover:bg-neutral-800 text-white py-3.5 px-7 rounded-full shadow-xs transition-all cursor-pointer"
                    >
                      <span className="text-white">Continue</span>
                    </Button>
                  ) : (
                    <MagnetButton
                      type="submit"
                      disabled={submissionState === "submitting"}
                      className="py-4 px-8 bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-xs uppercase tracking-wider rounded-xl shadow-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50 ml-auto"
                    >
                      {submissionState === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </MagnetButton>
                  )}
                </div>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
