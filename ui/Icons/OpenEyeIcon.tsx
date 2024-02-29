import { CustomIconProps } from "@/interface/icons.interface";

function OpenEyeIcon({ IconColor, IconWidth, IconHeight }: CustomIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={IconWidth || "20"}
      height={IconHeight || "20"}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M12.9833 10.0001C12.9833 11.6501 11.6499 12.9834 9.99993 12.9834C8.34993 12.9834 7.0166 11.6501 7.0166 10.0001C7.0166 8.35006 8.34993 7.01672 9.99993 7.01672C11.6499 7.01672 12.9833 8.35006 12.9833 10.0001Z"
        stroke={IconColor || "#C6C6C6"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99987 16.8916C12.9415 16.8916 15.6832 15.1583 17.5915 12.1583C18.3415 10.9833 18.3415 9.00831 17.5915 7.83331C15.6832 4.83331 12.9415 3.09998 9.99987 3.09998C7.0582 3.09998 4.31654 4.83331 2.4082 7.83331C1.6582 9.00831 1.6582 10.9833 2.4082 12.1583C4.31654 15.1583 7.0582 16.8916 9.99987 16.8916Z"
        stroke={IconColor || "#C6C6C6"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default OpenEyeIcon;
