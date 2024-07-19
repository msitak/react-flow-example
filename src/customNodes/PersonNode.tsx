import React from 'react';
import { Handle, Position } from '@xyflow/react';

function PersonNode({ data }) {
	return (
		<div>
			<div className="rounded-full bg-blue-950 h-32 w-32 absolute -top-24 left-16 mt-24"></div>
			<div className="h-48 w-64 bg-blue-950 rounded-lg p-1 text-center text-white mt-24">
				<h2 className="mt-8 font-bold">{data.title}</h2>
					<p>{data.subtitle}</p>
					<p className="mt-4">{data.description}</p>
			</div>
				<Handle
					type="source"
					position={Position.Bottom}
					id="a"
				/>
				<Handle
					type="target"
					position={Position.Right}
					id="b"
				/>
		</div>
	);
}

export default PersonNode;

