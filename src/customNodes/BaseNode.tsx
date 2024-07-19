import React from 'react';
import { Handle, Position } from '@xyflow/react';

function BaseNode({ data }) {
	return (
		<div>
			<Handle
				type={data.isTopHandleSource ? "source" : "target"}
				position={Position.Top}
				id="a"
			/>
			<Handle
				type="source"
				position={Position.Right}
				id="b"
			/>
			<Handle
				type="source"
				position={Position.Bottom}
				id="c"
			/>
			<Handle
				type="target"
				position={Position.Left}
				id="d"
			/>
			<div className={`h-48 w-64 rounded-lg p-1 text-center text-white ${data.color}`}>
				<h2 className="mt-8 font-bold">{data.title}</h2>
				<p>{data.subtitle}</p>
				<p className="mt-4">{data.description}</p>
			</div>
		</div>
	);
}

export default BaseNode;

