import { CustomIconProps } from "@/interface/icons.interface";
import { primaryColors } from "@/themes/_muiPalette";

function FacebookIcon({ IconColor, IconWidth, IconHeight }: CustomIconProps) {
  return (

    <svg width={IconWidth || "7"} height={IconHeight || "12"} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.05046 6.74963L6.3921 4.57897H4.28759V3.16803C4.28759 2.57449 4.5814 1.99451 5.52092 1.99451H6.49118V0.146055C5.92614 0.0559528 5.3552 0.00720751 4.78297 0.000213623C3.05085 0.000213623 1.92002 1.04146 1.92002 2.92383V4.57897H0V6.74963H1.92002V11.9999H4.28759V6.74963H6.05046Z" fill={IconColor || primaryColors?.color03202E}/>
    </svg>


  );
}

export default FacebookIcon;
