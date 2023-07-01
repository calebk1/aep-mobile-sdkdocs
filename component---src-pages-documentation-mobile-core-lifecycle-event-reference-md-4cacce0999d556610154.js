"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4068],{92362:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return f}});var n,i=a(87462),d=a(63366),l=(a(15007),a(64983)),r=a(91515),m=["components"],o={},p=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),s={_frontmatter:o},c=r.Z;function f(e){var t=e.components,a=(0,d.Z)(e,m);return(0,l.mdx)(c,(0,i.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"lifecycle-event-reference"},"Lifecycle event reference"),(0,l.mdx)("h2",{id:"events-handled-by-lifecycle"},"Events handled by Lifecycle"),(0,l.mdx)("p",null,"The following event is handled by the Lifecycle extension:"),(0,l.mdx)("h3",{id:"lifecycle-content-request"},"Lifecycle content request"),(0,l.mdx)("p",null,"This event represents a request to the Lifecycle extension to start or pause collecting data and is generated when the ",(0,l.mdx)("inlineCode",{parentName:"p"},"lifecycleStart")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"lifecyclePause")," APIs are used."),(0,l.mdx)("h4",{id:"event-details"},"Event details"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:"left"},"Event Type"),(0,l.mdx)("th",{parentName:"tr",align:"left"},"Event Source"),(0,l.mdx)("th",{parentName:"tr",align:"left"},"Paired"),(0,l.mdx)("th",{parentName:"tr",align:"left"},"Direction"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"left"},"com.adobe.eventType.lifecycle"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"com.adobe.eventSource.requestContent"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"No"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"N/A")))),(0,l.mdx)("h4",{id:"data-payload-definition"},"Data payload definition"),(0,l.mdx)("p",null,"The following key/value pair is used in the events:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:"left"},(0,l.mdx)("strong",{parentName:"th"},"Key")),(0,l.mdx)("th",{parentName:"tr",align:"left"},(0,l.mdx)("strong",{parentName:"th"},"Value Type")),(0,l.mdx)("th",{parentName:"tr",align:"left"},(0,l.mdx)("strong",{parentName:"th"},"Required")),(0,l.mdx)("th",{parentName:"tr",align:"left"},(0,l.mdx)("strong",{parentName:"th"},"Description")))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"left"},(0,l.mdx)("inlineCode",{parentName:"td"},"action")),(0,l.mdx)("td",{parentName:"tr",align:"left"},"String"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Represents the lifecycle action type and can be one of these values: ",(0,l.mdx)("inlineCode",{parentName:"td"},"start"),"/",(0,l.mdx)("inlineCode",{parentName:"td"},"pause"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"left"},(0,l.mdx)("inlineCode",{parentName:"td"},"additionalcontextdata")),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Map"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"No"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Map that contains the user-supplied context data.")))),(0,l.mdx)("h3",{id:"sample-events"},"Sample events"),(0,l.mdx)("p",null,"The following section displays sample lifecycle content requests."),(0,l.mdx)("h4",{id:"start-lifecycle-request"},"Start Lifecycle request"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{    \n    "action": "start",    \n    "additionalcontextdata": {        \n        "key1" : "value1",        \n        "key2" : "value2"    \n    }\n}\n')),(0,l.mdx)("h3",{id:"pause-lifecycle-request"},"Pause Lifecycle request"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{    \n    "action": "pause"\n}\n')),(0,l.mdx)("h3",{id:"hub-shared-state"},"Hub shared state"),(0,l.mdx)("p",null,"Lifecycle listens for the Configuration shared state events."),(0,l.mdx)("h2",{id:"events-dispatched-by-lifecycle"},"Events dispatched by Lifecycle"),(0,l.mdx)("p",null,"The following events are dispatched by the Lifecycle extension:"),(0,l.mdx)("h3",{id:"lifecycle-data-content-response"},"Lifecycle data content response"),(0,l.mdx)("p",null,"This event is a response from the Lifecycle module to notify lifecycle context data in which a client/module might be interested. If a callback has been registered, this event can be used to issue a callback to the user."),(0,l.mdx)("p",null,"The event is generated by the Lifecycle extension, when the ",(0,l.mdx)("inlineCode",{parentName:"p"},"lifecycleStart")," API is called when a new session is started and it contains the lifecycle metrics as part of ",(0,l.mdx)("inlineCode",{parentName:"p"},"lifecyclecontextdata")," and previous session information. For more information about the available metrics, see ",(0,l.mdx)("a",{parentName:"p",href:"./metrics.md"},"Lifecycle Metrics"),"​."),(0,l.mdx)("h4",{id:"event-details-1"},"Event details"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:"left"},"Event Type"),(0,l.mdx)("th",{parentName:"tr",align:"left"},"Event Source"),(0,l.mdx)("th",{parentName:"tr",align:"left"},"Paired"),(0,l.mdx)("th",{parentName:"tr",align:"left"},"Direction"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"left"},(0,l.mdx)("inlineCode",{parentName:"td"},"com.adobe.eventType.lifecycle")),(0,l.mdx)("td",{parentName:"tr",align:"left"},(0,l.mdx)("inlineCode",{parentName:"td"},"com.adobe.eventSource.responseContent")),(0,l.mdx)("td",{parentName:"tr",align:"left"},"No"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"N/A")))),(0,l.mdx)("h4",{id:"data-payload-definition-1"},"Data payload definition"),(0,l.mdx)("p",null,"Here are the key-value pairs in this event:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:"left"},(0,l.mdx)("strong",{parentName:"th"},"Key")),(0,l.mdx)("th",{parentName:"tr",align:"left"},(0,l.mdx)("strong",{parentName:"th"},"Value Type")),(0,l.mdx)("th",{parentName:"tr",align:"left"},(0,l.mdx)("strong",{parentName:"th"},"Required")),(0,l.mdx)("th",{parentName:"tr",align:"left"},(0,l.mdx)("strong",{parentName:"th"},"Description")))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"left"},(0,l.mdx)("inlineCode",{parentName:"td"},"lifecyclecontextdata")),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Map","<","String,String",">"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"The value is a map of the key-value pairs that are generated by Lifecycle. This data can be consumed by other modules that operate on the data.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"left"},(0,l.mdx)("inlineCode",{parentName:"td"},"sessionevent")),(0,l.mdx)("td",{parentName:"tr",align:"left"},"String"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"The type of event which triggered a ",(0,l.mdx)("inlineCode",{parentName:"td"},"start")," response.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"left"},(0,l.mdx)("inlineCode",{parentName:"td"},"starttimestampmillis")),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Long"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"The start timestamp of the new session.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"left"},(0,l.mdx)("inlineCode",{parentName:"td"},"maxsessionlength")),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Long"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Maximum time in milliseconds before a session times out. The value is currently set to 7 days. This key is different from the configuration parameter, ",(0,l.mdx)("inlineCode",{parentName:"td"},"lifecycle.sessionTimeout"),", which specifies the timeout for a ",(0,l.mdx)("strong",{parentName:"td"},"paused")," session.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"left"},(0,l.mdx)("inlineCode",{parentName:"td"},"previoussessionstarttimestampmillis")),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Long"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"The previous session's start timestamp. If there was no previous session, the value could be ",(0,l.mdx)("inlineCode",{parentName:"td"},"0L")," .")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"left"},(0,l.mdx)("inlineCode",{parentName:"td"},"previoussessionpausetimestampmillis")),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Long"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"The previous session's pause timestamp. If there was no previous session, the value could be ",(0,l.mdx)("inlineCode",{parentName:"td"},"0L")," .")))),(0,l.mdx)("h3",{id:"lifecycle-application-foreground"},"Lifecycle application foreground"),(0,l.mdx)("p",null,"This event is a response from the Lifecycle extension to notify that the application is being displayed in the foreground. The event is generated by the Lifecycle extension when the ",(0,l.mdx)("a",{parentName:"p",href:"./api-reference.md#lifecyclestart"},"lifecycleStart")," API is called, typically when the application comes to the foreground of the device."),(0,l.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"To forward this event to the Adobe Experience Platform Edge Network, follow the steps outlined in ",(0,l.mdx)("a",{parentName:"p",href:"../../lifecycle-for-edge-network/index.md#configure-a-rule-to-forward-lifecycle-metrics-to-platform"},"Configure a Rule to forward Lifecycle metrics to Platform"),"."),(0,l.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"In Android, there is a 500 millisecond timeout between consecutive ",(0,l.mdx)("inlineCode",{parentName:"p"},"lifecycleStart")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"lifecyclePause")," events to prevent dispatching of events due to switching between Android activities."),(0,l.mdx)("h4",{id:"event-details-2"},"Event details"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:"left"},"Event Type"),(0,l.mdx)("th",{parentName:"tr",align:"left"},"Event Source"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"left"},"com.adobe.eventType.lifecycle"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"com.adobe.eventSource.applicationLaunch")))),(0,l.mdx)("h4",{id:"data-payload"},"Data payload"),(0,l.mdx)("p",null,"The Lifecycle application foreground data payload is defined by the Platform Mobile Lifecycle Details XDM field group, and includes information about the application, device, and environment when the event occurred. Please refer to ",(0,l.mdx)("a",{parentName:"p",href:"../../lifecycle-for-edge-network/metrics.md#lifecycle-application-foreground-metrics"},"Lifecycle Application Foreground metrics")," for a list of metrics included with this event."),(0,l.mdx)("h3",{id:"lifecycle-application-background"},"Lifecycle application background"),(0,l.mdx)("p",null,"This event is a response from the Lifecycle extension to notify that the application is in the background."),(0,l.mdx)("p",null,"The event is generated by the Lifecycle extension when:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The ",(0,l.mdx)("inlineCode",{parentName:"li"},"lifecyclePause")," API is called, typically when the application goes to the background of the device."),(0,l.mdx)("li",{parentName:"ul"},"The ",(0,l.mdx)("inlineCode",{parentName:"li"},"lifecycleStart")," API is called without a previous call to ",(0,l.mdx)("inlineCode",{parentName:"li"},"lifecyclePause")," (such as when the application terminates unexpectedly). In this case, a Lifecycle Application Background event is dispatched just before the Lifecycle Application Foreground event, however the background event's timestamp is backdated to a time before the application previously went in the background.")),(0,l.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"To forward this event to the Adobe Experience Platform Edge Network, follow the steps outlined in ",(0,l.mdx)("a",{parentName:"p",href:"../../lifecycle-for-edge-network/index.md#configure-a-rule-to-forward-lifecycle-metrics-to-platform"},"Configure a Rule to forward Lifecycle metrics to Platform"),"."),(0,l.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"In Android, there is a 500 millisecond timeout between consecutive ",(0,l.mdx)("inlineCode",{parentName:"p"},"lifecycleStart")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"lifecyclePause")," events to prevent dispatching of events due to switching between Android activities."),(0,l.mdx)("h4",{id:"event-details-3"},"Event details"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:"left"},"Event Type"),(0,l.mdx)("th",{parentName:"tr",align:"left"},"Event Source"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"left"},"com.adobe.eventType.lifecycle"),(0,l.mdx)("td",{parentName:"tr",align:"left"},"com.adobe.eventSource.applicationClose")))),(0,l.mdx)("h4",{id:"data-payload-1"},"Data payload"),(0,l.mdx)("p",null,"The Lifecycle Application Background data payload is defined by the Platform Mobile Lifecycle Details XDM field group, and includes information about the application close type and previous session length. Please refer to ",(0,l.mdx)("a",{parentName:"p",href:"../../lifecycle-for-edge-network/metrics.md#lifecycle-application-background-metrics"},"Lifecycle Application Background metrics")," for a list of metrics included with this event."))}f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-mobile-core-lifecycle-event-reference-md-4cacce0999d556610154.js.map