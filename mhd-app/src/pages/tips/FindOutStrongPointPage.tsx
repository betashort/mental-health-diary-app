import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverEvent,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import DndColumn, { ColumnType } from "../../component/tips/FindOutStrongPoint/DndColumn";
import React, { useState } from "react";

//https://docs.dndkit.com/introduction/getting-started
//https://zenn.dev/castingone_dev/articles/dndkit20231031
//https://zenn.dev/aldagram_tech/articles/c2cf248bd016fc
//https://zenn.dev/hotari/articles/4c186b83b15975
function FindOutStrongPointPage() {
  const data: ColumnType[] = [
    {
      id: "Thinking",
      title: "Tinking",
      cards: [
        {
          id: "a",
          title: "設計を考える",
        },
      ],
    },
    {
      id: "Communication",
      title: "Communication",
      cards: [
        {
          id: "b",
          title: "みんなで意見を出し合う",
        },
      ],
    },
    {
        id: "Leadership",
        title: "Leadersip",
        cards: [
          {
            id: "c",
            title: "みんなをまとめる",
          },
        ],
      },
      {
        id: "Other",
        title: "Other",
        cards: [
          {
            id: "d",
            title: "遊ぶ",
          },
        ],
      },
  ];
  const [columns, setColumns] = useState<ColumnType[]>(data);

  const findColumn = (unique: string | null) => {
    if (!unique) {
      return null;
    }
    // overの対象がcolumnの場合があるためそのままidを返す
    if (columns.some((c) => c.id === unique)) {
      return columns.find((c) => c.id === unique) ?? null;
    }
    const id = String(unique);
    const itemWithColumnId = columns.flatMap((c) => {
      const columnId = c.id;
      return c.cards.map((i) => ({ itemId: i.id, columnId: columnId }));
    });
    const columnId = itemWithColumnId.find((i) => i.itemId === id)?.columnId;
    return columns.find((c) => c.id === columnId) ?? null;
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over, delta } = event;
    const activeId = String(active.id);
    const overId = over ? String(over.id) : null;
    const activeColumn = findColumn(activeId);
    const overColumn = findColumn(overId);
    if (!activeColumn || !overColumn || activeColumn === overColumn) {
      return null;
    }
    setColumns((prevState) => {
      const activeItems = activeColumn.cards;
      const overItems = overColumn.cards;
      const activeIndex = activeItems.findIndex((i) => i.id === activeId);
      const overIndex = overItems.findIndex((i) => i.id === overId);
      const newIndex = () => {
        const putOnBelowLastItem =
          overIndex === overItems.length - 1 && delta.y > 0;
        const modifier = putOnBelowLastItem ? 1 : 0;
        return overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
      };
      return prevState.map((c) => {
        if (c.id === activeColumn.id) {
          c.cards = activeItems.filter((i) => i.id !== activeId);
          return c;
        } else if (c.id === overColumn.id) {
          c.cards = [
            ...overItems.slice(0, newIndex()),
            activeItems[activeIndex],
            ...overItems.slice(newIndex(), overItems.length),
          ];
          return c;
        } else {
          return c;
        }
      });
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const activeId = String(active.id);
    const overId = over ? String(over.id) : null;
    const activeColumn = findColumn(activeId);
    const overColumn = findColumn(overId);
    if (!activeColumn || !overColumn || activeColumn !== overColumn) {
      return null;
    }
    const activeIndex = activeColumn.cards.findIndex((i) => i.id === activeId);
    const overIndex = overColumn.cards.findIndex((i) => i.id === overId);
    if (activeIndex !== overIndex) {
      setColumns((prevState) => {
        return prevState.map((column) => {
          if (column.id === activeColumn.id) {
            column.cards = arrayMove(overColumn.cards, activeIndex, overIndex);
            return column;
          } else {
            return column;
          }
        });
      });
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  return (
    // 今回は長くなってしまうためsensors、collisionDetectionなどに関しての説明は省きます。
    // ひとまずは一番使われていそうなものを置いています。
    <>
      <div>
        <h2>自分の強みを見つける方法</h2>
        <span>入力</span>
        <div  >
        <input className="border-2" type="text" />
        </div>
      </div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
      >
        <div
          className="App m-2 grid grid-cols-2 text-center"
          // style={{ display: "flex", flexDirection: "row", padding: "20px" }}
        >
          {columns.map((column) => (
            <DndColumn
              key={column.id}
              id={column.id}
              title={column.title}
              cards={column.cards}
            ></DndColumn>
          ))}
        </div>
      </DndContext>
    </>
  );
}

export default FindOutStrongPointPage;
