import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (!e.target.email.value) 
	{ 
	alert("Invalid e-mail."); 
	} 
	else if (!e.target.password.value) 
	{ 
	alert("Invalid password."); 
	}
	else if ( e.target.email.value === "nariesmusngi@gmail.com" && e.target.password.value === "MusngiJunariez121499" ) 
	{ 
	alert("Login Success."); e.target.email.value = ""; e.target.password.value = ""; 
	} 
	else 
	{ 
	alert("Invalid Account, please double check!"); 
	} 
	};

  handleClick = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">E-mail: </label>
             <input type="email" name="email" placeholder="E-mail"/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button className="primary">Login</button>
        </form>
      </div>
    );
  }
}

export default App;