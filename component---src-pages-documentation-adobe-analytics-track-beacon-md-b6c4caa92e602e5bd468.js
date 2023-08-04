"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5951],{83811:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return b},default:function(){return g}});var n,o=t(87462),i=t(63366),d=(t(15007),t(64983)),c=t(91515),s=t(75347),p=t(73848),r=t(31385),l=t(80726),m=["components"],b={},u=(n="TabsBlock",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),x={_frontmatter:b},f=c.Z;function g(e){var a=e.components,t=(0,i.Z)(e,m);return(0,d.mdx)(f,(0,o.Z)({},x,t,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"tracking-beacons"},"Tracking beacons"),(0,d.mdx)("h2",{id:"emulate-the-trackbeacon-call-from-the-v4-sdks"},"Emulate the trackBeacon call from the v4 SDKs"),(0,d.mdx)("p",null,"Sending beacon data to Adobe Analytics for reporting can be an effective way to understand how your audience can interact with physical landmarks."),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"trackBeacon")," API from v4 SDKs is no longer available in the Experience Platform SDKs. Now, you need to manually send beacon tracking data to your Adobe Analytics server and create the rules based on a user's proximity to your beacons. This solution requires the ",(0,d.mdx)("a",{parentName:"p",href:"../profile/index.md"},"Profile extension")," to create beacon-related rules."),(0,d.mdx)("p",null,"This topic contains sample code to help you implement your own ",(0,d.mdx)("inlineCode",{parentName:"p"},"trackBeacon")," calls."),(0,d.mdx)("h3",{id:"track-a-beacon"},"Track a beacon"),(0,d.mdx)("p",null,"When your user comes within the range of a beacon, call this method to send beacon data to ",(0,d.mdx)("a",{parentName:"p",href:"../adobe-analytics/index.md"},"Adobe Analytics"),". This code also saves all beacon-related data in the client-side Profile for use with the Rules Engine."),(0,d.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(s.default,{mdxType:"TrackBeaconAndroid"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(p.default,{mdxType:"TrackBeaconIos"}),(0,d.mdx)("h3",{id:"clear-the-current-beacon"},"Clear the current beacon"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"clearCurrentBeacon")," code removes the user attributes that were previously set in the Profile extension. To keep rules working as expected, this method should be called when the user is no longer within range of your beacon."),(0,d.mdx)(u,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(r.default,{mdxType:"ClearBeaconAndroid"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(l.default,{mdxType:"ClearBeaconIos"}),(0,d.mdx)("h2",{id:"use-beacon-values-in-tag-rules"},"Use beacon values in tag rules"),(0,d.mdx)("p",null,"In the code samples above, attributes are set in the client-side user profile. You can use these attributes when creating a rule in the Data Collection UI to provide a custom experience or to take a specific action when the user is near a beacon."),(0,d.mdx)("h3",{id:"beacon-data-in-rule-conditions"},"Beacon data in rule conditions"),(0,d.mdx)("p",null,"In conditions, you can mix and match beacon data to determine the specific audience for your action. You can use the following beacon-related variables:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"UUID (",(0,d.mdx)("inlineCode",{parentName:"li"},"a.beacon.uuid"),")"),(0,d.mdx)("li",{parentName:"ul"},"Major ID (",(0,d.mdx)("inlineCode",{parentName:"li"},"a.beacon.major"),")"),(0,d.mdx)("li",{parentName:"ul"},"Minor ID (",(0,d.mdx)("inlineCode",{parentName:"li"},"a.beacon.minor"),")"),(0,d.mdx)("li",{parentName:"ul"},"User Proximity (",(0,d.mdx)("inlineCode",{parentName:"li"},"a.beacon.prox"),")")),(0,d.mdx)("p",null,"Configure your condition by selecting the ",(0,d.mdx)("strong",{parentName:"p"},"Profile")," extension, selecting ",(0,d.mdx)("strong",{parentName:"p"},"Profile Value")," as the condition type, and typing the variable. The following graphic shows an example of a condition that passes when the Major ID (",(0,d.mdx)("inlineCode",{parentName:"p"},"a.beacon.major"),") of the beacon is equal to 12:"),(0,d.mdx)("p",null,(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1231px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/d36a2d24b02351991e108778a7a5269d/5530d/beacon-condition.webp 320w","/aep-mobile-sdkdocs/static/d36a2d24b02351991e108778a7a5269d/0c8fb/beacon-condition.webp 640w","/aep-mobile-sdkdocs/static/d36a2d24b02351991e108778a7a5269d/66e35/beacon-condition.webp 1231w"],sizes:"(max-width: 1231px) 100vw, 1231px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/d36a2d24b02351991e108778a7a5269d/dd4a7/beacon-condition.png 320w","/aep-mobile-sdkdocs/static/d36a2d24b02351991e108778a7a5269d/0f09e/beacon-condition.png 640w","/aep-mobile-sdkdocs/static/d36a2d24b02351991e108778a7a5269d/90377/beacon-condition.png 1231w"],sizes:"(max-width: 1231px) 100vw, 1231px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/d36a2d24b02351991e108778a7a5269d/90377/beacon-condition.png",alt:"beacon condition",title:"beacon condition",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,d.mdx)("p",null,(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1231px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.75%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/e4f0cfa2236f67f0df9bcc98a79d976e/5530d/beacon-rule.webp 320w","/aep-mobile-sdkdocs/static/e4f0cfa2236f67f0df9bcc98a79d976e/0c8fb/beacon-rule.webp 640w","/aep-mobile-sdkdocs/static/e4f0cfa2236f67f0df9bcc98a79d976e/66e35/beacon-rule.webp 1231w"],sizes:"(max-width: 1231px) 100vw, 1231px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/e4f0cfa2236f67f0df9bcc98a79d976e/dd4a7/beacon-rule.png 320w","/aep-mobile-sdkdocs/static/e4f0cfa2236f67f0df9bcc98a79d976e/0f09e/beacon-rule.png 640w","/aep-mobile-sdkdocs/static/e4f0cfa2236f67f0df9bcc98a79d976e/90377/beacon-rule.png 1231w"],sizes:"(max-width: 1231px) 100vw, 1231px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/e4f0cfa2236f67f0df9bcc98a79d976e/90377/beacon-rule.png",alt:"beacon rule",title:"beacon rule",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,d.mdx)("h3",{id:"beacon-data-in-rule-actions"},"Beacon data in rule actions"),(0,d.mdx)("p",null,"Before you can use beacon data in your actions, create a data element for each variable that you want to use in your actions. The following graphic shows an example of creating a data element called ",(0,d.mdx)("inlineCode",{parentName:"p"},"beacon.major")," for the ",(0,d.mdx)("inlineCode",{parentName:"p"},"a.beacon.major")," key in our profile:"),(0,d.mdx)("p",null,(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1235px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"28.750000000000004%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/2fdebcdb3ba2af08bf40afda50470a73/5530d/beacon-data-element.webp 320w","/aep-mobile-sdkdocs/static/2fdebcdb3ba2af08bf40afda50470a73/0c8fb/beacon-data-element.webp 640w","/aep-mobile-sdkdocs/static/2fdebcdb3ba2af08bf40afda50470a73/01365/beacon-data-element.webp 1235w"],sizes:"(max-width: 1235px) 100vw, 1235px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/2fdebcdb3ba2af08bf40afda50470a73/dd4a7/beacon-data-element.png 320w","/aep-mobile-sdkdocs/static/2fdebcdb3ba2af08bf40afda50470a73/0f09e/beacon-data-element.png 640w","/aep-mobile-sdkdocs/static/2fdebcdb3ba2af08bf40afda50470a73/a85d4/beacon-data-element.png 1235w"],sizes:"(max-width: 1235px) 100vw, 1235px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/2fdebcdb3ba2af08bf40afda50470a73/a85d4/beacon-data-element.png",alt:"beacon data element",title:"beacon data element",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,d.mdx)("p",null,"After creating a data element, you can use this data element as a token replacement in our actions. The graphic below shows an action that sends data to Adobe Analytics and attaches the ",(0,d.mdx)("inlineCode",{parentName:"p"},"beacon.major")," data element as additional context data:"),(0,d.mdx)("p",null,(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1235px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.6875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/c6994136469561d99b475931bc96c2f1/5530d/beacon-token-replacement.webp 320w","/aep-mobile-sdkdocs/static/c6994136469561d99b475931bc96c2f1/0c8fb/beacon-token-replacement.webp 640w","/aep-mobile-sdkdocs/static/c6994136469561d99b475931bc96c2f1/01365/beacon-token-replacement.webp 1235w"],sizes:"(max-width: 1235px) 100vw, 1235px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/c6994136469561d99b475931bc96c2f1/dd4a7/beacon-token-replacement.png 320w","/aep-mobile-sdkdocs/static/c6994136469561d99b475931bc96c2f1/0f09e/beacon-token-replacement.png 640w","/aep-mobile-sdkdocs/static/c6994136469561d99b475931bc96c2f1/a85d4/beacon-token-replacement.png 1235w"],sizes:"(max-width: 1235px) 100vw, 1235px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/c6994136469561d99b475931bc96c2f1/a85d4/beacon-token-replacement.png",alt:"beacon token replacement",title:"beacon token replacement",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-adobe-analytics-track-beacon-md-b6c4caa92e602e5bd468.js.map