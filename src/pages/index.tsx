import { GetServerSideProps } from 'next';
import ListingCard from '../components/ListingCard';
import { Listing } from '../types';

type HomeProps = {
  listings: Listing[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:5000/api/listings');
  const listings: Listing[] = await res.json();

  return {
    props: {
      listings,
    },
  };
};

const Home: React.FC<HomeProps> = ({ listings }) => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Annonces</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {listings.map(listing => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
};

export default Home;

