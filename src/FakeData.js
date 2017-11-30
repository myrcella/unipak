import Moment from 'moment';

/* eslint-disable import/prefer-default-export */ // Needed until we export more than one variable
export const deliveries = [
  {
    id: '1',
    name: 'Delivery 1',
    description: 'D1 description',
    sizeClass: 1,
    location: { lat: 60.186, lng: 24.832 },
    destination: { lat: 60.186, lng: 24.842 },
    pickupEarliest: Moment().startOf('day').subtract({ hours: 8 }),
    deliverLatest: Moment().startOf('day').add({ days: 3, hours: 21 }),
  },
  {
    id: '2',
    name: 'Delivery 2',
    description: 'D2 description',
    sizeClass: 2,
    location: { lat: 60.187, lng: 24.831 },
    destination: { lat: 60.197, lng: 24.831 },
    pickupEarliest: Moment().startOf('day').add({ hours: 8 }),
    deliverLatest: Moment().startOf('day').add({ days: 1, hours: 16 }),
  },
  {
    id: '3',
    name: 'Delivery 3',
    description: 'D3 description',
    sizeClass: 3,
    location: { lat: 60.187, lng: 24.832 },
    destination: { lat: 60.197, lng: 24.842 },
    pickupEarliest: Moment().startOf('day').add({ days: 1, hours: 12 }),
    deliverLatest: Moment().startOf('day').add({ days: 5, hours: 12 }),
  },
];
