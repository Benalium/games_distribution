import { SerializedStyles } from "@emotion/react";

type ComponentStyle<T> = {
  [K in keyof T]?: T[K] extends object
  ? T[K] extends { css?: any } // Rough check for styled components (adjust as needed)
  ? SerializedStyles
  : ComponentStyle<T[K]> // Recurse into nested objects
  : SerializedStyles;
};

export { ComponentStyle }