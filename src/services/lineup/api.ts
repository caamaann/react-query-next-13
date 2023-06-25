import {APIBaseResponse} from '@/interfaces/api'
import {API_URL} from '@/utils/constant'
import httpRequest from '@/utils/httpRequest'

const api = httpRequest(API_URL)

const Q_LINEUP_LIST = `
  query QueryLineUp {
    lineups(
      where: {orderby: {field: MENU_ORDER, order: ASC}, offsetPagination: {offset: 0, size: 999999}}
    ) {
      nodes {
        title
        lineup {
          facebookUrl
          instagramUrl
          soundCloudUrl
          youtubeUrl
          twitterUrl
          spotifyUrl
          image {
            mediaItemUrl
          }
        }
        content
      }
    }
  }
`

export function apiGetListLineup() {
  return api.get<any, APIBaseResponse<any>>(`/`, {params: {query: Q_LINEUP_LIST}})
}
