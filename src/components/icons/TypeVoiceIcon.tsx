import { Mic } from "lucide-react";

const TypeVoiceIcon = ({
  width,
  height,
}: {
  width?: number | string;
  height?: number | string;
}) => <Mic width={width || 24} height={height || 24} />;

export default TypeVoiceIcon;
