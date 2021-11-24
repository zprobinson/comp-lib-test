import { BulmaComponentPropsWithoutRef, Size } from "..";

export type TagsProps = BulmaComponentPropsWithoutRef<"div"> & {
  hasAddons?: boolean;
  groupSize?: Exclude<Size, "is-small">;
};
