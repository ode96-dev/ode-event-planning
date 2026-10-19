import { getGlobalLenis } from "../smooth-scroll-provider";

const listeners = new Set<() => void>();

export const emitChange = () => {
  listeners.forEach((listener) => listener());
};

export const subscribe = (callback: () => void) => {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
};

export const getSnapshot = () => {
  return getGlobalLenis;
};

export const getServerSnapshot = () => {
  return null;
};
