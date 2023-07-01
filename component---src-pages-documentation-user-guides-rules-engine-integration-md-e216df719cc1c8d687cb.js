"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5536],{48356:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return l},default:function(){return c}});var n=t(87462),i=t(63366),o=(t(15007),t(64983)),s=t(91515),p=["components"],l={},d={_frontmatter:l},m=s.Z;function c(e){var a=e.components,t=(0,i.Z)(e,p);return(0,o.mdx)(m,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"signal-extension-and-rules-engine-integration"},"Signal extension and Rules Engine integration"),(0,o.mdx)("p",null,"The rules that you set up can use the available triggers and conditions, which result in one of the following actions:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Send a postback"),(0,o.mdx)("li",{parentName:"ul"},"Send Personally Identifiable Information (PII)"),(0,o.mdx)("li",{parentName:"ul"},"Open a URL")),(0,o.mdx)("p",null,"After these actions have been configured to be triggered and published, the Signal extension carries out the requested actions."),(0,o.mdx)("p",null,"To send PII data to external destinations, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"PII")," action can trigger the rules engine when certain triggers and traits match. When setting a rule, you can also set the ",(0,o.mdx)("inlineCode",{parentName:"p"},"PII")," action for a Signal event. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"collectPii")," API can then be used to trigger the rule and send the PII data."),(0,o.mdx)("h2",{id:"rules-tokens"},"Rules tokens"),(0,o.mdx)("p",null,"Rules tokens are special strings that are used in rule actions as values and are expanded by the SDK when the action is carried out. The format of a token is ",(0,o.mdx)("inlineCode",{parentName:"p"},"TOKEN"),", where token is any data element that is defined in the Data Collection UI for a mobile property that identifies the source of the data from which the token is expanded. For example, ",(0,o.mdx)("inlineCode",{parentName:"p"},"TOKEN")," can be used in the Signal postback action, where ",(0,o.mdx)("inlineCode",{parentName:"p"},"My Data element for ECID")," is a data element that was created using the Mobile Core extension, and the data element type is Experience Cloud ID."),(0,o.mdx)("p",null,"The token can also be one of the reserved key names. For more information, see the ",(0,o.mdx)("a",{parentName:"p",href:"../mobile-core/rules-engine/technical-details.md#matching-and-retrieving-values-by-keys"},"matching and retrieving values by keys tutorial"),"."),(0,o.mdx)("p",null,"Some tokens are modifier functions that specify the transformation that is applied to the value that was replaced by the token. An example is ",(0,o.mdx)("inlineCode",{parentName:"p"},"urlenc"),", which specifies that the value will be URL-encoded before it is replaced in the rule."),(0,o.mdx)("h3",{id:"using-tokens-in-postbacks-and-pii-rule-actions"},"Using tokens in Postbacks and PII rule actions"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"Send Postback")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"Send PII")," actions allow you to specify a ",(0,o.mdx)("inlineCode",{parentName:"p"},"URL")," field and an optional ",(0,o.mdx)("inlineCode",{parentName:"p"},"Post Body")," field. You can specify which tokens should be expanded by the Experience Platform SDKs when the postback or PII network call is triggered. For more information on tokens, see the ",(0,o.mdx)("a",{parentName:"p",href:"#rules-tokens"},"rule tokens documentation"),"."),(0,o.mdx)("h4",{id:"example"},"Example"),(0,o.mdx)("p",null,"The following example shows how to use the data that is passed to the MobileCore (Android) / ACPCore (iOS) ",(0,o.mdx)("inlineCode",{parentName:"p"},"collectPii")," API to form a token:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"In the mobile application, call ",(0,o.mdx)("inlineCode",{parentName:"p"},"collectPII")," to fire Event with context data."),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-java"},' Signal.registerExtension();\n ...\n Map<String, String> data = new HashMap<String, String>();\n data.put("user_email", "user_001@example.com");\n MobileCore.collectPII(data);\n')),(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("strong",{parentName:"p"},"Objective-C")),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-text"},' [ACPSignal registerExtension];\n ...\n [ACPCore collectPii:data:@{@"user_email" : @"user_001@example.com"}];\n')),(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("strong",{parentName:"p"},"Swift")),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},' ACPSignal.registerExtension()\n ...\n let piiContextData: [String: String] = ["user_email" : "user_001@example.com"]\n ACPCore.collectPii(piiContextData)\n'))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"In the Data Collection UI, create a data element for the ",(0,o.mdx)("inlineCode",{parentName:"p"},"user_email")," context data key."),(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1228px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/a865f967638454c5498c09f4a4a870c3/5530d/data-element-example-collect-pii.webp 320w","/aep-mobile-sdkdocs/static/a865f967638454c5498c09f4a4a870c3/0c8fb/data-element-example-collect-pii.webp 640w","/aep-mobile-sdkdocs/static/a865f967638454c5498c09f4a4a870c3/1e2d9/data-element-example-collect-pii.webp 1228w"],sizes:"(max-width: 1228px) 100vw, 1228px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/a865f967638454c5498c09f4a4a870c3/dd4a7/data-element-example-collect-pii.png 320w","/aep-mobile-sdkdocs/static/a865f967638454c5498c09f4a4a870c3/0f09e/data-element-example-collect-pii.png 640w","/aep-mobile-sdkdocs/static/a865f967638454c5498c09f4a4a870c3/912c7/data-element-example-collect-pii.png 1228w"],sizes:"(max-width: 1228px) 100vw, 1228px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/a865f967638454c5498c09f4a4a870c3/912c7/data-element-example-collect-pii.png",alt:"Data Element Example for Collect PII context data key",title:"Data Element Example for Collect PII context data key",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"In the Data Collection UI, create a new rule for sending a postback.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Create a new rule by selecting the ",(0,o.mdx)("strong",{parentName:"p"},"Mobile Core Collect PII")," event and the ",(0,o.mdx)("strong",{parentName:"p"},"Action Mobile Core Send Postback")," action."),(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1112px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"102.8125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/9f4b8140a3ae011c6c34d2d28cf4ba99/5530d/postback-pii-token-example.webp 320w","/aep-mobile-sdkdocs/static/9f4b8140a3ae011c6c34d2d28cf4ba99/0c8fb/postback-pii-token-example.webp 640w","/aep-mobile-sdkdocs/static/9f4b8140a3ae011c6c34d2d28cf4ba99/81cde/postback-pii-token-example.webp 1112w"],sizes:"(max-width: 1112px) 100vw, 1112px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/9f4b8140a3ae011c6c34d2d28cf4ba99/dd4a7/postback-pii-token-example.png 320w","/aep-mobile-sdkdocs/static/9f4b8140a3ae011c6c34d2d28cf4ba99/0f09e/postback-pii-token-example.png 640w","/aep-mobile-sdkdocs/static/9f4b8140a3ae011c6c34d2d28cf4ba99/78ab6/postback-pii-token-example.png 1112w"],sizes:"(max-width: 1112px) 100vw, 1112px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/9f4b8140a3ae011c6c34d2d28cf4ba99/78ab6/postback-pii-token-example.png",alt:"Rule example using Collect PII event and Postback action",title:"Rule example using Collect PII event and Postback action",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Select the data element that you created in step 1 for the Postback action.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Edit the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Send Postback")," action and include the following URL in the corresponding edit box:"),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-text"}," https://my.company.com/users?email={%%Mobile Core Context Data email%%}\n")),(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.43750000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/e8f213aa8807b586e3abd817936a5a49/5530d/send-postback-action.webp 320w","/aep-mobile-sdkdocs/static/e8f213aa8807b586e3abd817936a5a49/0c8fb/send-postback-action.webp 640w","/aep-mobile-sdkdocs/static/e8f213aa8807b586e3abd817936a5a49/94b1e/send-postback-action.webp 1280w","/aep-mobile-sdkdocs/static/e8f213aa8807b586e3abd817936a5a49/fee8c/send-postback-action.webp 1362w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/e8f213aa8807b586e3abd817936a5a49/dd4a7/send-postback-action.png 320w","/aep-mobile-sdkdocs/static/e8f213aa8807b586e3abd817936a5a49/0f09e/send-postback-action.png 640w","/aep-mobile-sdkdocs/static/e8f213aa8807b586e3abd817936a5a49/bbbf7/send-postback-action.png 1280w","/aep-mobile-sdkdocs/static/e8f213aa8807b586e3abd817936a5a49/7046d/send-postback-action.png 1362w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/e8f213aa8807b586e3abd817936a5a49/bbbf7/send-postback-action.png",alt:"Send Postback action example",title:"Send Postback action example",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))),(0,o.mdx)("p",null,"For more information about ",(0,o.mdx)("inlineCode",{parentName:"p"},"collectPii")," and its usage, see ",(0,o.mdx)("inlineCode",{parentName:"p"},"collectPii")," in the ",(0,o.mdx)("a",{parentName:"p",href:"../mobile-core/api-reference.md#collect-pii"},"Mobile Core API reference"),"."),(0,o.mdx)("h3",{id:"using-tokens-in-open-url-rule-actions"},"Using tokens in Open URL rule actions"),(0,o.mdx)("p",null,"Similarly to using tokens in postbacks and PII rule actions, ",(0,o.mdx)("inlineCode",{parentName:"p"},"Open URL")," actions allow you to specify a URL, which can contain the tokens that will be expanded by the Experience Platform SDKs. For more information about tokens, see the ",(0,o.mdx)("a",{parentName:"p",href:"#rules-tokens"},"rule tokens documentation"),"."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-user-guides-rules-engine-integration-md-e216df719cc1c8d687cb.js.map