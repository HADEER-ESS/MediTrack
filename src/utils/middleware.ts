import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { db } from "./db";


const zustandMMKVStorage = {
    setItem: (name: string, value: string) => {
        return db.set(name, value);
    },
    getItem: (name: string) => {
        const value = db.getString(name);
        return value ?? null;
    },
    removeItem: (name: string) => {
        return db.remove(name);
    },
    clean: () => {
        return db.clearAll();
    }
}



export const useMedicationStore = create()(
    persist(
        (set, get) => ({}),
        {
            name: "meditrack_storage",
            storage: createJSONStorage(() => zustandMMKVStorage)
        }
    )
)