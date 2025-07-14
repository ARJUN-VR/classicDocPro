import React, { useState, useEffect, useRef } from 'react';

export const EditableNode = ({ id, data, selected, setNodes }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [label, setLabel] = useState(data.label);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleDoubleClick = () => {
    console.log("double click worked...");
    setIsEditing(true);
  };

const handleChange = (e) => {
  setLabel(e.target.value);
  setNodes((nds) =>
    nds.map((node) =>
      node.id === id ? { ...node, data: { ...node.data, label: e.target.value } } : node
    )
  );
};

  const handleBlur = () => {
    setIsEditing(false);
    setNodes((nds) =>
      nds.map((node) =>
        node.id === id ? { ...node, data: { ...node.data, label: label } } : node
      )
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') inputRef.current.blur();
  };

  return (
    <div
      onDoubleClick={handleDoubleClick}
      style={{
        padding: 10,
        border: '10px solid #222',
        borderRadius: 5,
        background: selected ? 'blue' : 'green',
        minWidth: 100,
        textAlign: 'center',
      }}
    >
      {isEditing ? (
        <input
          ref={inputRef}
          value={label}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <div>{label}</div>
      )}
    </div>
  );
};