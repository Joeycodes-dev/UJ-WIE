import Humanities from './screens/humanities/prBlog';
import Law from './screens/law/Law';
import Signin from './screens/login/SignInSide';
import Signup from './screens/login/SignUp';
import Post from './screens/post/SinglePost';
import Social from './screens/socialWork/social';
import Upload from './screens/post/upload';
import Video from './screens/videopost/video';
import Landing from './screens/landing/landing';
import MainLanding from './screens/landingContent/landingContent';
import { Route, Switch } from 'react-router-dom';




function App() {
  return (
    <Switch>
          <Route path="/" component={MainLanding} exact />
          <Route path="/prLanding" component={Landing}/>
          <Route path="/prBlog" component={Humanities} />
          <Route path="/lawBlog" component={Law} />
          <Route path="/social" component={Social} />
          <Route path="/login" component={Signin}/>
          <Route path="/signin" component={Signup}/>
          <Route path="/post" component={Post}/>
          <Route path="/video" component={Video}/>
          <Route path="/upload" component={Upload}/>
          <Route component={Error} />
    </Switch>
  );
}

export default App;
