import { useEffect, useState } from "react";
import { MedicationState } from "@/types/medications";
import * as medicationService from "@/services/medications";

export default function useMedications() {
    const [state, setState] = useState<MedicationState>({
        data: [],
        loading: true,
        error: null,
    });

    useEffect(() => {
        medicationService
            .getMedications()
            .then((res) =>
                setState({ data: res.data.response, loading: false, error: null })
            )
            .catch((err) =>
                setState({
                    data: [],
                    loading: false,
                    error: err?.message || "An error occurred!",
                })
            );
    }, []);

    return state;
}