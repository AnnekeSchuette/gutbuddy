import { ReactNode } from 'react'

export interface Pages {
  title: string;
  path: string;
}

export interface PagesProps {
  pages: Pages[];
  children?: ReactNode;
}

export interface Id {
    $oid: string;
}

export interface Ingredient {
    amount: number;
    unit: string;
    ingredient: string;
}

export interface Oven {
    temperature: number;
    unit: string;
    preheat?: boolean;
    mode: string;
}

export interface Additional {
    durationCook: number;
    durationPrep?: number;
    durationChill?: number;
    durationTotal?: number;
}

export interface RecipeObject {
    _id: Id;
    title: string;
    slug: string;
    subtitle: string;
    imageFile: string;
    ingredients: Ingredient[];
    preparationSteps: string[];
    oven: Oven[];
    additional: Additional[];
    categories: string[];
    tags: string[];
}