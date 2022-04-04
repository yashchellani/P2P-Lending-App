import { v4 as uuid } from 'uuid';

export const customers = [ //This is the lenders page - Only the borrowers will be able to see this 
  {
    id: uuid(),
    MaxLoanAmount: 20000,
    MaxLoanPeriod: "2 years",
    email: 'ekaterina.tankova@devias.io',
    name: 'Ekaterina Tankova',
    Interest_rate: "2%"
  },
  {
    id: uuid(),
    MaxLoanAmount: 2100,
    MaxLoanPeriod: "2 months",
    email: 'cao.yu@devias.io',
    name: 'Cao Yu',
    Interest_rate: '2.5%'
  },
  {
    id: uuid(),
    MaxLoanAmount: 21231,
    MaxLoanPeriod: "3 years",
    email: 'alexa.richardson@devias.io',
    name: 'Alexa Richardson',
    Interest_rate: '1%'
  },
  {
    id: uuid(),
    MaxLoanAmount: 30000,
    MaxLoanPeriod: "1.5 years",
    email: 'anje.keizer@devias.io',
    name: 'Anje Keizer',
    Interest_rate: '3%'
  },
  {
    id: uuid(),
    MaxLoanAmount: 10000,
    MaxLoanPeriod: "5 months",
    email: 'clarke.gillebert@devias.io',
    name: 'Clarke Gillebert',
    Interest_rate: '2.5%'
  },
  {
    id: uuid(),
    MaxLoanAmount: 25000,
    MaxLoanPeriod: "9 months",
    email: 'adam.denisov@devias.io',
    name: 'Adam Denisov',
    Interest_rate: '1.5%'
  },
  {
    id: uuid(),
    MaxLoanAmount: 24500,
    MaxLoanPeriod: "5 years",
    email: 'ava.gregoraci@devias.io',
    name: 'Ava Gregoraci',
    Interest_rate: '0.5%'
  },
  {
    id: uuid(),
    MaxLoanAmount: 40000,
    MaxLoanPeriod: "2 years",
    email: 'emilee.simchenko@devias.io',
    name: 'Emilee Simchenko',
    Interest_rate: '4.5%'
  },
  {
    id: uuid(),
    MaxLoanAmount: 20000,
    MaxLoanPeriod: "1 year",
    email: 'kwak.seong.min@devias.io',
    name: 'Kwak Seong-Min',
    Interest_rate: '2%'
  },
  {
    id: uuid(),
    MaxLoanAmount: 20000,
    MaxLoanPeriod: "7 months",
    email: 'merrile.burgett@devias.io',
    name: 'Merrile Burgett',
    Interest_rate: '1.3%'
  }
];
