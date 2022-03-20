{class TimeOutError extends Error {}
class OfflineError extends Error {}

class NetworkClient {
    tryConnect(): void {
        throw new Error('no network!')
    }
}

class UserService {
    constructor(private client: NetworkClient) { }
    
    login() {
        this.client.tryConnect()
    }

}
const client = new NetworkClient()
const service = new UserService(client)
// service.login()

class App {
    constructor(private userService: UserService) { }
    run() {
        try {
            this.userService.login()
        } catch (error) {
            // show dialog to user
            // console.log('Network is not connected!'); 
        }
    }
}

const app = new App(service)
app.run()}