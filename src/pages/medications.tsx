import { MaxWidthWrapper, Page } from "@/components";
import { useMedications } from "@/hooks";
import { Loader2 } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Medicine } from "@/types/medications";

export default function Medications() {
  const { data, loading, error } = useMedications();

  if (loading || error) {
    return (
      <Page title="Medications">
        <MaxWidthWrapper
          as="main"
          className="relative flex justify-center items-center min-h-[calc(100dvh-50px)] p-4 pt-8 space-y-8"
        >
          {loading ? (
            <Loader2 className="animate-spin text-accent-600" />
          ) : (
            <span className="text-accent-700">Error: {error}</span>
          )}
        </MaxWidthWrapper>
      </Page>
    );
  }

  return (
    <Page title="Medications">
      <MaxWidthWrapper
        as="main"
        className="min-h-[calc(100dvh-50px)] p-4 pt-8 space-y-10"
      >
        {data.length > 0 &&
          data.map((item) => (
            <div key={item.date} className="text-accent-700">
              <h2 className="text-accent-700 mb-3 text-sm">
                Mediacations - {item.date.replace(/-/g, "/")}
              </h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Name</TableHead>
                    <TableHead className="text-center">Dosage</TableHead>
                    <TableHead className="text-center">Frequency</TableHead>
                    <TableHead className="text-center">Duration</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {item.medications.map((medicine) => (
                    <MedicationRow key={medicine.name} {...medicine} />
                  ))}
                </TableBody>
              </Table>
            </div>
          ))}
      </MaxWidthWrapper>

      <br />
    </Page>
  );
}

function MedicationRow({ name, dosage, frequency, duration }: Medicine) {
  const formattedName = name.trim().replace(/[^a-zA-Z0-9\s]/g, "");
  return (
    <TableRow>
      <TableCell className="font-medium text-nowrap">{formattedName}</TableCell>
      <TableCell className="text-center">{dosage}</TableCell>
      <TableCell className="text-center">{frequency}</TableCell>
      <TableCell className="text-center">{duration}</TableCell>
    </TableRow>
  );
}
