"use client"

interface Alfa3LogoProps {
  size?: number
  className?: string
}

export function Alfa3Logo({ size = 36, className = "" }: Alfa3LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 2000 2000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="ALFA3 Logo"
    >
      <polygon fill="#5681e2" points="535.76 1251.31 750.59 1365.97 750.59 1182.98 535.76 1079.52 535.76 1251.31"/>
      <polygon fill="#86a4ea" points="773.37 1365.97 987.62 1251.7 987.62 1079.72 773.37 1182.98 773.37 1365.97"/>
      <polygon fill="#1c64da" points="762.17 957.92 550.04 1061.77 761.98 1163.68 973.91 1061.77 762.17 957.92"/>
      <polygon fill="#5681e2" points="1010.4 1251.7 1224.65 1365.97 1224.65 1182.98 1010.4 1079.72 1010.4 1251.7"/>
      <polygon fill="#86a4ea" points="1247.42 1182.98 1247.42 1365.97 1462.26 1251.31 1462.26 1079.52 1247.42 1182.98"/>
      <polygon fill="#5681e2" points="774.91 939.2 989.16 1042.85 989.16 859.1 774.33 755.64 774.91 939.2"/>
      <polygon fill="#86a4ea" points="1011.75 1042.85 1056.91 1020.85 1225.03 938.62 1226.58 755.64 1011.75 859.1 1011.75 1042.85"/>
      <polygon fill="#1c64da" points="1236.81 958.11 1066.37 1041.11 1024.1 1061.77 1236.04 1163.68 1447.97 1061.77 1236.81 958.11"/>
      <polygon fill="#1c64da" points="1000.55 634.03 788.62 737.88 1000.36 839.79 1212.29 737.88 1000.55 634.03"/>
    </svg>
  )
}
