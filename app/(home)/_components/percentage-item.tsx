import { ReactNode } from "react";

interface PercentageItemProps {
  icon: ReactNode;
  value: number;
  title: string;
}

const PercentageItem = ({ icon, value, title }: PercentageItemProps) => {
  return (
    <div className="flex items-center justify-between">
      {/* ICONE */}
      <div className="flex-items-center flex gap-2">
        {icon}
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
      {/* VALOR */}
      <p className="text-sm font-bold">{value}</p>
    </div>
  );
};

export default PercentageItem;
