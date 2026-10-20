import { ContactApiResponse } from "@/types";
import type {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

// 1. Define your form schema interface
export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  eventType:
    | "brand_activation"
    | "charity_benefit"
    | "corporate_gala"
    | "luxury_wedding"
    | "private_soiree";
  guestCount: number;
  estimatedDate: string;
  budgetRange: number;
  venuePreference:
    | "destination"
    | "indoor_ballroom"
    | "open_air_estate"
    | "undecided"
    | "waterfront";
  visionText: string;
  servicesNeeded: string[];
}

export interface ContactDetailsProps {
  currentStep: number;
  register?: UseFormRegister<ContactFormData>;
  errors?: FieldErrors<ContactFormData>;
  selectedGuestCount?: number;
  selectedBudget?: number;
  setValue?: UseFormSetValue<ContactFormData>;
  control?: Control<ContactFormData>;
  selectedServices?: string[];
  toggleService?: (service: string) => void;
  errorMessage?: string;
}

export interface SuccessSubmissionProps {
  apiResponse: ContactApiResponse | null;
  handleResetForm: () => void;
}
