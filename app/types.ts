import type { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type MuiIconType = OverridableComponent<
  SvgIconTypeMap<object, "svg">
> & {
  muiName: string;
};

export interface BlogHeadingAttributes {
  content: string;
}
export interface BlogParagraphAttributes {
  content: string;
}
export interface BlogImageAttributes {
  src: string;
  alt: string;
}

export interface BlogCodeAttributes {
  content: string;
  language: string;
}

export interface TableCell {
  content: string | BlogImageAttributes;
}

export interface TableRow {
  [key: string]: TableCell;
}

export interface BlogTableAttributes {
  rows: TableRow[];
}

export type BlogBlock =
  | {
      category: "heading";
      attributes: BlogHeadingAttributes;
    }
  | {
      category: "paragraph";
      attributes: BlogParagraphAttributes;
    }
  | {
      category: "image";
      attributes: BlogImageAttributes;
    }
  | {
      category: "code";
      attributes: BlogCodeAttributes;
    }
  | {
      category: "table";
      attributes: BlogTableAttributes;
    };

export interface BlogData {
  id: string;
  title: string;
  headline: string;
  date: string;
  author: string;
  tag: string;
  cover: string;
  quote: string;
  contents: BlogBlock[];
}
