import { MapPin, ArrowLeft, ArrowUp, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface WatchGPSProps {
  onBack: () => void;
}

export default function WatchGPS({ onBack }: WatchGPSProps) {
  const [marked, setMarked] = useState(false);

  return (
    <div className="p-6 space-y-6" data-testid="watch-gps">
      <Button variant="ghost" onClick={onBack} className="mb-2" data-testid="button-back">
        <ArrowLeft className="w-5 h-5 mr-2" /> Back
      </Button>
      
      <Card className="p-8 space-y-6">
        <div className="bg-chart-1/10 rounded-lg p-6 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <ArrowUp className="w-16 h-16 text-chart-1" />
          </div>
          <p className="text-xl text-center font-semibold" data-testid="text-navigation">
            Walk 120m forward → turn left
          </p>
        </div>
        
        <div className="space-y-3">
          <h4 className="text-lg font-semibold">Field Zones</h4>
          <div className="flex gap-2 flex-wrap">
            <Badge className="bg-destructive/20 text-destructive" data-testid="badge-zone-problem">
              🔴 Problem Spot
            </Badge>
            <Badge className="bg-chart-1/20 text-chart-1" data-testid="badge-zone-healthy">
              🟢 Healthy Zone
            </Badge>
          </div>
        </div>
        
        <Button 
          variant={marked ? "secondary" : "default"}
          className="w-full" 
          size="lg"
          onClick={() => setMarked(!marked)}
          data-testid="button-mark-spot"
        >
          <Plus className="w-5 h-5 mr-2" />
          {marked ? "Spot Marked" : "Mark Spot"}
        </Button>
      </Card>
    </div>
  );
}
