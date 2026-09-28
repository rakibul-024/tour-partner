"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";

const STORAGE_KEY = "roam-bangladesh-itinerary";
const EMPTY_SNAPSHOT = "[]";
const listeners = new Set<() => void>();

function getSnapshot() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? EMPTY_SNAPSHOT;
  } catch (error) {
    console.error("Could not load saved itinerary.", error);
    return EMPTY_SNAPSHOT;
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function readSavedIds(snapshot: string): string[] {
  try {
    const parsed: unknown = JSON.parse(snapshot);
    if (
      Array.isArray(parsed) &&
      parsed.every((id): id is string => typeof id === "string")
    ) {
      return parsed;
    }
    console.error("Saved itinerary has an invalid format.");
  } catch (error) {
    console.error("Could not parse saved itinerary.", error);
  }
  return [];
}

interface ItineraryContextValue {
  savedIds: string[];
  isSaved: (id: string) => boolean;
  toggleSaved: (id: string) => void;
}

const ItineraryContext = createContext<ItineraryContextValue | null>(null);

export function ItineraryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const snapshot = useSyncExternalStore(
    subscribe,
    getSnapshot,
    () => EMPTY_SNAPSHOT,
  );
  const savedIds = useMemo(() => readSavedIds(snapshot), [snapshot]);

  const toggleSaved = useCallback((id: string) => {
    const current = readSavedIds(getSnapshot());
    const next = current.includes(id)
      ? current.filter((savedId) => savedId !== id)
      : [...current, id];
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      listeners.forEach((listener) => listener());
    } catch (error) {
      console.error("Could not save itinerary to local storage.", error);
    }
  }, []);

  const value = useMemo(
    () => ({
      savedIds,
      isSaved: (id: string) => savedIds.includes(id),
      toggleSaved,
    }),
    [savedIds, toggleSaved],
  );

  return (
    <ItineraryContext.Provider value={value}>
      {children}
    </ItineraryContext.Provider>
  );
}

export function useItinerary() {
  const context = useContext(ItineraryContext);
  if (!context) {
    throw new Error("useItinerary must be used within ItineraryProvider.");
  }
  return context;
}
