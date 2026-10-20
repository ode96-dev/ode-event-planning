"use client";

import { AlertCircle, Check } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { Controller } from "react-hook-form";
import { ContactDetailsProps } from "./types";
import { AVAILABLE_SERVICES } from "./constants";
import { formatKShs, getBudgetTierLabel } from "./helpers";

const BudgetProduction = ({
  currentStep,
  errors,
  selectedBudget,
  setValue,
  control,
  selectedServices,
  toggleService,
}: ContactDetailsProps) => {
  return (
    <>
      {currentStep === 3 && (
        <motion.div
          key="step-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          <div className="border-b border-neutral-200 pb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 mt-1 font-serif">
              Budget & Production
            </h3>
            <p className="text-neutral-500 text-sm mt-1">Refine your budget</p>
          </div>

          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2 border-b border-neutral-200">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#997312] font-semibold block">
                  Production Budget Allocation (KShs)
                </span>
                <span className="text-xs text-neutral-500">
                  <strong className="text-neutral-900">
                    {getBudgetTierLabel(selectedBudget ?? 0)}
                  </strong>
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-neutral-950 font-mono tracking-tight">
                {formatKShs(selectedBudget ?? 0)}
                <span className="text-sm font-normal text-neutral-500 ml-1">
                  +
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                {
                  label: "KShs 1.5M",
                  val: 1500000,
                  desc: "Intimate",
                },
                {
                  label: "KShs 5M",
                  val: 5000000,
                  desc: "Signature",
                },
                {
                  label: "KShs 15M",
                  val: 15000000,
                  desc: "Sovereign",
                },
                {
                  label: "KShs 35M+",
                  val: 35000000,
                  desc: "Masterwork",
                },
              ].map((tier) => (
                <button
                  key={tier.val}
                  type="button"
                  onClick={() =>
                    setValue?.("budgetRange", tier.val, {
                      shouldValidate: true,
                    })
                  }
                  className={`py-2 px-3 text-left border-b-2 transition-all cursor-pointer ${
                    selectedBudget === tier.val
                      ? "border-[#997312] bg-[#997312]/5 text-neutral-950"
                      : "border-neutral-200 hover:border-neutral-400 text-neutral-600"
                  }`}
                >
                  <div className="text-xs font-bold font-mono">
                    {tier.label}
                  </div>
                  <div className="text-[10px] text-neutral-500 uppercase">
                    {tier.desc}
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-2">
              <Controller
                name="budgetRange"
                control={control}
                render={({ field }) => (
                  <input
                    id="budgetRange"
                    type="range"
                    min={500000}
                    max={50000000}
                    step={500000}
                    value={field.value}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#997312]"
                  />
                )}
              />
              <div className="flex justify-between text-[11px] text-neutral-500 mt-2 font-mono">
                <span>KShs 500k (Salon)</span>
                <span>KShs 25M (Gala)</span>
                <span>KShs 50M+ (Masterwork)</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-3">
            <label className="text-xs font-semibold uppercase tracking-widest text-[#997312] font-mono block">
              Key Production Disciplines Required *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {AVAILABLE_SERVICES.map((srv) => {
                const isChecked = selectedServices?.includes(srv);
                return (
                  <button
                    key={srv}
                    type="button"
                    onClick={() => toggleService?.(srv)}
                    className={`px-4 py-3 text-xs font-medium text-left border-b-2 transition-all flex items-center justify-between cursor-pointer ${
                      isChecked
                        ? "border-[#997312] bg-[#997312]/5 text-neutral-950 font-semibold"
                        : "border-neutral-200 hover:border-neutral-300 text-neutral-600 bg-neutral-50/50"
                    }`}
                  >
                    <span className="truncate pr-2">{srv}</span>
                    <span
                      className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isChecked
                          ? "bg-[#997312] text-white"
                          : "border border-neutral-300"
                      }`}
                    >
                      {isChecked && <Check className="w-2.5 h-2.5 stroke-3" />}
                    </span>
                  </button>
                );
              })}
            </div>
            {errors?.servicesNeeded && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.servicesNeeded.message}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default BudgetProduction;
