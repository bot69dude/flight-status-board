import { cn } from "@/lib/utils";

const statusConfig = {
  "On Time": {    
    color: "bg-green-500",
    label: "On Time"
  },
  Delayed: {      
    color: "bg-yellow-500",
    label: "Delayed"
  },
  Boarding: {     
    color: "bg-blue-500",
    label: "Boarding"
  },
  Departed: {   
    color: "bg-gray-500",
    label: "Departed"
  }
} as const;

interface StatusIndicatorProps {
  status: keyof typeof statusConfig | string;
}

export const StatusIndicator = ({ status }: StatusIndicatorProps) => {
  const { color, label } = statusConfig[status as keyof typeof statusConfig] || {
    color: "bg-gray-300",
    label: "Unknown"
  };

  return (
    <div className="flex items-center gap-2">
      <span className={cn("h-3 w-3 rounded-full", color)} aria-hidden="true" />
      <span className="font-medium">{label}</span>
    </div>
  );
};