(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},24:function(e,t,n){e.exports=n(37)},37:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(21),c=n.n(r),i=n(5),l=n(6),s=n(8),m=n(7),u=n(9),v=n(12),h=(n(13),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={movie:null,showingMovie:!1},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"movie-small"},o.a.createElement("img",{src:this.props.movie.Poster,alt:"movie"}),o.a.createElement("h3",null,this.props.movie.Title))}}]),t}(o.a.Component)),p=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={movie:null},n.handleRender=function(){return n.state.movie?(console.log(n.state.movie),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col s12 m4"},o.a.createElement("img",{className:"full-image",src:n.state.movie.Poster,alt:""})),o.a.createElement("div",{className:"col s12 m8 text-box"},o.a.createElement("h3",{id:"title"},n.state.movie.Title," (",n.state.movie.Year,")"),o.a.createElement("hr",{id:"title-line"}),o.a.createElement("h4",{id:"score"},o.a.createElement("strong",null,"IMDB RATING: "),n.state.movie.imdbRating),o.a.createElement("p",null,o.a.createElement("strong",null,"Synopsis: ")," ",n.state.movie.Plot)))):o.a.createElement("div",null,"Loading")},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://www.omdbapi.com/?apikey=".concat("43ef0e0e","&i=").concat(this.props.movie.imdbID,"&plot=full")).then(function(e){return e.json()}).then(function(t){return e.setState({movie:t})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"full-movie"},this.handleRender())}}]),t}(o.a.Component),d=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={renderBig:!1,index:null,movie:null},n.ShowMovie=function(){if(n.props.movie){for(var e=[],t=0;t<n.props.movie.Search.length;t++)e.push(o.a.createElement("div",{className:"col s12 m6",onClick:n.handleClick.bind(Object(v.a)(Object(v.a)(n)),n.props.movie.Search[t]),key:t},o.a.createElement(h,{movie:n.props.movie.Search[t]})));return o.a.createElement("div",{className:"movieGrid"},e)}return null},n.ShowBig=function(){if(n.state.renderBig)return o.a.createElement(p,{movie:n.state.movie})},n.closeBig=function(){n.state.renderBig&&n.setState({renderBig:!1})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){console.log(e),this.setState({movie:e,renderBig:!0})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{onClick:this.closeBig},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},this.ShowMovie()))),this.ShowBig())}}]),t}(o.a.Component),f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={search:"",movie:null},n.onSubmit=function(e){e.preventDefault(),console.log(e);fetch("http://www.omdbapi.com/?apikey=".concat("43ef0e0e","&s=").concat(n.state.search,"&plot=full")).then(function(e){return e.json()}).then(function(e){return n.setState({movie:e})}).catch(function(e){console.log(e)})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"container"},o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("label",null,"Movie: "),o.a.createElement("input",{type:"text",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})}}))),o.a.createElement(d,{movie:this.state.movie}))}}]),t}(o.a.Component),b=n(15),E=n(10);c.a.render(o.a.createElement(b.a,null,o.a.createElement(E.a,{exact:!0,path:"/",component:f})),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.8146b995.chunk.js.map