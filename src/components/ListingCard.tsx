import { Listing } from '../types';
import Link from 'next/link';
import React from 'react';

type ListingCardProps = {
  listing: Listing;
};

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={listing.imageUrl} alt={listing.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{listing.title}</h3>
        <p className="text-gray-700 mb-4">{listing.description}</p>
        <p className="text-lg font-bold mb-4">{listing.price} € / nuit</p>
        <Link href={`/listings/${listing.id}`} className="bg-blue-500 text-white px-4 py-2 rounded">
          Voir plus
        </Link>
      </div>
    </div>
  );
};

export default ListingCard;

