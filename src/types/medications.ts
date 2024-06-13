export interface Medicine {
    name: string;
    frequency: string;
    duration: string;
    dosage: string;
}

interface MedicationItem {
    date: string;
    medications: Medicine[];
}

export interface MedicationsApiResponse {
    data: {
        response: MedicationItem[];
    };
}

export interface MedicationState {
    data: MedicationItem[];
    loading: boolean;
    error: string | null;
};