import { Listing } from '@/types';
import React from 'react';

type ListingDetailProps = {
  listing: Listing;
};

const ListingDetail: React.FC<ListingDetailProps> = ({ listing }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={listing.imageUrl}
        alt={listing.title}
        className="w-full h-64 object-cover"
        />
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">{listing.title}</h2>
        <p className="text-gray-700 mb-4">{listing.description}</p>
        <p className="text-xl font-bold mb-4">{listing.price} € / nuit</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded mt-4">
          Réserver
        </button>
      </div>
    </div>
  );
};

export default ListingDetail;

