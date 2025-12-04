export interface ToxicityResult {
  isToxic: boolean;
  score: number; // 0 to 100
  category: string;
  advice: string;
}

export interface NavItem {
  label: string;
  href: string;
}
