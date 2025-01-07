import { SlideItem } from "../components/common/SlideItem";

export const renderItem = ({ rounded = false, style } = {}) => {
  return ({ index }) => (
    <SlideItem key={index} index={index} rounded={rounded} style={style} />
  );
};
