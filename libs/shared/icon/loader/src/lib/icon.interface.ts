export interface IconImageFile {
  iconName: string;
  iconPath: string;
}

export interface CustomIconData {
  iconName: string;
  iconData: string;
}

export interface IconConfig {
  iconImageFiles: IconImageFile[];
  customIcons: CustomIconData[];
}
