import { ReactNode } from 'react'

export interface Pages {
  title: string;
  path: string;
}

export interface PagesProps {
  pages: Pages[];
  children?: ReactNode;
}

export interface RecipeData {
  id: { "$oid": string; };
  title: string;
  slug: string;
  subtitle: string;
  imageFile: string;
  ingredients: Array<string | Ingredient>;
  preparationSteps: Array<string>;
  oven: Array<string | OvenInfo>;
  additional:  Array<string | AdditionalInfo>;
  categories: Array<string>;
  tags: Array<string>;
}

export interface Ingredient {
  amount: number;
  unit: string;
  ingredient: string;
}

export interface AdditionalInfo {
  durationCook: number;
  durationPrep: number;
  durationChill: number;
  durationTotal: number;
}

export interface OvenInfo {
  "temperature": number;
  "unit": string;
  "preheat": boolean;
  "mode": string;
}