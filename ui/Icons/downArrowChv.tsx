import { CustomIconProps } from "@/interface/icons.interface";
import { primaryColors } from "@/themes/_muiPalette";

function DownArrowChv({ IconColor, IconWidth, IconHeight }: CustomIconProps) {
  return (
    <svg width={IconWidth || "12"} height={IconHeight || "7"} viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.265871 1.90207L2.94087 4.57707L4.57421 6.21874C5.26587 6.9104 6.39087 6.9104 7.08254 6.21874L11.3992 1.90207C11.9659 1.33541 11.5575 0.368739 10.7659 0.368739L6.09087 0.368739H0.899205C0.099205 0.368739 -0.300796 1.33541 0.265871 1.90207Z" fill={IconColor || primaryColors?.black}/>
    </svg>
    

  );
}

export default DownArrowChv;
