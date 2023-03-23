import { FC, RefObject, useCallback, useRef } from "react";

export interface MenuItemProps {
  item: { menu: string; ref: RefObject<HTMLDivElement> };
  index: number;
}

const MenuItem: FC<MenuItemProps> = ({ item, index }) => {
  const borderBottomRef = useRef<HTMLDivElement>(null);

  const toCode = useCallback((menuItem: string) => {
    return `<${menuItem.toLowerCase()}>`;
  }, []);

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
  }, [item.ref]);

  return (
    <div
      className="flex space-x-2 cursor-pointer h-[6vh] items-center relative"
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
