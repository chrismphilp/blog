(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e){e.exports={title:"The Wonders of Tattoo Removal",subTitle:"How can 'permanent' ink be unwritten?",author:"Christopher Philp",category:"Science",link:"/tattoo-removal",date:"24/06/2019",widgetImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",widgetImageAlt:"React Logo",contentKey:"tattooRemoval"}},17:function(e){e.exports={title:"Every Cloud Has a Silver... What?",subTitle:"The formation of clouds",author:"Christopher Philp",category:"Science",link:"/cloud-theory",date:"15/07/2019",widgetImage:"https://hitinfrastructure.com/images/site/article_headers/_normal/Cloud.jpg",widgetImageAlt:"Cloud",contentKey:"cloudFormation"}},31:function(e,t,a){e.exports=a(42)},36:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(25),i=a.n(r),l=(a(36),a(15)),s=a(2),c=a(3),h=a(5),u=a(4),d=a(6),m=a(19),p=a.n(m),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={date:p()().format("MMMM Do YYYY, h:mm:ss a")},a.updateTime(),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"updateTime",value:function(){var e=this;setInterval(function(){return e.setState({date:p()().format("MMMM Do YYYY, h:mm:ss a")})},1e3)}},{key:"render",value:function(){return o.a.createElement("div",{style:g.root},o.a.createElement(l.b,{to:"/",style:g.logo},"Philpy Thought Shower"),o.a.createElement("div",{style:g.time},this.state.date))}}]),t}(n.Component),g={root:{backgroundColor:"black",height:55,color:"white"},logo:{float:"left",paddingTop:13.5,paddingLeft:15,textDecoration:"none",color:"white"},time:{float:"right",paddingTop:13.5,paddingRight:15}},b=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null)}}]),t}(n.Component),y=a(8),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={showFullPost:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handlePostSwitch",value:function(){var e=this.state.showFullPost;this.setState({showFullPost:!e})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{onClick:function(){return e.handlePostSwitch()},style:w.cardRoot},o.a.createElement("div",{style:w.cardTile},o.a.createElement("div",{style:w.cardText},o.a.createElement("div",{style:w.cardTitle},this.props.entry.title),o.a.createElement("div",{style:w.cardDate},o.a.createElement("h6",null,"Published date: ",this.props.entry.date),o.a.createElement("h6",null,"Category: ",this.props.entry.category))),o.a.createElement("div",{style:w.cardImage},o.a.createElement("img",{src:this.props.entry.widgetImage,alt:this.props.entry.widgetImageAlt,style:w.image}))))}}]),t}(n.Component),w={cardRoot:{paddingTop:25},cardTile:{flexDirection:"row",display:"flex",cursor:"pointer",borderStyle:"outset",borderColor:"black",borderWidth:2.5,fontFamily:"DM Serif Display"},cardText:{flexDirection:"column",flex:2},cardImage:{flex:1,padding:5,borderLeftStyle:"solid",borderLeftColor:"#e6e6e6",borderLeftWidth:1.5},image:{maxWidth:"100%",maxHeight:250},cardTitle:{display:"flex",flex:3,flexDirection:"column",backgroundColor:"#ffffff",fontSize:50},cardDate:{}},E=a(43),k=a(44),O=a(16),j=a(17),T=[j,O],C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={redirect:!1,url:"/"},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"redirectToLink",value:function(e){this.setState({redirect:!0,url:e})}},{key:"render",value:function(){var e=this;return this.state.redirect?o.a.createElement(y.a,{push:!0,to:"".concat(this.props.match.url.slice(0,-1)).concat(this.state.url)}):o.a.createElement(E.a,{style:x.container},o.a.createElement(k.a,null,T.map(function(t,a){return o.a.createElement("div",{onClick:function(){return e.redirectToLink(t.link)},key:a},o.a.createElement(v,{entry:t}))})))}}]),t}(n.Component),x={container:{paddingTop:25,paddingBottom:25}},S=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"About me."))}}]),t}(n.Component),P=a(45),D=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(P.a,{style:R.contentContainer},o.a.createElement(P.a.Header,{as:"h5"},this.props.subTitle),o.a.createElement(P.a.Body,{style:R.postContent},this.props.children))}}]),t}(n.Component),R={contentContainer:{backgroundColor:"#ffffff"},contentBorder:{borderLeft:5,borderRight:5,borderBottom:5,borderTop:0,borderWidth:1,borderColor:"#e6e6e6",borderStyle:"solid"},postContent:{fontFamily:"Source Sans Pro",textAlign:"justify"}},F=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(D,{subTitle:j.subTitle},o.a.createElement("div",null,o.a.createElement("h5",null,"Warning, there will be a ",o.a.createElement("i",null,"blizzard")," of cloud related puns in this article."),o.a.createElement("h5",null,"So lets (rain)drop into the facts. Clouds are made of up of water droplets and ice crystals, small and light enough to float in the air. However, how does this water vapour remain together? That is through something known as the ",o.a.createElement("i",null,"condensation nuclei"),". This is a particle such as a piece of pollen or dust, which the water vapour condense onto. When billions of these particles collect together they form a visible cloud."),o.a.createElement("h5",null,"Hopefully by this point you're on ",o.a.createElement("i",null,"cloud nine"),", and most importantly, have vastly improved your knowledge of the billions of droplets that hang over you every day.")))}}]),t}(n.Component),I=function(e){return o.a.createElement("div",{style:W.container},o.a.createElement("div",{style:W.contentFiller}),o.a.createElement("div",{style:W.gifDisplay},e.children),o.a.createElement("div",{style:W.contentFiller}))},W={container:{display:"flex"},gifDisplay:{flex:3},contentFiller:{flex:1}},L=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(D,{subTitle:O.subTitle},o.a.createElement("div",null,o.a.createElement("h5",null,o.a.createElement("b",null,"Lasers"),". However, these are not the type that you saw in those classic James Bond movies, slowly advancing to the hero's groin. These are known as Q-switched lasers and are the most common way to remove tattoos. Before getting to the removal stage however, it is important to understand how tattoo's themselves remain in the body."),o.a.createElement("h5",null,"Tattooing involves inserting ink into the dermal tissue layer of the skin (found under the epidermis - the outermost layer of the skin). Once the ink has entered, normally using a tattoo needle, the pigment begins to disperse itself through the epidermis and the upper dermis. Once it has entered these layers of the skin, the body sends out one of it's billions of personal protection operatives for foreign agents - ",o.a.createElement("b",null,"Phagocytes"),"."),o.a.createElement(I,null,o.a.createElement("iframe",{src:"https://www.gfycat.com/ifr/essentialminiaturecuckoo",title:"Phagocyte",width:"640",height:"346",allowFullScreen:!0})),o.a.createElement("h5",null,"The main function of Phagocytes within the human body is to protect from harmful particles, and are essential for shielding the human body from infections and to provide subsequent immunity. They are attracted to foreign particles by chemical signals released by the body. As seen above, when eventually coming into contact with their target, they bind, and then engulf them. Here-in lies the problem; the ink particles are too big to be ingested by the Phagocytes, so instead are held in place in the layers of skin by its Collagen network (the skins main structural protein)."),o.a.createElement("h5",null,"So now you may be beginning to get an ",o.a.createElement("i",null,"inkling")," as to how tattoos can be removed. The aforementioned Q-switched lasers emit a centralised burst of light, targeting a specific spectrum of color represented in the tattoo (e.g. black, red, etc.). This means that for tattoos with differing colours, multiple lasers must be used. The laser is fired at these pigments, and as it hits, in nanoseconds they are heated up by thousands of degrees, eventually emitting the contained energy as a shockwave, in a process known as ",o.a.createElement("b",null,"Photothermolysis"),". The shockwave ripples through the dermis of the skin, causing weaker structures to break apart, while larger, stronger ones, merely vibrate. Once the tattoo pigment has been broken up into smaller fragments, the Phagocytes can then fully engulf and dispose of them."),o.a.createElement("h5",null,"The whole process can take 6-8 sessions of laser removal for a normal sized tattoo, and up to 10 sessions for larger tattoos, with a total cost from anywhere between \xa3270 to \xa3600 ",o.a.createElement("a",{href:"https://graziadaily.co.uk/life/real-life/10-things-need-know-laser-tattoo-removal/"},"[2]"),"."),o.a.createElement("h5",null,"So, given the fact that over 1 in 4 individuals are reported as regretting ever getting a tattoo ",o.a.createElement("a",{href:"https://www.advdermatology.com/blog/statistics-surrounding-tattoo-regret"},"[1]"),", there's hope on the horizon with this amazing technology. So your mate Dave with his 'sick' ",o.a.createElement("b",null,"NO RAGRETS")," graffiti across his chest can still have some optimism.")))}}]),t}(n.Component),M=function(){return o.a.createElement("main",null,o.a.createElement(y.d,null,o.a.createElement(y.b,{exact:!0,path:"/",component:C}),o.a.createElement(y.b,{path:"/about",component:S}),o.a.createElement(y.b,{path:"/tattoo-removal",component:L}),o.a.createElement(y.b,{path:"/cloud-theory",component:F})))},B=function(){return o.a.createElement("div",null,o.a.createElement(l.a,{basename:"/blog"},o.a.createElement(f,null),o.a.createElement(M,null)),o.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.27c28fa9.chunk.js.map