import MobileIrrigation from '../MobileIrrigation';

export default function MobileIrrigationExample() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <MobileIrrigation onBack={() => console.log('Back clicked')} />
    </div>
  );
}
