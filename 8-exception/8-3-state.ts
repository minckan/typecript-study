{
    class TimeOutError extends Error {}
    class OfflineError extends Error { }
    
    type SuccessState = {
        result: 'success'
    }
    
    type NetworkErrorState = {
        result: 'fail',
        reason: 'offline' | 'down' | 'timeout'
    }

    type ResultState = SuccessState | NetworkErrorState
    class NetworkClient {
        tryConnect(): ResultState {
            // return {result: 'fail', reason: 'down'}
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
    app.run()
}