import MobileCropAnalysis from '../MobileCropAnalysis';

export default function MobileCropAnalysisExample() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <MobileCropAnalysis onBack={() => console.log('Back clicked')} />
    </div>
  );
}
