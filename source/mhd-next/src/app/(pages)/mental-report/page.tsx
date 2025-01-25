import MentalGraph from "@/components/mental-report/MentalGraph";
import MentalReport from "@/components/mental-report/MentalReport";

export default function MentalHealthReport() {
  return (
    <div className="MentalReport mb-16">
        <MentalGraph />
        <MentalReport />
    </div>
  )
}
