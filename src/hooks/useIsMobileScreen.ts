import { MOBILE_WIDTH } from "src/constants";
import useScreenWidth from "./useScreenWidth";

export default function useIsMobileScreen() {
  const screenWidth = useScreenWidth();
  return screenWidth < MOBILE_WIDTH;
}
