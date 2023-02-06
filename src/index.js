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
        value: undefined
      };
    }
  


    handleClick(){
      //console.log(this.state.value);

      let splitMenu = this.state.value.split('\n')
      
      splitMenu = splitMenu.map(s => s.trim())

      let menu = splitMenu.join('\n')

      console.log(menu);

      let path = 'https://api.apitemplate.io/a3c77b238884cdce@LNAKUANl/image.png?menu.text='      
      menu = convertToUrlParameter(menu)

      path = path + menu

      console.log(path)

      window.open(path) 

      // const splitMenu = this.state.value.split('\n')

      // console.log(splitMenu)

      // let mainMenuItems = splitMenu.map((item) => {
      //   let [day, soup, dishes] = item.split(':').map((val) => val.trim());
      //   if (!day || !soup) return;
      //   return { day, soup, dishes: []};
      // });

      // mainMenuItems = mainMenuItems.filter(function( element ) {
      //   return element !== undefined;
      // });

      // let dishes = splitMenu.filter(function(element) {
      //   return !element.includes(':');
      // })

      // dishes = dishes.map(s => s.trim());
      // dishes = dishes.map(s => s + "€");

      // console.log(dishes);

      // let shouldSkip = false;
      // let firstIteration = true;
      // let j = 0

      // mainMenuItems.forEach(i => {

      //   while (j !== dishes.length) {

      //     if(dishes[j].charAt(0) === '1' && !firstIteration){
      //       shouldSkip = true;
      //     }

      //     if(shouldSkip){
      //       break;
      //     }

      //     i.dishes.push(dishes[j]);
      //     firstIteration = false;
      //     j++;
      //   } 

      //   shouldSkip = false;
      //   firstIteration = true;
      // })
    
      // var menu = JSON.stringify(mainMenuItems);

      // console.log(menu)

    }

    handleChange(event) {
      this.setState({value: event.target.value})
    } 

    handlePaste(event) {
      this.setState({value: event.target.value})
    } 
  
    render() {
      return (
        <form>
          <label className='enterText'>
            Zadajte text:
          </label>
          <br />
          <textarea className='enteredText' rows="20" cols="80" 
          onChange={this.handleChange.bind(this)} value={this.state.value}
          onPaste={this.handlePaste.bind(this)}>
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
        <br/>
        <TextProcessor />
    </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
