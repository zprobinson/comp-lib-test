import {
  BulmaComponentPropsWithoutRef,
  DeleteProps,
  Is,
  PrimaryColor,
} from "..";

export type NotificationProps = BulmaComponentPropsWithoutRef<"div"> & {
  onClose: () => void;
  color?: NotificationColor;
  deleteProps?: Omit<DeleteProps, "onClick">;
};

type NotificationColorOption = Is<PrimaryColor>;
type NotificationColorLightOption = `${NotificationColorOption} is-light`;

export type NotificationColor =
  | NotificationColorOption
  | NotificationColorLightOption;
