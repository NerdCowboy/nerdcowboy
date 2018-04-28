// JS
import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Header from './Header'

import u from '../global-styles/utilities.module.scss'
import layout from './layout.module.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      {/* Need to add language to html tag for better accessibility */}
      <html lang="en" />
      <title>Nerd Cowboy - UI/UX Designer & Frontend Developer</title>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Home of UI/UX Designer & Frontend Developer Brent Larson"
      />
      <meta keywords="UI Designer, UX Designer, Frontend Developer, Brent Larson, Web Design" />

      {/* Make Mobile Friendly */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />

      {/* Turn on compatibility mode for IE 8-10 */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Patua+One"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Libre+Franklin:400,400i,700"
        rel="stylesheet"
      />

      {/* Favicons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="./favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="./favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="./favicons/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="./favicons/safari-pinned-tab.svg"
        color="#ed5e27"
      />
      <meta name="apple-mobile-web-app-title" content="Nerd Cowboy" />
      <meta name="application-name" content="Nerd Cowboy" />
      <meta name="theme-color" content="#fafafa" />

      <script>
        window['_fs_debug'] = false;
        window['_fs_host'] = 'fullstory.com';
        window['_fs_org'] = 'BVPNF';
        window['_fs_namespace'] = 'FS';
        (function(m,n,e,t,l,o,g,y){
            if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
            g=m[e]=function(a,b){g.q?g.q.push([a,b]):g._api(a,b);};g.q=[];
            o=n.createElement(t);o.async=1;o.src='https://'+_fs_host+'/s/fs.js';
            y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
            g.identify=function(i,v){g(l,{uid:i});if(v)g(l,v)};g.setUserVars=function(v){g(l,v)};
            y="rec";g.shutdown=function(i,v){g(y,!1)};g.restart=function(i,v){g(y,!0)};
            y="consent";g[y]=function(a){g(y,!arguments.length||a)};
            g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
            g.clearUserCookie=function(){};
        })(window,document,window['_fs_namespace'],'script','user');
      </script>
    </Helmet>
    <Header />
    <div>
      {children()}
      <div styleName="layout.footer">
        <span styleName="u.mrs">
          {new Date().getFullYear()} © Nerd Cowboy, LLC
        </span>
        •
        <a styleName="u.mls" href="https://github.com/NerdCowboy/nerdcowboy">
          View Source
        </a>
      </div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
