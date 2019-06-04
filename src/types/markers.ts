export type Marker = {
    x: number;
    y: number;
    z: number;
    obstructed: boolean;
};

export type NodeType =
    | "iron"
    | "copper"
    | "limestone"
    | "coal"
    | "oil"
    | "caterium"
    | "sulfur"
    | "bauxite"
    | "quartz"
    | "uranium"
    | "sam"
    | "geyser"
    | "unknown";

export type NodePurity = "impure" | "normal" | "pure" | "unknown";

export type Node = Marker & {
    purity: NodePurity;
    type: NodeType;
    originId: string;
    exploited: boolean;
  };