import { FC } from "react";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

export type CardType = {
  id: string;
  title: string;
};

const DndCard: FC<CardType> = ({ id, title }) => {
  const { attributes, listeners, setNodeRef, transform } = useSortable({
    id: id
  });

  const style = {
    transform: CSS.Transform.toString(transform)
  };

  return (
    // attributes、listenersはDOMイベントを検知するために利用します。
    // listenersを任意の領域に付与することで、ドラッグするためのハンドルを作ることもできます。
    <div className="m-2 p-2 h-20 border-2 flex justify-center items-center "  ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <div className="" id={id}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default DndCard;