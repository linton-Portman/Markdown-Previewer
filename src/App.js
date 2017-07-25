import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      markdown : ''
      //markdown : ""
    }
    this.changeHandler = this.changeHandler.bind(this);
    
  }

changeHandler(event){

  this.setState({
    markdown: event.target.value
  });
}



  render() {

    
    return (

      <div>
          <p className="title">MarkDown Previewer</p>
                <div className="app">
                  
                  <div className= "markdown">
                    <p className="text">MarkDown</p>
                      <textarea onChange={this.changeHandler} placeholder="Enter Markdown here !"></textarea>
                  </div>
                  <div className= "preview">
                    <p className="previewText">Preview</p>
                    <div  dangerouslySetInnerHTML= {{ __html: marked(this.state.markdown)}} ></div>
                  </div>
                </div>
      </div>
     
    );
  }
}

export default App;
