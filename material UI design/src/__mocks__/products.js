import { v4 as uuid } from 'uuid';

//this is for lenders
//first item is a template that can be used for the other items in the products list. 
export const products = [
  {
    id: uuid(),
    name: 'Tommy',
    maxAmount: 5000,
    ir: 5.0,
    maxPeriod: 18,
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: 'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
    media: '/static/images/products/product_2.png',
    title: 'Medium Corporation',
    totalDownloads: '625'
    
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: 'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
    media: '/static/images/products/product_3.png',
    title: 'Slack',
    totalDownloads: '857'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Lyft is an on-demand transportation company based in San Francisco, California.',
    media: '/static/images/products/product_4.png',
    title: 'Lyft',
    totalDownloads: '406'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'GitHub is a web-based hosting service for version control of code using Git.',
    media: '/static/images/products/product_5.png',
    title: 'GitHub',
    totalDownloads: '835'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
    media: '/static/images/products/product_6.png',
    title: 'Squarespace',
    totalDownloads: '835'
  }
];
