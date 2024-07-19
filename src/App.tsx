import React, { useMemo } from 'react';
import { Background, ReactFlow, Controls, MarkerType } from '@xyflow/react';
import PersonNode from './customNodes/PersonNode';
import BaseNode from './customNodes/BaseNode';
import '@xyflow/react/dist/style.css';
import { initialNodes } from './initialNodes';
import { initialEdges } from './initialEdges';
 
export default function App() {
  const nodeTypes = useMemo(() => ({ person: PersonNode, base: BaseNode }), []);
  
  return (
    <div style={{ width: '100vw', height: '100vh'}}>
      <ReactFlow fitView nodeTypes={nodeTypes} nodes={initialNodes} edges={initialEdges}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}