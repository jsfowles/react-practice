import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component{
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  goToStore(event) {
    event.preventDefault();
    console.log('YouChanged the URL');
  //first grab text
    const storeId = this.storeInput.value;
    console.log('goin to ${storeID}');
  //second go to url
    this.context.router.transitionTo('/store/${storeID}')
  }

  render() {
    return (
      <form className='store-selector' onSubmit={this.goToStore.bind(this)}>
        <h2>Please Enter A Store</h2>
        <input type='test' required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}}/>
        <button type='submit'>Visit Store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}
export default StorePicker;
