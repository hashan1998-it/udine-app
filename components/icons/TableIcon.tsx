import { COLORS } from "@/constants/colors";
import React from "react";
import Svg, { Path } from "react-native-svg";

interface TableIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const TableIcon = ({
  width = 26,
  height = 22,
  color = COLORS.tabBarActiveTintColor,
}: TableIconProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 26 22" fill="none">
      <Path
        d="M12.6523 11.5498L12.6523 17.0499"
        stroke={color}
        strokeWidth="1.66"
        strokeLinecap="round"
      />
      <Path
        d="M12.6504 0.830078C16.0472 0.830128 19.0818 1.4902 21.2363 2.52051C23.4515 3.57997 24.4696 4.88241 24.4697 6.0498C24.4697 7.21726 23.4517 8.51957 21.2363 9.5791C19.0818 10.6095 16.0473 11.2705 12.6504 11.2705C9.2532 11.2705 6.21809 10.6095 4.06348 9.5791C1.84811 8.51957 0.830078 7.21726 0.830078 6.0498C0.830221 4.88241 1.84826 3.57997 4.06348 2.52051C6.21808 1.49012 9.2533 0.830078 12.6504 0.830078Z"
        stroke={color}
        strokeWidth="1.66"
      />
      <Path
        d="M12.6523 17.3301C14.0701 17.3301 15.3125 17.6192 16.1699 18.0479C17.077 18.5014 17.3223 18.9743 17.3223 19.25C17.3223 19.5257 17.077 19.9986 16.1699 20.4521C15.3125 20.8808 14.0701 21.1699 12.6523 21.1699C11.2346 21.1699 9.99218 20.8808 9.13477 20.4521C8.2277 19.9986 7.98242 19.5257 7.98242 19.25C7.98244 18.9743 8.22772 18.5014 9.13477 18.0479C9.99218 17.6192 11.2346 17.3301 12.6523 17.3301Z"
        stroke={color}
        strokeWidth="1.66"
      />
    </Svg>
  );
};

export default TableIcon;
