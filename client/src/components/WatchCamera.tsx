import { Camera, ArrowLeft, CheckCircle, Bug, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface WatchCameraProps {
  onBack: () => void;
}

export default function WatchCamera({ onBack }: WatchCameraProps) {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<"healthy" | "pest" | "nutrient" | null>(null);

  const handleCapture = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setResult(["healthy", "pest", "nutrient"][Math.floor(Math.random() * 3)] as any);
    }, 2000);
  };

  const diagnoses = {
    healthy: {
      icon: CheckCircle,
      color: "text-chart-1",
      bgColor: "bg-chart-1/20",
      title: "Healthy Crop",
      message: "Your crop is in excellent condition!"
    },
    pest: {
      icon: Bug,
      color: "text-destructive",
      bgColor: "bg-destructive/20",
      title: "Pest Detected",
      message: "Spray suggested. Check details in app."
    },
    nutrient: {
      icon: Leaf,
      color: "text-chart-4",
      bgColor: "bg-chart-4/20",
      title: "Nutrient Deficiency",
      message: "Apply fertilizer. See app for details."
    }
  };

  if (analyzing) {
    return (
      <div className="p-6 flex items-center justify-center min-h-[400px]" data-testid="camera-analyzing">
        <Card className="p-8 text-center space-y-4">
          <div className="animate-pulse">
            <Camera className="w-24 h-24 mx-auto text-chart-1" />
          </div>
          <p className="text-2xl font-bold">Analyzing...</p>
        </Card>
      </div>
    );
  }

  if (result) {
    const diagnosis = diagnoses[result];
    return (
      <div className="p-6 space-y-6" data-testid="camera-result">
        <Button variant="ghost" onClick={() => setResult(null)} className="mb-2" data-testid="button-back-result">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back
        </Button>
        
        <Card className={`p-8 space-y-6 ${diagnosis.bgColor}`}>
          <div className="flex items-center justify-center">
            <diagnosis.icon className={`w-32 h-32 ${diagnosis.color}`} />
          </div>
          
          <div className="space-y-3">
            <Badge className={`w-full justify-center text-lg py-2 ${diagnosis.bgColor} ${diagnosis.color}`} data-testid="badge-diagnosis">
              {diagnosis.title}
            </Badge>
            <p className="text-lg text-center" data-testid="text-recommendation">
              {diagnosis.message}
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6" data-testid="watch-camera">
      <Button variant="ghost" onClick={onBack} className="mb-2" data-testid="button-back">
        <ArrowLeft className="w-5 h-5 mr-2" /> Back
      </Button>
      
      <Card className="p-8 space-y-8">
        <div className="flex items-center justify-center">
          <Camera className="w-32 h-32 text-chart-1" />
        </div>
        
        <Button 
          className="w-full" 
          size="lg"
          onClick={handleCapture}
          data-testid="button-capture"
        >
          <Camera className="w-6 h-6 mr-2" />
          Capture Crop
        </Button>
      </Card>
    </div>
  );
}
