import TaxWizard from "@/components/wizard/TaxWizard";

export default function AssessmentPage() {
  return (
    <main className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-4 py-10 relative">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />
      </div>
      <div className="z-10 w-full flex justify-center">
        <TaxWizard />
      </div>
    </main>
  );
}