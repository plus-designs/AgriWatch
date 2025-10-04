import { Droplets, ArrowLeft, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface WatchIrrigationProps {
  onBack: () => void;
}

export default function WatchIrrigation({ onBack }: WatchIrrigationProps) {
  const [status, setStatus] = useState<"pending" | "done" | "snoozed">("pending");

  return (
    <div className="p-6 space-y-6" data-testid="watch-irrigation">
      <Button variant="ghost" onClick={onBack} className="mb-2" data-testid="button-back">
        <ArrowLeft className="w-5 h-5 mr-2" /> Back
      </Button>
      
      <Card className="p-8 space-y-6 bg-chart-2/20">
        <div className="flex items-center justify-center">
          <Droplets className="w-32 h-32 text-chart-2" />
        </div>
        
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-center">Next Irrigation</h3>
          <p className="text-xl text-center" data-testid="text-irrigation-schedule">
            Tomorrow, 6:00 AM
          </p>
          {status === "done" && (
            <Badge className="w-full justify-center text-lg py-2 bg-chart-1/20 text-chart-1" data-testid="badge-status-done">
              <Check className="w-5 h-5 mr-2" /> Marked as Done
            </Badge>
          )}
          {status === "snoozed" && (
            <Badge className="w-full justify-center text-lg py-2 bg-chart-4/20 text-chart-4" data-testid="badge-status-snoozed">
              <Clock className="w-5 h-5 mr-2" /> Snoozed
            </Badge>
          )}
        </div>
        
        {status === "pending" && (
          <div className="flex gap-3">
            <Button 
              variant="default" 
              className="flex-1"
              size="lg"
              onClick={() => setStatus("done")}
              data-testid="button-done"
            >
              <Check className="w-5 h-5 mr-2" />
              Done
            </Button>
            <Button 
              variant="outline" 
              className="flex-1"
              size="lg"
              onClick={() => setStatus("snoozed")}
              data-testid="button-snooze"
            >
              <Clock className="w-5 h-5 mr-2" />
              Snooze
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
