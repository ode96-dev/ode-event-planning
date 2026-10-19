import { SERVICES } from "@/lib/data";

type Service = (typeof SERVICES)[number];

export interface ServiceCardProps {
  service: Service;
  index: number;
  onInquireClick?: () => void;
}
