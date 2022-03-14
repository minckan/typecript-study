{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  printLoginState2({ state: 'loading' }); // 👀 loading...
  printLoginState2({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState2({ state: 'fail', reason: 'no network' }); // 😱 no network

  function printLoginState2(status : ResourceLoadState) :void {
    if (status.state === 'loading') {
      console.log('👀 loading...');
    } else if (status.state === 'success') {
        console.log(`😃 ${status.response.body}`);
    } else {
      console.log(`${status.reason}`);
      
    }
  }
}
