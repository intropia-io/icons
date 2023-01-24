import * as icons from "./objects";
export type iconTypes = keyof typeof icons;
export interface Icon {
    name: iconTypes;
    data: string;
}

export { default as IconComponent } from "./components/icon.component";
