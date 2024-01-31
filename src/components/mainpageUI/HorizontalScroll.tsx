import React, { useState, useContext } from "react";
import styled from "styled-components";
import {
  ScrollMenu,
  VisibilityContext,
  
} from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

// ... (imports)

interface Item {
  id: string;
}

const getItems = (): Item[] =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

interface CardProps {
  onClick: (id: string) => void;
  selected: boolean;
  title: string;
  itemId: string;
}

function Card({ onClick, selected, title, itemId }: CardProps) {
  const visibility = useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(itemId)}
      style={{
        width: "160px",
      }}
      tabIndex={0}
    >
      <div className="card">
        <div>{title}</div>
        <div>
          visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}
        </div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          height: "200px",
        }}
      />
    </div>
  );
}

function HorizontalScroll() {
  const [items, setItems] = useState<Item[]>(getItems);
  const [selected, setSelected] = useState<string[]>([]);

  const isItemSelected = (id: string): boolean => selected.includes(id);

  const handleClick = (id: string) => () => {
    setSelected((currentSelected) =>
      isItemSelected(id)
        ? currentSelected.filter((el) => el !== id)
        : [...currentSelected, id]
    );
  };

  return (
    <ScrollMenu
      
    >
      {items.map(({ id }) => (
        <Card
          itemId={id}
          title={id}
          key={id}
          onClick={handleClick(id)}
          selected={isItemSelected(id)}
        />
      ))}
    </ScrollMenu>
  );
}

export default HorizontalScroll;
