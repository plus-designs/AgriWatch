import { CloudRain, Bug, Droplets, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Notification {
  id: string;
  type: "rain" | "pest" | "irrigation";
  message: string;
}

interface WatchNotificationProps {
  notification: Notification;
  onDismiss: () => void;
  onViewDetails: () => void;
}

export default function WatchNotification({ notification, onDismiss, onViewDetails }: WatchNotificationProps) {
  const icons = {
    rain: CloudRain,
    pest: Bug,
    irrigation: Droplets,
  };

  const colors = {
    rain: "bg-chart-2/20 border-l-chart-2",
    pest: "bg-destructive/20 border-l-destructive",
    irrigation: "bg-chart-2/20 border-l-chart-2",
  };

  const Icon = icons[notification.type];

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" data-testid="notification-overlay">
      <Card 
        className={`${colors[notification.type]} border-l-4 p-6 space-y-4 max-w-sm w-full`}
        data-testid="notification-card"
      >
        <div className="flex items-start justify-between">
          <Icon className="w-12 h-12" />
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onDismiss}
            data-testid="button-dismiss"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        <p className="text-lg font-medium" data-testid="text-notification-message">
          {notification.message}
        </p>
        
        <Button 
          variant="default" 
          className="w-full"
          onClick={onViewDetails}
          data-testid="button-view-details"
        >
          View Details
        </Button>
      </Card>
    </div>
  );
}
