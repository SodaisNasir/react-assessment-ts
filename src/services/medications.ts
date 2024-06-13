import { MedicationsApiResponse } from "@/types/medications";
import { dummy_medications } from "@/_mock/medications";

const getMedications = async (): Promise<MedicationsApiResponse> => {
    try {
        // API call goes here
        // const response = await fetch('/api/medications');
        // const data = await response.json();
        // return data;

        return new Promise<MedicationsApiResponse>((resolve) => {
            setTimeout(() => {
                resolve(dummy_medications);
            }, 2000);
        });
    } catch (error: any) {
        console.error(error);
        throw error; // rethrow the error to propagate it up the call chain
    }
};

export { getMedications };