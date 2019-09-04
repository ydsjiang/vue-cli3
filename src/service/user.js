import service from '@/utils/service'
import G from '@/constant/index'
export default {
    getUser() {
        return service.post(G.API.USER)
    },
}
