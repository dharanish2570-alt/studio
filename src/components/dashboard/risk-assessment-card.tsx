"use client";

import { useState, useEffect, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function RiskAssessmentCard() {
  const [riskLevel, setRiskLevel] = useState(0);
  const [isAssessing, setIsAssessing] = useState(false);
  const { toast } = useToast();

  const assessRisk = () => {
    setIsAssessing(true);
    toast({
      title: "Assessing Risk...",
      description: "Analyzing real-time data.",
    });
    setTimeout(() => {
      setRiskLevel(Math.floor(Math.random() * 85) + 5); // Random risk between 5 and 90
      setIsAssessing(false);
    }, 1500);
  };

  useEffect(() => {
    assessRisk();
  }, []);
  
  const riskDetails = useMemo(() => {
    if (riskLevel > 75) {
      return { color: "hsl(var(--destructive))", label: "High Risk" };
    }
    if (riskLevel > 40) {
      return { color: "hsl(var(--primary))", label: "Moderate Risk" };
    }
    return { color: "hsl(var(--accent))", label: "Low Risk" };
  }, [riskLevel]);


  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Risk Assessment</CardTitle>
          <CardDescription>AI-Powered Analysis</CardDescription>
        </div>
        <Button size="sm" onClick={assessRisk} disabled={isAssessing}>
          <Zap className="mr-2 h-4 w-4" />
          {isAssessing ? "Assessing..." : "Re-assess"}
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center py-4">
          <div className="text-5xl font-bold" style={{ color: riskDetails.color }}>
            {riskLevel}%
          </div>
          <p className="text-sm font-medium text-muted-foreground">{riskDetails.label}</p>
        </div>
        <Progress value={riskLevel} className="h-4" style={{'--primary': riskDetails.color} as React.CSSProperties} />
        <div className="text-xs text-muted-foreground">
            Factors considered: Crowd density, weather forecast, active alerts, and user reports.
        </div>
      </CardContent>
    </Card>
  );
}
