import React from 'react';
import MyFirebase from 'firebase';
import firebaseConfig from './firebaseConfig';

class App extends React.Component {

  constructor(props) {
    super(props);

    if (!MyFirebase.apps.length) {
      MyFirebase.initializeApp(firebaseConfig);
    }

    this.state = {
      mynote: [],
      test:'saifah',
    }
  }

  getData = () => {
    let ref = MyFirebase.database().ref('note/001');
    ref.on('value', snapshot => {
      this.setState({
        mynote: snapshot.val()
      });
    });
    console.log('DATA RETRIEVED');
  }

  componentDidMount() {
    this.getData();
  }



  render() {
    const {mynote} = this.state;
    console.log(mynote);
    return (
      <div>
        {mynote.note_id}
        <br/>
        {mynote.content}
      </div>
    );

  }
}

export default App;
