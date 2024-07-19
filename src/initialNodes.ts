import { Position, type Node } from '@xyflow/react';

export const initialNodes: Node[] = [
    {
      id: '1',
      type: 'person', 
      position: { x: 100, y: 0 }, 
      data: { title: 'Personal Banking Customer', subtitle: '(Person)', description: 'A customer of a bank, with personal bank accounts.'} 
    },
    {
      id: '2', 
      type: 'base', 
      position: { x: 100, y: 400 }, 
      data: { title: 'Internet system banking', subtitle: '(Software System)', description: 'Allow customers to view information about their bank accounts and make payments.', color: 'bg-blue-600'} 
    },
    {
      id: '3', 
      type: 'base', 
      position: { x: 100, y: 700 }, 
      data: { title: 'Mainframe banking system', subtitle: '(Software System)', description: 'Stores all of the core banking information about customers, accounts, transaction, etc.', color: 'bg-gray-500'} 
    },
    { 
      id: '4', 
      type: 'base', 
      position: { x: 500, y: 400 }, 
      targetPosition: Position.Left,
      data: { title: 'E-mail System', subtitle: '(Software System)', description: 'The internal Microsoft Exchange e-mail system.', color: 'bg-gray-500', isTopHandleSource: true}
     },
  ];