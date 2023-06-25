import {apiGetListLineup} from './api'
import {useQuery} from '@tanstack/react-query'

export function useGetListLineup(enabled?: boolean) {
  //   return useQuery(['LIST LINEUP'], () => apiGetListLineup(), {enabled})
  return useQuery({
    queryKey: ['LIST LINEUP'],
    queryFn: async () => {
      const {
        data: {lineups},
      } = await apiGetListLineup()

      return lineups.nodes
    },
    enabled,
  })
}
