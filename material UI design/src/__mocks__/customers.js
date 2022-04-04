import { v4 as uuid } from 'uuid';

//this is for borrowers
export const customers = [
  {
    id: uuid(),
    name: 'Tommy',
    amount: 5000,
    ir: 5.0,
    period: 18,
    purpose: 'Startup'
  },
  {
    id: uuid(),
    name: 'Andrew',
    amount: 10000,
    ir: 12,
    period: 12,
    purpose: 'Tuition Fees'
  },
  {
    id: uuid(),
    name: 'Mark',
    amount: 100,
    ir: 20,
    period: 3,
    purpose: 'Personal Expenses'
  },
  {
    id: uuid(),
    name: 'Max',
    amount: 2500,
    ir: 13,
    period: 6,
    purpose: '3309704-428-'
  },
  {
    id: uuid(),
    address: {
      country: 'USA',
      state: 'Texas',
      city: 'Dallas',
      street: '75247'
    },
    avatarUrl: '/static/images/avatars/avatar_6.png',
    createdAt: 1554757200000,
    email: 'clarke.gillebert@devias.io',
    name: 'Clarke Gillebert',
    phone: '972-333-4106'
  },
  {
    id: uuid(),
    name: '',
    amount: 1555016400000,
    ir: 'ekaterina.tankova@devias.io',
    period: 'Ekaterina Tankova',
    purpose: '304-428-3097'
  },
  {
    id: uuid(),
    name: '',
    amount: 1555016400000,
    ir: 'ekaterina.tankova@devias.io',
    period: 'Ekaterina Tankova',
    purpose: '304-428-3097'
  },
  {
    id: uuid(),
    name: '',
    amount: 1555016400000,
    ir: 'ekaterina.tankova@devias.io',
    period: 'Ekaterina Tankova',
    purpose: '304-428-3097'
  },
  {
    id: uuid(),
    name: '',
    amount: 1555016400000,
    ir: 'ekaterina.tankova@devias.io',
    period: 'Ekaterina Tankova',
    purpose: '304-428-3097'
  },
  {
    id: uuid(),
    name: '',
    amount: 1555016400000,
    ir: 'ekaterina.tankova@devias.io',
    period: 'Ekaterina Tankova',
    purpose: '304-428-3097'
  },
];
