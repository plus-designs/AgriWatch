import WatchGPS from '../WatchGPS';

export default function WatchGPSExample() {
  return (
    <div className="max-w-sm mx-auto">
      <WatchGPS onBack={() => console.log('Back clicked')} />
    </div>
  );
}
