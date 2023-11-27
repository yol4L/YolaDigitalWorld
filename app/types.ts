import type { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type MuiIconType = OverridableComponent<
  SvgIconTypeMap<object, "svg">
> & {
  muiName: string;
};

export type DarkModeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

// Define interfaces and types for portfolio view
export interface SectionBlockData {
  type: "section";
  id: string;
  title: string;
  headerText: string;
  description: string[];
  relatedComponent: React.ComponentType<{
    inView: boolean;
    scrollingUp: boolean;
  }>;
}

export interface QuoteBlockData {
  type: "quote";
  id: string;
  text: string;
  bgUrl: string;
}

export type SectionContentItem = SectionBlockData | QuoteBlockData;

// Define interfaces and types for blog view
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

export type PersonalInfoItem = {
  id: string;
  name: string;
  icon: MuiIconType;
  details: string;
};
