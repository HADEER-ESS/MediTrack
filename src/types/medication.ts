type MedicationForm = "Tablet" | "Capsule" | "Liquid" | "Injection" | "Other";
type DoseStatus = "taken" | "missed" | "skipped";
type MedicationNote = {
    doctorName?: String,
    pharmacy?: String,
    note?: String
}

export interface Medication {
    id: string,
    name: string,
    dosage: string,
    form: MedicationForm,

    startDate: Date,
    endDate?: Date,

    frequency: number; // Times per day (e.g., 3)
    alarms: string[], // the alarms for this medication // ["08:00", "14:00", "20:00"]
    days: number[]; // [0,1,2,3,4,5,6] for daily
    notes?: MedicationNote;

    createAt: Date;
    isActive: boolean;
}

// 2. HISTORY (User actions)
export interface DoseRecord {
    id: string;
    medicationId: string;

    // What was scheduled
    scheduledDate: Date; // When it should have been taken
    scheduledTime: string; // "08:00"

    // What happened
    takenAt?: Date;
    status: DoseStatus;
    note?: string;

    // For analytics
    notificationSentAt?: Date;
    notificationOpenedAt?: Date;
}