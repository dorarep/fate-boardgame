import {signInWithGoogle, useUser} from "~/hooks/usecases/authentication";

const Home = () => {
  const user = useUser();

  console.log(user);

  return (<button onClick={signInWithGoogle}>Sign In</button>);
};

export default Home;
