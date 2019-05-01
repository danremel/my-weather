(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(44)},23:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(15),i=a.n(r),l=(a(23),a(2)),o=a(3),u=a(5),c=a(4),m=a(6),h=a(7),d=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={validUser:"Foo",validPass:"Bar",inputUser:"",inputPass:"",loginSuccess:!1,errors:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"showValidationErr",value:function(e,t){this.setState(function(a){return{errors:[].concat(Object(h.a)(a.errors),[{element:e,message:t}])}})}},{key:"clearValidationErr",value:function(e){this.setState(function(t){var a=[],n=!0,s=!1,r=void 0;try{for(var i,l=t.errors[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){var o=i.value;e!==o.element&&a.push(o)}}catch(o){s=!0,r=o}finally{try{n||null==l.return||l.return()}finally{if(s)throw r}}return{errors:a}})}},{key:"onUsernameChange",value:function(e){this.setState({inputUser:e.target.value}),this.clearValidationErr("username")}},{key:"onPasswordChange",value:function(e){this.setState({inputPass:e.target.value}),this.clearValidationErr("password")}},{key:"submitLogin",value:function(e){e.preventDefault(),this.state.inputUser!==this.state.validUser&&this.showValidationErr("username","Incorrect Username"),""===this.state.inputUser&&this.showValidationErr("username","Username cannot be empty"),this.state.inputPass!==this.state.validPass&&this.showValidationErr("password","Incorrect Password"),""===this.state.inputPass&&this.showValidationErr("password","Password cannot be empty"),this.state.inputUser===this.state.validUser&&this.state.inputPass===this.state.validPass&&this.validLogin()}},{key:"validLogin",value:function(){this.setState({loginSuccess:!0}),this.props.validLogin(this.state.loginSuccess)}},{key:"render",value:function(){var e=null,t=null,a=!0,n=!1,r=void 0;try{for(var i,l=this.state.errors[Symbol.iterator]();!(a=(i=l.next()).done);a=!0){var o=i.value;"username"===o.element&&(e=o.message),"password"===o.element&&(t=o.message)}}catch(o){n=!0,r=o}finally{try{a||null==l.return||l.return()}finally{if(n)throw r}}return s.a.createElement("div",null,s.a.createElement("div",{className:"hint"},s.a.createElement("p",null,s.a.createElement("strong",null,"Hint:")),s.a.createElement("p",null,"Username: Foo"),s.a.createElement("p",null,"Password: Bar")),s.a.createElement("div",{className:"inner-container"},s.a.createElement("form",{onSubmit:this.submitLogin.bind(this)},s.a.createElement("div",{className:"input-group"},s.a.createElement("label",{htmlFor:"username"},"Username"),s.a.createElement("input",{type:"text",className:"form-input "+(e?"invalid":""),onChange:this.onUsernameChange.bind(this)}),s.a.createElement("small",null,e||"")),s.a.createElement("div",{className:"input-group"},s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement("input",{type:"password",className:"form-input "+(t?"invalid":""),onChange:this.onPasswordChange.bind(this)}),s.a.createElement("small",null,t||"")),s.a.createElement("button",{type:"submit",className:"submit-button"},"Submit"))))}}]),t}(s.a.Component),v=a(16),p=a.n(v),g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={latitude:"",longitude:"",city:"",state:"",success:null,errorMsg:null,errors:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"showValidationErr",value:function(e,t){this.setState(function(a){return{errors:[].concat(Object(h.a)(a.errors),[{element:e,message:t}])}})}},{key:"clearValidationErr",value:function(e){this.setState(function(t){var a=[],n=!0,s=!1,r=void 0;try{for(var i,l=t.errors[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){var o=i.value;e!==o.element&&a.push(o)}}catch(o){s=!0,r=o}finally{try{n||null==l.return||l.return()}finally{if(s)throw r}}return{errors:a}})}},{key:"onLatChange",value:function(e){this.setState({latitude:e.target.value}),this.clearValidationErr("latitude")}},{key:"onLongChange",value:function(e){this.setState({longitude:e.target.value}),this.clearValidationErr("longitude")}},{key:"submitLocation",value:function(e){e.preventDefault(),this.getWeather(this.state.latitude,this.state.longitude)}},{key:"getWeather",value:function(e,t){var a=this;p.a.get("https://api.weather.gov/points/"+e+","+t).then(function(e){var t=e.data.properties.relativeLocation.properties;a.setState({city:t.city,state:t.state,success:!0})}).catch(function(e){a.setState({success:!1,errorMsg:"Invalid Point"})})}},{key:"render",value:function(){var e=null,t=null,a=!0,n=!1,r=void 0;try{for(var i,l=this.state.errors[Symbol.iterator]();!(a=(i=l.next()).done);a=!0){var o=i.value;"latitude"===o.element&&(e=o.message),"longitude"===o.element&&(t=o.message)}}catch(o){n=!0,r=o}finally{try{a||null==l.return||l.return()}finally{if(n)throw r}}return s.a.createElement("div",null,s.a.createElement("div",{className:"hint"},s.a.createElement("p",null,s.a.createElement("strong",null,"Hint:")),s.a.createElement("p",null,"Latitude: 39.7456"),s.a.createElement("p",null,"Longitude: -97.0892")),s.a.createElement("div",{className:"inner-container location-form"},s.a.createElement("form",{onSubmit:this.submitLocation.bind(this)},s.a.createElement("div",{className:"input-group"},s.a.createElement("label",{htmlFor:"latitude"},"Latitude"),s.a.createElement("input",{type:"text",className:"form-input "+(e?"invalid":""),onChange:this.onLatChange.bind(this)})),s.a.createElement("div",{className:"input-group"},s.a.createElement("label",{htmlFor:"longitude"},"Longitude"),s.a.createElement("input",{type:"text",className:"form-input "+(t?"invalid":""),onChange:this.onLongChange.bind(this)})),s.a.createElement("input",{type:"submit",className:"submit-button",value:"Submit"}))),s.a.createElement("div",{className:"location-display"},this.state.success&&s.a.createElement("div",{className:"success-location"},s.a.createElement("h4",null,"You are located in:"),s.a.createElement("h3",null,this.state.city,", ",this.state.state)),!1===this.state.success&&s.a.createElement("div",{className:"invalid-location"},s.a.createElement("h3",null,this.state.errorMsg))))}}]),t}(s.a.Component),f=(a(43),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={isLoggedIn:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"loginSuccess",value:function(e){this.setState({isLoggedIn:e})}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},!this.state.isLoggedIn&&s.a.createElement(d,{validLogin:this.loginSuccess.bind(this)}),this.state.isLoggedIn&&s.a.createElement(g,null))}}]),t}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.b1affacc.chunk.js.map