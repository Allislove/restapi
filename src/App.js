import "./App.css";
const { withAuthenticator, AmplifySignOut } = require("@aws-amplify/ui-react");

function App() {
  return (
    <div className="App">
      <header>
        <h1>We now have Auth!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
