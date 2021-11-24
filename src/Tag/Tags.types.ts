import { BulmaComponentPropsWithoutRef, Size } from "..";

export type TagsProps = BulmaComponentPropsWithoutRef<"div"> & {
  hasAddons?: boolean;
  groupSize?: `are-${"normal" | "medium" | "large"}`;
};
