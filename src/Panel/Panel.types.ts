import { IconProps } from "./../Icon/Icon.types";
import {
  BulmaComponentPropsWithoutRef,
  PrimaryColor,
  WithoutHelpers,
} from "./../types";

export type InnerPanelProps = WithoutHelpers<PanelProps>;
export type InnerPanelTabProps = WithoutHelpers<PanelTabProps>;
export type InnerPanelIconProps = WithoutHelpers<PanelIconProps>;

export type PanelProps = BulmaComponentPropsWithoutRef<"nav"> & {
  color?: PrimaryColor;
};

export type PanelTabsProps = BulmaComponentPropsWithoutRef<"p">;
export type PanelTabProps = BulmaComponentPropsWithoutRef<"a"> & {
  isActive?: boolean;
};

export type PanelHeadingProps = BulmaComponentPropsWithoutRef<"p">;

export type PanelBlockDivProps = BulmaComponentPropsWithoutRef<"div">;
export type PanelBlockAnchorProps = BulmaComponentPropsWithoutRef<"a">;
export type PanelBlockLabelProps = BulmaComponentPropsWithoutRef<"label">;

export type PanelIconProps = Omit<IconProps, "containerSize">;
