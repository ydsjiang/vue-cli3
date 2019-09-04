import service from '@/utils/service'
import G from '@/constant/index'
export default {
    getTodoProcess(config) {
        return service.post(G.API.HOME.GET_TODO_PROCESS,config)
    },
    getAlreadyProcess(config){
        return service.post(G.API.HOME.GET_ALREADY_PROCESS,config)
    }
}
