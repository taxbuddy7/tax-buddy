import TaxWizard from "@/components/wizard/TaxWizard";

export default function AssessmentPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Optional: Simple Header to go back home */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto font-bold text-xl text-green-700">
           TaxBuddy.
        </div>
      </div>

      <div className="flex-grow">
        <TaxWizard />
      </div>
    </main>
  );
}