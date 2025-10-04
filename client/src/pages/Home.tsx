import { useState } from "react";
import { Smartphone, Watch, Moon, Sun, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import WatchStatusBar from "@/components/WatchStatusBar";
import WatchHome from "@/components/WatchHome";
import WatchWeather from "@/components/WatchWeather";
import WatchCamera from "@/components/WatchCamera";
import WatchIrrigation from "@/components/WatchIrrigation";
import WatchGPS from "@/components/WatchGPS";
import WatchNotification from "@/components/WatchNotification";
import MobileDashboard from "@/components/MobileDashboard";
import MobileCropAnalysis from "@/components/MobileCropAnalysis";
import MobileIrrigation from "@/components/MobileIrrigation";
import MobileFieldMap from "@/components/MobileFieldMap";
import { Badge } from "@/components/ui/badge";

type DeviceType = "watch" | "mobile";
type WatchScreen = "home" | "weather" | "camera" | "irrigation" | "gps";
type MobileScreen = "dashboard" | "crops" | "irrigation" | "map" | "weather";
type Language = "en" | "ur";

export default function Home() {
  const [device, setDevice] = useState<DeviceType>("watch");
  const [watchScreen, setWatchScreen] = useState<WatchScreen>("home");
  const [mobileScreen, setMobileScreen] = useState<MobileScreen>("dashboard");
  const [language, setLanguage] = useState<Language>("en");
  const [notification, setNotification] = useState<any>(null);
  const { theme, toggleTheme } = useTheme();

  const handleWatchNavigate = (screen: string) => {
    setWatchScreen(screen as WatchScreen);
  };

  const handleMobileNavigate = (screen: string) => {
    setMobileScreen(screen as MobileScreen);
  };

  const showNotification = () => {
    const notifications = [
      { id: '1', type: 'rain' as const, message: 'Rain alert at 4pm' },
      { id: '2', type: 'pest' as const, message: 'Disease risk detected in Crop A' },
      { id: '3', type: 'irrigation' as const, message: 'Irrigation needed this evening' },
    ];
    setNotification(notifications[Math.floor(Math.random() * notifications.length)]);
  };

  const renderWatchScreen = () => {
    switch (watchScreen) {
      case "home":
        return <WatchHome onNavigate={handleWatchNavigate} />;
      case "weather":
        return <WatchWeather onBack={() => setWatchScreen("home")} />;
      case "camera":
        return <WatchCamera onBack={() => setWatchScreen("home")} />;
      case "irrigation":
        return <WatchIrrigation onBack={() => setWatchScreen("home")} />;
      case "gps":
        return <WatchGPS onBack={() => setWatchScreen("home")} />;
      default:
        return <WatchHome onNavigate={handleWatchNavigate} />;
    }
  };

  const renderMobileScreen = () => {
    switch (mobileScreen) {
      case "dashboard":
        return <MobileDashboard onNavigate={handleMobileNavigate} />;
      case "crops":
      case "weather":
        return <MobileCropAnalysis onBack={() => setMobileScreen("dashboard")} />;
      case "irrigation":
        return <MobileIrrigation onBack={() => setMobileScreen("dashboard")} />;
      case "map":
        return <MobileFieldMap onBack={() => setMobileScreen("dashboard")} />;
      default:
        return <MobileDashboard onNavigate={handleMobileNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold">AgriWatch</h1>
              <Badge variant="secondary" className="hidden sm:inline-flex">
                Agriculture Smart Assistant
              </Badge>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setLanguage(language === "en" ? "ur" : "en")}
                data-testid="button-language-toggle"
              >
                <Languages className="w-5 h-5" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                data-testid="button-theme-toggle"
              >
                {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </Button>
              
              <div className="flex gap-1 p-1 bg-muted rounded-md">
                <Button
                  variant={device === "watch" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setDevice("watch")}
                  data-testid="button-device-watch"
                >
                  <Watch className="w-4 h-4 mr-1" />
                  <span className="hidden sm:inline">Watch</span>
                </Button>
                <Button
                  variant={device === "mobile" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setDevice("mobile")}
                  data-testid="button-device-mobile"
                >
                  <Smartphone className="w-4 h-4 mr-1" />
                  <span className="hidden sm:inline">Mobile</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-8">
        {language === "ur" && (
          <Badge className="mb-4 bg-chart-3/20 text-chart-3" data-testid="badge-language-indicator">
            اردو میں دیکھیں (Urdu Mode Active)
          </Badge>
        )}
        
        {device === "watch" ? (
          <div className="max-w-md mx-auto">
            <div className="bg-card border rounded-lg overflow-hidden shadow-lg">
              <WatchStatusBar />
              {renderWatchScreen()}
            </div>
            <div className="mt-6 text-center">
              <Button 
                variant="outline" 
                onClick={showNotification}
                data-testid="button-show-notification"
              >
                Show Sample Notification
              </Button>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {renderMobileScreen()}
          </div>
        )}
      </main>

      {notification && (
        <WatchNotification
          notification={notification}
          onDismiss={() => setNotification(null)}
          onViewDetails={() => {
            setNotification(null);
            if (notification.type === 'rain') {
              setWatchScreen('weather');
            } else if (notification.type === 'irrigation') {
              setWatchScreen('irrigation');
            }
          }}
        />
      )}
    </div>
  );
}
