import { BulmaComponentPropsWithoutRef } from "./../types/component";

export type DropdownProps = BulmaComponentPropsWithoutRef<"div"> & {
  isActive?: boolean;
  isHoverable?: boolean;
  isRightAligned?: boolean;
};

export type DropdownTriggerProps = BulmaComponentPropsWithoutRef<"div">;
export type DropdownMenuProps = BulmaComponentPropsWithoutRef<"div">;
export type DropdownContentProps = BulmaComponentPropsWithoutRef<"div">;

type DropdownItemProps = { isActive?: boolean };
export type DropdownAnchorProps = BulmaComponentPropsWithoutRef<"a"> &
  DropdownItemProps;
export type DropdownDivProps = BulmaComponentPropsWithoutRef<"div"> &
  DropdownItemProps;

export type DropdownDividerProps = BulmaComponentPropsWithoutRef<"hr">;
