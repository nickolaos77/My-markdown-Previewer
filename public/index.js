
const InitialState = 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'

class App extends React.Component{
  constructor(props) {
   super(props);
   this.state = {
   text: InitialState
 };
 this.handleChange = this.handleChange.bind(this);
 this.rawMarkUp = this.rawMarkUp.bind(this);
 }
handleChange (event) {
       this.setState({text:event.target.value})
      console.log(event.target.value)}

      rawMarkUp(value){
      var rawMarkup = marked(value, {sanitize: true});
      return { __html: rawMarkup };

      }

 render() {
   return (
     <div className = 'row'>

        <div className = 'col-xs-12 col-sm-6' style={{marginTop: 60}}>
            <textarea onChange={ this.handleChange } rows="24" cols="50" >{this.state.text}
            </textarea>
        </div>
        <div className = 'col-xs-12 col-sm-6'>
            <span dangerouslySetInnerHTML={this.rawMarkUp(this.state.text)}></span>
        </div>

    </div>
   );
 }
};


ReactDOM.render(<App/>, document.getElementById('app'));
