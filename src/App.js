import React, { useState, useEffect } from "react";
import { isEmpty } from 'lodash';

import Header from './components/Header/Header.jsx';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/PostList/PostList.jsx';
import PostPage from './components/PostPage/PostPage.jsx';
import Categories from './components/Categories/Categories.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import HowItWorks from './components/HowItWorks/HowItWorks.jsx';
import Footer from './components/Footer/Footer.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import FollowUs from './components/FollowUs/FollowUs.jsx';
import Privacy from './components/Privacy/Privacy.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import YouTuBe from './components/YouTuBe/YouTuBe.jsx';
import './App.css';

const options = ['Breakfast', 'Lunch', 'Dinner', 'Burger', 'Chinese Food', 'Sea Food', 'Taco'];

const videos = ["https://www.youtube.com/embed/2AuPF74q-fY", "https://www.youtube.com/embed/0qBKUiuWzO8", 
"https://www.youtube.com/embed/gHLAcbP5Y9E", "https://www.youtube.com/embed/uH7M-86gocQ", 
"https://www.youtube.com/embed/1gR9Bkio6cA","https://www.youtube.com/embed/ReaKN005KX4"];

const socialMedias = ["https://www.flaticon.com/svg/static/icons/svg/1051/1051258.svg", "https://www.flaticon.com/svg/static/icons/svg/1409/1409937.svg",
"https://www.flaticon.com/svg/static/icons/svg/3799/3799971.svg", "https://www.flaticon.com/svg/static/icons/svg/733/733590.svg", 
"https://www.flaticon.com/svg/static/icons/svg/124/124039.svg"];

const contentful = require('contentful');

function App() {
  
  const [posts, setPosts] = useState([]);

  const fetchData = () => {
    const params = {
      accessToken: "kiQe5yJzTdHBV7Y0ONDJzYnP-7G6y5NOMiNeYuN2Unw",
      space: "x6vxl6kc6qrm"
    };
    
    const client = contentful.createClient(params);
    client.getEntries()
        .then((response) => {
            return response.items.map((elem) =>  {
                return {data: elem.fields, id: elem.sys.id};
            });
        })
        .then(function(data) {
          setPosts(data);
      });
  }
  
  useEffect(() => {
    if (isEmpty(posts)) {
      fetchData();
    }
  },[posts])
  
  const fetchPost = (id) => {
    if (posts) {
      const post = posts.find((post) => post.id === id);
      return post;
    }
  }
  
  return (
    <Router>
        <div>
            <Header options={options}/>
            <Switch>
                <Route path="/" exact render={() => <Home posts={posts}/>} />
                <Route path="/categories/:category" render={({ match }) => <Categories posts={posts} category={match.params.category}/>} />
                <Route path="/post/:postId" render={({ match }) => <PostPage post={fetchPost(match.params.postId)} />} />
                <Route path="/HowItWorks" component={HowItWorks} />
                <Route path="/AboutUs" component={AboutUs} />
                <Route path="/FollowUs" render={() => <FollowUs socialMedias={socialMedias} />} />
                <Route path="/Privacy" component={Privacy} />
                <Route path="/ContactUs" component={ContactUs} />
                <Route path="/YouTuBe" render={() => <YouTuBe videos={videos} />} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </div>
    </Router>
  );
}

export default App;
