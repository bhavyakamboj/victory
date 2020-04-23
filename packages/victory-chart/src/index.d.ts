import * as React from "react";
import {
  CategoryPropType,
  EventPropTypeInterface,
  DomainPropType,
  DomainPaddingPropType,
  StringOrNumberOrCallback,
  VictoryCommonProps,
  VictoryStyleInterface
} from "victory-core";

export type AxesType = {
  independent: React.ReactElement;
  dependent: React.ReactElement;
}

export interface VictoryChartProps extends VictoryCommonProps {
  defaultAxes?: AxesType;
  defaultPolarAxes?: AxesType;
  categories?: CategoryPropType;
  children?: React.ReactElement | React.ReactElement[];
  domain?: DomainPropType;
  endAngle?: number;
  events?: EventPropTypeInterface<string, string | number>[];
  eventKey?: StringOrNumberOrCallback;
  innerRadius?: number;
  prependDefaultAxes: boolean;
  startAngle?: number;
  style?: Pick<VictoryStyleInterface, "parent">;
}

export class VictoryChart extends React.Component<VictoryChartProps, any> {}
