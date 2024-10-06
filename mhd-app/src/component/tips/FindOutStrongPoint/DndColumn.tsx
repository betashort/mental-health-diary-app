import { FC } from "react";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import DndCard, { CardType } from "./DndCard";

export type ColumnType = {
  id: string;
  title: string;
  cards: CardType[];
};

const DndColumn: FC<ColumnType> = ({ id, title, cards }) => {
  const { setNodeRef } = useDroppable({ id: id });
  return (
    // ソートを行うためのContextです。
    // strategyは4つほど存在しますが、今回は縦・横移動可能なリストを作るためrectSortingStrategyを採用
    <SortableContext id={id} items={cards} strategy={rectSortingStrategy}>
      <div className="m-2 border-2 border-collapse" ref={setNodeRef}>
        <p className=" ">{title}</p>
        {cards.map((card) => (
          <DndCard key={card.id} id={card.id} title={card.title}></DndCard>
        ))}
      </div>
    </SortableContext>
  );
};

export default DndColumn;