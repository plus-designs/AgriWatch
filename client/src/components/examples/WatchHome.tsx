import WatchHome from '../WatchHome';

export default function WatchHomeExample() {
  return (
    <div className="max-w-sm mx-auto">
      <WatchHome onNavigate={(screen) => console.log('Navigate to:', screen)} />
    </div>
  );
}
