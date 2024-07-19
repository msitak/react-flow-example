import { Edge, MarkerType } from "@xyflow/react";

export const initialEdges: Edge[] = [ 
	{ 
		id: '1-2', 
		source: '1', 
		target: '2', 
		label: 'Views account balances, and makes payment using', 
		markerEnd: {
			type: MarkerType.ArrowClosed,
		}, 
	},
	{ 
		id: '2-3', 
		source: '2', 
		target: '3', 
		targetHandle: 'a', 
		sourceHandle: 'c', 
		label: 'Gets account information from, and makes payment using',
		markerEnd: {
			type: MarkerType.ArrowClosed,
		}, 
	},
	{ 
		id: '2-4', 
		source: '2', 
		target: '4', 
		targetHandle: 'd', 
		label: 'Sends e-mail using',
		animated: true,
		markerEnd: {
			type: MarkerType.ArrowClosed,
		}, 
	},
	{ 
		id: '4-1', 
		type: 'straight', 
		source: '4', 
		target: '1', 
		targetHandle: 'b', 
		sourceHandle: 'a', 
		label: 'Sends e-mail to',
		animated: true,
		markerEnd: {
			type: MarkerType.ArrowClosed,
		}, 
	},
  ];