import { useQuery } from '@tanstack/react-query';
import { fetchMatch } from '@/api/queries/FetchMatch';
import { useParams } from 'react-router-dom';

export const MatchPage = () => {
  const { id } = useParams();

  const { data, isFetching } = useQuery({
    queryKey: ['match'],
    queryFn: () => {
      return fetchMatch(id);
    },
    retry: 3
  });
  return (
    <>
      {isFetching && 'Loading...'}
      {data?.$id}
    </>
  );
};
