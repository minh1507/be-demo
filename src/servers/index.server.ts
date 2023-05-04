import main from "./main.server.ts"

export default class microService{
    private main = new main()

    run(){
        this.main.run()
    }
}