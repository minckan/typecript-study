{
    type SuccessState = {
        result: 'success',
        response: {
            body: string
        }
    }

    type FailState = {
        result: 'fail',
        response : string
    }

    type LoginState = SuccessState | FailState
    function login() : LoginState {
        return {
            result: 'success',
            response: {
                body: 'logged in !'
            }
        }
    }

    // 
    function printLoginState(state: LoginState) {
        if (state.result === 'success') {
            console.log(`congrate! ${state.response.body}`);
        } else {
            console.log(`uu! ${state.response}`);
            
        }
    } 
}