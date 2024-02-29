import { CustomIconProps } from "@/interface/icons.interface";
import { primaryColors } from "@/themes/_muiPalette";

function UpArrowChv({ IconColor, IconWidth, IconHeight }: CustomIconProps) {
  return (
    <svg width={IconWidth || "12"} height={IconHeight || "7"} viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.3972 4.83542L8.72221 2.16042L7.08888 0.51875C6.39721 -0.172917 5.27221 -0.172917 4.58055 0.51875L0.263878 4.83542C-0.302789 5.40208 0.105544 6.36875 0.897211 6.36875H5.57221H10.7639C11.5639 6.36875 11.9639 5.40208 11.3972 4.83542Z" fill={IconColor || primaryColors?.black}/>
    </svg>

  );
}

export default UpArrowChv;
