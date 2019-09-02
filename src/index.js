/*global firebase*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
var firebaseConfig = {
    apiKey: "AIzaSyC8df5mz2u5oKo5pkQTBS9nIdogUFr2Hs8",
    authDomain: "weblights-513e2.firebaseapp.com",
    databaseURL: "https://weblights-513e2.firebaseio.com",
    projectId: "weblights-513e2",
    storageBucket: "",
    messagingSenderId: "611763934422",
    appId: "1:611763934422:web:520fd38969eb7b45"
  };
  // Initialize Firebase
  let fb = firebase.initializeApp(firebaseConfig);
  var database = fb.database();
class Lights extends React.Component {
    constructor(props) {
      super(props);
      this.state = {checked: 0};
    }
  radioChanged = (changeEvent) => {
    this.setState({
        checked: changeEvent.target.value
      });
      database.ref('lights/active').set(parseInt(changeEvent.target.value));
  }
componentWillMount = () => {
    let tthis = this
   database.ref('lights/active').on('value', function(snapshot) {
  tthis.setState({checked: snapshot.val()})
  console.log(snapshot.val())
});
}
    render() {
        let lightlist=[]
        for(let i=1;i<4;i++) {
            lightlist.push(<input checked={this.state.checked===(i)} onChange={this.radioChanged} type="radio" name="traffic-light-color" id={"color"+i} value={i} />)
        }
      return (
<div id="traffic-light">
{lightlist}
</div>
      );
    }
  }

ReactDOM.render(<Lights></Lights>, document.getElementById('root'));
