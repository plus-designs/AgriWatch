import WatchWeather from '../WatchWeather';

export default function WatchWeatherExample() {
  return (
    <div className="max-w-sm mx-auto">
      <WatchWeather onBack={() => console.log('Back clicked')} />
    </div>
  );
}
