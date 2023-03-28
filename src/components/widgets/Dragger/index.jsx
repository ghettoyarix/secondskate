import React, { memo, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Image from 'next/image';

function Dragger({ providedArray, updateArray, removeItem }) {
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(providedArray);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateArray(items);
  }
  return (
    <div>
      <header>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters " direction="horizontal">
            {(provided) => (
              <div
                className="grid grid-cols-4"
                {...provided.droppableProps}
                ref={provided.innerRef}>
                {providedArray.map((file, index) => {
                  return (
                    <Draggable key={file.path} draggableId={file.path} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="relative ">
                          <div className=" h-[156px] 	    mb-3 relative  w-[156px]">
                            <Image
                              alt="preview"
                              className="object-cover rounded-md"
                              fill
                              src={URL.createObjectURL(file)}></Image>
                          </div>

                          <Image
                            alt="remove"
                            onClick={() => removeItem(file)}
                            className="absolute bg-white rounded-full cursor-pointer top-2 left-[126px]"
                            height={24}
                            id={index}
                            width={24}
                            src={'/svg/remove.svg'}></Image>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}
const memoDragger = memo(Dragger);
export default memoDragger;
