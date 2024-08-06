export type Listing = {
    id: number;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
  };
  
  export type User = {
    id: number;
    email: string;
    password: string;
  };
  
  export type Reservation = {
    id: number;
    listingId: number;
    userId: number;
    startDate: Date;
    endDate: Date;
  };
  
  