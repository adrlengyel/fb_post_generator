import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function convertToUrlParameter(str) {
  return encodeURIComponent(str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
}

class TextProcessor extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: undefined,
        menuType: 'b8f77b2388dec790@tnj2tdHT'
      };
    }
  
    handleClick(){
      //console.log(this.state.value);

      let splitMenu = this.state.value.split('\n')
      
      splitMenu = splitMenu.map(s => s.trim())

      let menu = splitMenu.join('\n')

      console.log(menu);

      let menuType = this.state.menuType

      let path = 'https://api.apitemplate.io/' + menuType + '/image.png?menu.text='      
      menu = convertToUrlParameter(menu)

      path = path + menu

      console.log(path)

      window.open(path) 
    }

    handleTextAreaChange(event) {
      this.setState({value: event.target.value})
    } 

    handleTextAreaPaste(event) {
      this.setState({value: event.target.value})
    } 

    handleSelectChange(event){
      this.setState({menuType: event.target.value})
    }
  
    render() {
      return (
        <form>
          <label className='enterText'>
            Zadajte text:
          </label>
          <select name="menuType" id="menuType" onChange={this.handleSelectChange.bind(this)}>
            <option value="b8f77b2388dec790@tnj2tdHT">Menu1</option>
            <option value="8d177b2388d53556@nndIKhlU">Menu2</option>
            <option value="2ee77b2388dcefd6@1bIPE2RN">Menu3</option>
          </select>
          <textarea className='enteredText' rows="20" cols="80" 
          onChange={this.handleTextAreaChange.bind(this)} value={this.state.value}
          onPaste={this.handleTextAreaPaste.bind(this)}>
          </textarea>
          <br/>
          <label className='button' onClick={() => this.handleClick()}>
            Generovať obrázok
          </label>
        </form>
      );
    }
  }

class Main extends React.Component {
  render() {
    return (
    <div className="page">
        <header className="welcome">
            Vitajte!
        </header>
        <br/>
        <TextProcessor />
    </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
