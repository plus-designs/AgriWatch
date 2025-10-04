import { ArrowLeft, Droplets, Calendar, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MobileIrrigationProps {
  onBack: () => void;
}

export default function MobileIrrigation({ onBack }: MobileIrrigationProps) {
  const schedule = [
    { id: 1, field: "Wheat Field A", time: "Tomorrow, 6:00 AM", status: "pending" },
    { id: 2, field: "Corn Field B", time: "Tomorrow, 7:00 AM", status: "pending" },
    { id: 3, field: "Rice Field C", time: "Today, 6:00 AM", status: "completed" },
    { id: 4, field: "Wheat Field D", time: "Yesterday, 6:00 AM", status: "completed" },
  ];

  return (
    <div className="space-y-6" data-testid="mobile-irrigation">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={onBack} data-testid="button-back">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-3xl font-bold">Irrigation Schedule</h1>
      </div>

      <Card className="bg-chart-2/10" data-testid="card-next">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Droplets className="w-6 h-6 text-chart-2" />
            Next Irrigation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-2xl font-bold">Tomorrow, 6:00 AM</p>
            <p className="text-muted-foreground">Wheat Field A</p>
          </div>
          <div className="flex gap-3">
            <Button variant="default" className="flex-1" data-testid="button-mark-done">
              <Check className="w-5 h-5 mr-2" />
              Mark Done
            </Button>
            <Button variant="outline" className="flex-1" data-testid="button-snooze">
              <Clock className="w-5 h-5 mr-2" />
              Snooze
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Schedule</h2>
        {schedule.map((item) => (
          <Card key={item.id} data-testid={`card-schedule-${item.id}`}>
            <CardContent className="pt-6 flex items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{item.time}</span>
                </div>
                <p className="font-semibold">{item.field}</p>
              </div>
              {item.status === "completed" ? (
                <Badge className="bg-chart-1/20 text-chart-1" data-testid={`badge-completed-${item.id}`}>
                  <Check className="w-4 h-4 mr-1" /> Completed
                </Badge>
              ) : (
                <Badge className="bg-chart-4/20 text-chart-4" data-testid={`badge-pending-${item.id}`}>
                  Pending
                </Badge>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
