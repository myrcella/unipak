import Moment from 'moment';

/* eslint-disable import/prefer-default-export */ // Needed until we export more than one variable
export const deliveries = [
  {
    id: '1',
    name: 'The Tome of Knowledge',
    description: 'Textbook',
    sizeClass: 2,
    location: { lat: 60.184, lng: 24.8307 },
    locationAddress: 'Otakaari 15',
    destination: { lat: 60.1878, lng: 24.835 },
    destinationAddress: 'Jämeräntaival 2',
    destinationName: 'Teekkarikylä',
    deliverEarliest: Moment().startOf('day').add({ hours: 18 }),
    availableUntil: Moment().startOf('day').add({ days: 3, hours: 21 }),
    reward: 1.7,
  },
  {
    id: '2',
    name: 'A Forgotten Gadget',
    description: 'Phone charger',
    sizeClass: 1,
    location: { lat: 60.186, lng: 24.827 },
    locationAddress: 'Otakaari 1',
    destination: { lat: 60.216, lng: 24.812 },
    destinationAddress: 'Alberganesplanadi 4',
    destinationName: 'Leppävaara',
    deliverEarliest: Moment().startOf('day').add({ hours: 8 }),
    availableUntil: Moment().startOf('day').add({ days: 1, hours: 16 }),
    reward: 2.5,
  },
  {
    id: '3',
    name: 'The Infamous Lamp',
    description: 'Desk lamp',
    sizeClass: 3,
    location: { lat: 60.1867, lng: 24.8223 },
    locationAddress: 'Konemiehentie 2',
    destination: { lat: 60.1607, lng: 24.9165 },
    destinationAddress: 'Selkämerenkatu 14',
    destinationName: 'Jätkäsaari',
    deliverEarliest: Moment().startOf('day').add({ days: 1, hours: 12 }),
    availableUntil: Moment().startOf('day').add({ days: 5, hours: 12 }),
    reward: 4.25,
  },
];
