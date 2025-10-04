import MobileDashboard from '../MobileDashboard';

export default function MobileDashboardExample() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <MobileDashboard onNavigate={(screen) => console.log('Navigate to:', screen)} />
    </div>
  );
}
