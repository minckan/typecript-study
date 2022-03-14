import { resolve } from 'path';

{
    /* 
        Union Types : OR
        발생할 수 있는 케이스 중에 하나만 할당 할 수 있을 때 사용
    */
    
    type Direction = 'left' | 'right' | 'up' | 'down'

    function move(direction: Direction) {
        console.log(direction);
        
    }

    move('right')

    type TileSize = 8 | 16 | 32
    const title: TileSize = 16
    
    // function : login -> success, fail
    type SuccessState = {
        response: {
            body: string
        }
    }

    type FailState = {
        response : string
    }

    type LoginState = SuccessState | FailState
    function login() : LoginState {
        return {
            response: {
                body: 'logged in !'
            }
        }
    }

    const success: SuccessState = {
        response: {
            body: 'success!!!!'
        }
    }

    const failed: FailState = {
        response: 'it is failed'
    }

    // function printLoginState(id: string, pwd: string): Promise<LoginState>{
    //     return new Promise((resolve, reject) => {
    //         if (id && pwd) {
    //             return resolve(success)
    //         }
    //         return reject(failed)
    //     })
    // }

    // printLoginState('mymy317', '').then(res => {
    //     console.log(res);
    // }).catch(err => {
    //     console.log(err);
        
    // })

    // 
    function printLoginState(state: LoginState) {
        if ('response' in state) {
            console.log(`congrate! ${state.response.body}`);
        } else {
            console.log(`uu! ${state.response}`);
            
        }
    } 
}