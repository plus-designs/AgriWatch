import { ArrowLeft, CheckCircle, Bug, Leaf, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MobileCropAnalysisProps {
  onBack: () => void;
}

export default function MobileCropAnalysis({ onBack }: MobileCropAnalysisProps) {
  const analyses = [
    { id: 1, status: "healthy", crop: "Wheat Field A", time: "2 hours ago", recommendation: "Continue regular monitoring" },
    { id: 2, status: "pest", crop: "Corn Field B", time: "5 hours ago", recommendation: "Apply pesticide spray within 24 hours" },
    { id: 3, status: "nutrient", crop: "Rice Field C", time: "1 day ago", recommendation: "Apply nitrogen fertilizer" },
  ];

  const statusConfig = {
    healthy: { icon: CheckCircle, color: "text-chart-1", bg: "bg-chart-1/20", label: "Healthy" },
    pest: { icon: Bug, color: "text-destructive", bg: "bg-destructive/20", label: "Pest Detected" },
    nutrient: { icon: Leaf, color: "text-chart-4", bg: "bg-chart-4/20", label: "Nutrient Deficiency" },
  };

  return (
    <div className="space-y-6" data-testid="mobile-crop-analysis">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={onBack} data-testid="button-back">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-3xl font-bold">Crop Analysis</h1>
      </div>

      <Card data-testid="card-stats">
        <CardHeader>
          <CardTitle>Analysis Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-chart-1">12</p>
              <p className="text-sm text-muted-foreground">Total Scans</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-chart-1">8</p>
              <p className="text-sm text-muted-foreground">Healthy</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-destructive">4</p>
              <p className="text-sm text-muted-foreground">Issues</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Recent Analyses</h2>
        {analyses.map((analysis) => {
          const config = statusConfig[analysis.status as keyof typeof statusConfig];
          const StatusIcon = config.icon;
          
          return (
            <Card key={analysis.id} className={`${config.bg}`} data-testid={`card-analysis-${analysis.id}`}>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{analysis.crop}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{analysis.time}</span>
                    </div>
                  </div>
                  <StatusIcon className={`w-12 h-12 ${config.color}`} />
                </div>
                
                <Badge className={`${config.bg} ${config.color}`} data-testid={`badge-status-${analysis.id}`}>
                  {config.label}
                </Badge>
                
                <div className="bg-background/50 rounded-md p-3">
                  <p className="text-sm font-medium">Recommendation:</p>
                  <p className="text-sm text-muted-foreground mt-1">{analysis.recommendation}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
