import { z } from "zod";

export const inquirySchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Please enter your full name (minimum 2 characters)" })
    .max(100, { message: "Name cannot exceed 100 characters" })
    .regex(/^[a-zA-Z\s.'-]+$/, { message: "Name contains invalid characters" }),

  email: z.string().min(1, { message: "Email address is required" }).email({
    message: "Please enter a valid business or personal email address",
  }),

  phone: z
    .string()
    .min(7, { message: "Please provide a valid phone number" })
    .max(25, { message: "Phone number is too long" })
    .regex(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/, {
      message: "Please enter a valid international or local phone format",
    }),

  eventType: z.enum(
    [
      "luxury_wedding",
      "corporate_gala",
      "private_soiree",
      "brand_activation",
      "charity_benefit",
    ],
    { message: "Please select an event category" },
  ),

  guestCount: z
    .number({ message: "Guest count must be a number" })
    .int({ message: "Guest count must be an integer" })
    .min(10, { message: "Minimum 10 guests for bespoke curation" })
    .max(5000, {
      message:
        "For stadium or over 5,000 guests, please contact executive direct",
    }),

  estimatedDate: z
    .string()
    .min(1, { message: "Please select an estimated timeframe or target date" }),

  budgetRange: z.number({ message: "Budget must be a number" }).min(100000, {
    message: "Minimum bespoke production tier starts at KSh 500,000",
  }),

  venuePreference: z.enum(
    [
      "undecided",
      "indoor_ballroom",
      "open_air_estate",
      "destination",
      "waterfront",
    ],
    { message: "Please select a venue preference" },
  ),

  visionText: z
    .string()
    .min(15, {
      message:
        "Please provide at least 15 characters describing your event vision and goals",
    })
    .max(2000, {
      message: "Vision description cannot exceed 2,000 characters",
    }),

  servicesNeeded: z.array(z.string()).min(1, {
    message: "Please select at least one primary service requirement",
  }),
});

export type InquiryFormInput = z.infer<typeof inquirySchema>;
