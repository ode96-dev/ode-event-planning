export type EventCategory =
  | "all"
  | "galas"
  | "weddings"
  | "soirees"
  | "activations";

export interface EventItem {
  id: string;
  title: string;
  category: "galas" | "weddings" | "soirees" | "activations";
  categoryLabel: string;
  client: string;
  location: string;
  year: string;
  guestCount: number;
  durationHours: number;
  lightingTheme: string;
  heroImage: string;
  galleryImages: string[];
  tagline: string;
  story: string;
  deliverables: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  scopePoints: string[];
  stat: {
    value: string;
    label: string;
  };
  svgShape: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  eventType:
    | "luxury_wedding"
    | "corporate_gala"
    | "private_soiree"
    | "brand_activation"
    | "charity_benefit";
  guestCount: number;
  estimatedDate: string;
  budgetRange: number;
  venuePreference:
    | "undecided"
    | "indoor_ballroom"
    | "open_air_estate"
    | "destination"
    | "waterfront";
  visionText: string;
  servicesNeeded: string[];
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  inquiryId?: string;
  mode?: "live_smtp" | "preview_mock";
  timestamp?: string;
}
