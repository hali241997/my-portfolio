import { FC, RefObject, useCallback, useRef } from "react";
import { toCode } from "utils/conversion";

export interface MenuItemProps {
  item: { menu: string; ref: RefObject<HTMLDivElement> };
  index: number;
  onNavigate?: () => void;
}

const MenuItem: FC<MenuItemProps> = ({ item, index, onNavigate }) => {
  const borderBottomRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = useCallback(() => {
    if (borderBottomRef.current) {
      borderBottomRef.current.classList.replace("border-b-0", "border-b-2");
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (borderBottomRef.current) {
      borderBottomRef.current.classList.replace("border-b-2", "border-b-0");
    }
  }, []);

  const handleClick = useCallback(() => {
    if (item.ref.current) {
      const current = item.ref.current;

      if (current.classList.contains("active")) {
        current.scrollIntoView({ behavior: "smooth" });
      } else {
        const rect = current.getBoundingClientRect();
        const offset = window.scrollY + rect.top - 0.3 * window.innerHeight;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    }

    onNavigate?.();
  }, [item.ref, onNavigate]);

  return (
    <div
      className="flex px-6 py-2 space-x-2 cursor-pointer relative md:px-0 md:py-0 md:h-[6vh] md:items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="text-bluePrimary font-SourceCodePro">
        {(index + 1).toString().padStart(2, "0")}.
      </div>
      <div className="font-SourceCodePro">{toCode(item.menu)}</div>

      <div
        ref={borderBottomRef}
        className="border-b-bluePrimary border-b-0 absolute bottom-0 -left-2 right-[50%] rounded"
      />
    </div>
  );
};

export default MenuItem;
