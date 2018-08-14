import ListSlider from './View/ListSlider/ListSlider.js';
import AjaxHelper from './helper/AjaxHelper.js';
import { qs, $on } from './helper/domHelper.js';


class LogginButton {
  constructor(selector, datahelper, url){
    this.buttonEl = qs(selector)
    this.datahelper = datahelper;
    this.url = url;
    this.bindEvents()
  }
  bindEvents(){
    $on(this.buttonEl, 'click', e=>this.handleGithubLoggin(e))
  }
  handleGithubLoggin(e){
    e.preventDefault()
    debugger;
    this.datahelper.sendReq({
      "method": 'GET',
       "url" : this.url, 
       "successCallback" : this.handleSigninCallback.bind(this)
    });
  }
  handleSigninCallback(data){
    console.dir(data);
    this.datahelper.sendReq({
      "method": 'GET',
      "url" : '/user/signin/callback',
      "successCallback" : this.handleQuery.bind(this)
    })
  }
  handleQuery(data){
    console.dir(data);
  }
}

const ajaxButtonHelper = new AjaxHelper();

const githubId = `7a2f4b5d9a1001a6cf7c`
const githubUrl = `https://github.com/login/oauth/authorize?client_id=${githubId}`
// const redirectURI = `?redirect_uri=http://localhost:3000/oauth/redirect`
const githubLoginBtn = new LogginButton('.github-login', ajaxButtonHelper, githubUrl)

// const listSlider = new ListSlider('feature-list-slider', ajaxListSliderHelper)