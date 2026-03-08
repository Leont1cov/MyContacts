import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type ProfileLink = {
    id?: string;
    url: string;
    label: string;
    social: string;
    icon: IconDefinition;
    color: string;
};