import { Battery, BatteryMedium, BatteryLow } from "lucide-react";
import { useState, useEffect } from "react";

export default function WatchStatusBar() {
  const [time, setTime] = useState(new Date());
  const [battery] = useState(78); // Mock battery level

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getBatteryIcon = () => {
    if (battery > 60) return <Battery className="w-5 h-5" />;
    if (battery > 30) return <BatteryMedium className="w-5 h-5" />;
    return <BatteryLow className="w-5 h-5" />;
  };

  return (
    <div className="h-14 px-4 flex items-center justify-between bg-background/95 backdrop-blur border-b" data-testid="watch-status-bar">
      <span className="text-2xl font-bold" data-testid="text-time">
        {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
      </span>
      <div className="flex items-center gap-1" data-testid="battery-indicator">
        {getBatteryIcon()}
        <span className="text-lg font-semibold">{battery}%</span>
      </div>
    </div>
  );
}
