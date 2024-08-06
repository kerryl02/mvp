import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Listing } from '../types';

const Listings: FC = () => {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    axios.get('/api/listings').then(response => {
      setListings(response.data);
    });
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold mb-6">Annonces</h1>
      <ul className="space-y-4">
        {listings.map(listing => (
          <li key={listing.id} className="border-b pb-4">
            <Link href={`/listings/${listing.id}`}>
              <a className="text-blue-600 hover:underline text-lg">{listing.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
