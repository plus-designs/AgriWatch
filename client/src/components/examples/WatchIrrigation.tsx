import WatchIrrigation from '../WatchIrrigation';

export default function WatchIrrigationExample() {
  return (
    <div className="max-w-sm mx-auto">
      <WatchIrrigation onBack={() => console.log('Back clicked')} />
    </div>
  );
}
