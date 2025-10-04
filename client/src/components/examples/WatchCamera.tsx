import WatchCamera from '../WatchCamera';

export default function WatchCameraExample() {
  return (
    <div className="max-w-sm mx-auto">
      <WatchCamera onBack={() => console.log('Back clicked')} />
    </div>
  );
}
