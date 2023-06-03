export interface SharedUiIconImageFile {
  iconName: string;
  iconPath: string;
}

export interface CustomIconData {
  iconName: string;
  iconData: string;
}

export interface SharedUiIconConfig {
  iconImageFiles: SharedUiIconImageFile[];
  customIcons: CustomIconData[];
}
