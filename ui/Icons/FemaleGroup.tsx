import { CustomIconProps } from "@/interface/icons.interface";
import { primaryColors } from "@/themes/_muiPalette";

function FemaleGroup({ IconColor, IconWidth, IconHeight }: CustomIconProps) {
  return (
    <svg width={IconWidth || "14"} height={IconHeight || "20"} viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.6673 6.66666C13.6683 5.38346 13.299 4.12723 12.6036 3.04877C11.9082 1.97031 10.9164 1.11545 9.74713 0.586809C8.57788 0.0581646 7.28091 -0.121801 6.01189 0.0685164C4.74288 0.258833 3.55576 0.811345 2.59302 1.65973C1.63029 2.50811 0.932851 3.61632 0.584434 4.85131C0.236017 6.08631 0.251425 7.39562 0.628808 8.62208C1.00619 9.84854 1.72951 10.94 2.71195 11.7655C3.69438 12.591 4.89418 13.1154 6.16732 13.2758V15.8333H4.50065C4.27964 15.8333 4.06767 15.9211 3.91139 16.0774C3.75511 16.2337 3.66732 16.4457 3.66732 16.6667C3.66732 16.8877 3.75511 17.0996 3.91139 17.2559C4.06767 17.4122 4.27964 17.5 4.50065 17.5H6.16732V19.1667C6.16732 19.3877 6.25511 19.5996 6.41139 19.7559C6.56767 19.9122 6.77964 20 7.00065 20C7.22166 20 7.43362 19.9122 7.5899 19.7559C7.74618 19.5996 7.83398 19.3877 7.83398 19.1667V17.5H9.50065C9.72166 17.5 9.93362 17.4122 10.0899 17.2559C10.2462 17.0996 10.334 16.8877 10.334 16.6667C10.334 16.4457 10.2462 16.2337 10.0899 16.0774C9.93362 15.9211 9.72166 15.8333 9.50065 15.8333H7.83398V13.2758C9.44357 13.0716 10.9236 12.288 11.9973 11.0715C13.0709 9.85508 13.6646 8.28915 13.6673 6.66666ZM2.00065 6.66666C2.00065 5.67776 2.29389 4.71106 2.8433 3.88881C3.39271 3.06657 4.1736 2.4257 5.08723 2.04727C6.00086 1.66883 7.0062 1.56981 7.9761 1.76274C8.94601 1.95566 9.83692 2.43187 10.5362 3.13113C11.2354 3.83039 11.7116 4.72131 11.9046 5.69121C12.0975 6.66112 11.9985 7.66645 11.62 8.58008C11.2416 9.49371 10.6007 10.2746 9.7785 10.824C8.95625 11.3734 7.98956 11.6667 7.00065 11.6667C5.67497 11.6653 4.40397 11.1381 3.46658 10.2007C2.52918 9.26334 2.00197 7.99234 2.00065 6.66666Z" fill={IconColor || primaryColors?.white}/>
    </svg>
    
    
  );
}

export default FemaleGroup;
