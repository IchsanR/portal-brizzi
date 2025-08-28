import type { ComponentType, ReactElement, ReactNode } from "react";

export interface AppRoute {
  path: string;
  element: ComponentType;
  children?: AppRoute[],
  protected?: boolean,
  title?: string,
}

export interface RouterProps {
  children: ReactNode;
}