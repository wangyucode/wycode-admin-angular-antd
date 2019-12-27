// common start
export interface JsonResult<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface ServerError extends JsonResult<null> {
  path: string;
  status: number;
  timestamp: Date;
  message: string;
}

// common end

// dashboard start
export interface AppUse {
  app: string;
  use: number;
}

export interface BlogAccess {
  path: string;
  count: number;
}

export interface ErrorElement {
  path: string;
  method: string;
  count: number;
}

// dashboard end

// dota start
export interface Version {
  version: string;
  date: string;
}

export interface Hero {
  name?: string;
  imageUrl?: string;
  type?: string;
  icon?: string;
}

export interface HeroDetail {
  agilityGrow?: string;
  agilityStart?: number;
  armor?: number;
  attackPower?: number;
  attackSpeed?: number;
  attackType?: string;
  intelligenceGrow?: string;
  intelligenceStart?: number;
  name?: string;
  otherName?: string;
  speed?: number;
  story?: string;
  strengthGrow?: string;
  strengthStart?: number;
  talent10Left?: string;
  talent10Right?: string;
  talent15Left?: string;
  talent15Right?: string;
  talent20Left?: string;
  talent20Right?: string;
  talent25Left?: string;
  talent25Right?: string;
}

export interface HeroAbility {
  annotation?: string;
  attributes?: Map<string, string>;
  coolDown?: string;
  description?: string;
  heroName?: string;
  imageUrl?: string;
  magicConsumption?: string;
  name?: string;
  num?: number;
  tips?: string;
}

export interface DotaItem {
  key?: string;
  type?: string;
  cname?: string;
  name?: string;
  lore?: string;
  img?: string;
  notes?: string;
  desc?: object;
  cost?: number;
  mc?: string;
  cd?: string;
  components?: string[];
  attrs?: object;
}

export const BASIC_ITEM_TYPES = ['消耗品', '属性', '军备', '奥术'];
export const ADVANCE_ITEM_TYPES = ['常用', '辅助', '法器', '防具', '武器', '圣物'];
export const SECRET_ITEM_TYPES = ['神秘商店'];
// dota end
