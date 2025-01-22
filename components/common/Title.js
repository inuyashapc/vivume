import { View, Text } from "react-native";
import React from "react";

export default function Title({
  fontWeight,
  color,
  lineHeight,
  children,
  fontSize,
  marginBottom,
  marginTop,
}) {
  return (
    <Text
      style={{
        fontWeight,
        color,
        lineHeight,
        fontSize,
        marginBottom,
        marginTop,
      }}
    >
      {children}
    </Text>
  );
}
