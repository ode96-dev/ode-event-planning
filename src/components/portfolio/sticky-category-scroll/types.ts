import { FEATURED_EVENTS } from "@/lib/data";

export interface ShowcaseChapter {
  categoryTitle: string;
  event: (typeof FEATURED_EVENTS)[0];
}
