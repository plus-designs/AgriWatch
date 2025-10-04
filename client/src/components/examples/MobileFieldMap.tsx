import MobileFieldMap from '../MobileFieldMap';

export default function MobileFieldMapExample() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <MobileFieldMap onBack={() => console.log('Back clicked')} />
    </div>
  );
}
