export default class requestValidator{
    static param = (id:string) => {
        if(id){
            return true
        }
        return false
    }
}