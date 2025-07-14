import React from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Background,
  Controls,
  MiniMap,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { EditableNode } from './EditableNode';

export const Draft = () => {
  const initialNodes = [
    {
      id: '1',
      type: 'editable', // 👈 Must match key in nodeTypes below
      data: { label: 'Start' },
      position: { x: 100, y: 100 },
    },
    {
      id: '2',
      type: 'editable',
      data: { label: 'Process' },
      position: { x: 300, y: 100 },
    },
    {
      id: '3',
      type: 'editable',
      data: { label: 'Decision' },
      position: { x: 100, y: 250 },
    },
    {
      id: '4',
      type: 'editable',
      data: { label: 'End' },
      position: { x: 300, y: 250 },
    },
  ];

  const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', type: 'default' },
    { id: 'e2-3', source: '2', target: '3', type: 'default' },
    { id: 'e3-4', source: '3', target: '4', type: 'default' },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // ✅ Pass setNodes down through nodeTypes
  const nodeTypes = {
    editable: (props) => <EditableNode {...props} setNodes={setNodes} />,
  };

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};
