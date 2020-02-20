export interface AppConfiguration {
  name: string;
  graphic: AppConfigGraphic;
  input: AppConfigInput;
}

export interface AppConfigGraphic {
  colorSelection: AppConfigColorSelection[];
  borderColor: string;
}

export interface AppConfigColorSelection {
  name: string;
  color: string;
  selected: boolean;
}

export interface AppConfigInput {
  min: number;
  max: number;
  default: number;
}
