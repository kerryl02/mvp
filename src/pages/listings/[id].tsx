import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import ListingDetail from '../../components/ListingDetail';
import { Listing } from '../../types';

type ListingPageProps = {
  listing: Listing;
};

export const getServerSideProps: GetServerSideProps<ListingPageProps> = async (context: GetServerSidePropsContext) => {
  const { id } = context.params!;
  const res = await fetch(`http://localhost:5000/api/listings/${id}`);
  const listing: Listing = await res.json();

  return {
    props: {
      listing,
    },
  };
};

const ListingPage: React.FC<ListingPageProps> = ({ listing }) => {
  return (
    <div className="container mx-auto py-8">
      <ListingDetail listing={listing} />
    </div>
  );
};

export default ListingPage;

