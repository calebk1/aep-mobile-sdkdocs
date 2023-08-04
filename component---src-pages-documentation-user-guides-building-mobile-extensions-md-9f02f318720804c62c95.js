"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5482],{92991:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return x}});var a,o=t(87462),i=t(63366),s=(t(15007),t(64983)),l=t(91515),r=["components"],d={},m=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),p={_frontmatter:d},u=l.Z;function x(e){var n=e.components,t=(0,i.Z)(e,r);return(0,s.mdx)(u,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"building-mobile-extensions"},"Building mobile extensions"),(0,s.mdx)("p",null,"To support customer-specific features, and allow for the greatest flexibility, Adobe Experience Platform Mobile SDK provides an interface that allows customers to integrate with the Mobile Core at a much lower level. This interface allows customers to define extensions, which are similar in capabilities to the ",(0,s.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/experience-platform/tags/ui/extensions/overview.html"},"tag extensions"),". The Mobile Core allows all extensions to access the events and data being sent through the Experience Platform SDK."),(0,s.mdx)("p",null,"Extensions allow customers to extend the Experience Platform SDKs with their own code. This includes listening for and dispatching events, reading the shared state of any registered extension, and sharing the state of the current extension. The application can use the extension to monitor for information that Adobe does not expose by default. It can also use the extension to modify Experience Platform SDK internal operations. For example, the application can use the extension to add additional data to messages that are sent or by sending data to other systems."),(0,s.mdx)("h2",{id:"prerequisites-to-building-an-extension"},"Prerequisites to building an extension"),(0,s.mdx)("p",null,"Before you build an extension, complete the following tasks:"),(0,s.mdx)("h3",{id:"ensure-that-you-are-using-the-adobe-experience-platform-sdks"},"Ensure that you are using the Adobe Experience Platform SDKs"),(0,s.mdx)("p",null,"  Extensions extend the behavior of these SDKs."),(0,s.mdx)("h3",{id:"ensure-that-you-can-accomplish-your-goals-only-by-using-an-extension"},"Ensure that you can accomplish your goals only by using an extension"),(0,s.mdx)("p",null,"  To determine your goals, think about the following questions:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Do you need access to data that is not already exposed via the Adobe Experience Platform SDKs?")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Do you need to be notified when messages will be sent, or data is being collected by the Adobe Experience Platform SDKs?")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Do you need to add data to or modify data for outgoing messages?")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Do you need to expose data to other extensions or to rules processing?"),(0,s.mdx)("p",{parentName:"li"},"If your answer to any of these questions is ",(0,s.mdx)("strong",{parentName:"p"},"yes"),", build the extension."))),(0,s.mdx)("h3",{id:"review-the-namespace-conventions"},"Review the namespace conventions"),(0,s.mdx)("p",null,"Components or data that are provided by Adobe must be clearly distinguished from the components or data that are provided by external parties. Inconsistent naming conventions impact module naming, event type, source names, and event data keys."),(0,s.mdx)("p",null,"The following naming rules apply for extensions:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"The ",(0,s.mdx)("inlineCode",{parentName:"li"},"ADOBE_PREFIX")," is ",(0,s.mdx)("inlineCode",{parentName:"li"},"com.adobe"),"."),(0,s.mdx)("li",{parentName:"ul"},"The ",(0,s.mdx)("inlineCode",{parentName:"li"},"THIRDPARTY_PREFIX")," is ",(0,s.mdx)("inlineCode",{parentName:"li"},"com."),". The prefix ",(0,s.mdx)("inlineCode",{parentName:"li"},"com.adobe.*")," is reserved for Adobe."),(0,s.mdx)("li",{parentName:"ul"},"Third parties must prefix their extension name and any custom event types or sources they create with the ",(0,s.mdx)("inlineCode",{parentName:"li"},"THIRDPARTY_PREFIX")," followed by their company name."),(0,s.mdx)("li",{parentName:"ul"},"By convention, Adobe will not prefix shared state keys or event data keys.  These names will be in the global namespace. For example: ",(0,s.mdx)("inlineCode",{parentName:"li"},"mid"),"."),(0,s.mdx)("li",{parentName:"ul"},"Adobe internal module names follow the pattern ",(0,s.mdx)("inlineCode",{parentName:"li"},"ADOBE_PREFIX.module.{moduleName}"),"."),(0,s.mdx)("li",{parentName:"ul"},"Adobe event types follow the pattern ",(0,s.mdx)("inlineCode",{parentName:"li"},"ADOBE_PREFIX.eventType.{eventType}"),"."),(0,s.mdx)("li",{parentName:"ul"},"Adobe event sources follow the pattern ",(0,s.mdx)("inlineCode",{parentName:"li"},"ADOBE_PREFIX.eventSource.{eventSource}"),"."),(0,s.mdx)("li",{parentName:"ul"},"Shared state ",(0,s.mdx)("strong",{parentName:"li"},"names")," (not ",(0,s.mdx)("strong",{parentName:"li"},"keys"),") must equal the module name."),(0,s.mdx)("li",{parentName:"ul"},"All constants will be named using ",(0,s.mdx)("inlineCode",{parentName:"li"},"lowerCamelCase"),", and cases are normalized internally to make comparisons case-insensitive. For example, if you use ",(0,s.mdx)("inlineCode",{parentName:"li"},"Com.Adobe.moDule.AnAlytiCS")," it will be internally converted to ",(0,s.mdx)("inlineCode",{parentName:"li"},"com.adobe.module.analytics"),". An exception to this rule is that shared state names that are used in rules are compared in a case-sensitive manner. This means that when registering an extension, the actual case is retained internally, so that rule comparison can succeed.")),(0,s.mdx)(m,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"You should use ASCII characters, even if your company name contains non-ASCII characters."),(0,s.mdx)("h2",{id:"get-started"},"Get started"),(0,s.mdx)("p",null,"For help on building your own extension, please see:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aepsdk-core-ios/blob/main/Documentation/EventHub/BuildingExtensions.md"},"Building iOS Extension")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"https://github.com/adobe/aepsdk-core-android/blob/main/Documentation/EventHub/BuildingExtensions.md"},"Building Android Extension")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/experience-platform/tags/extension-dev/overview.html"},"Building Tags Extension"))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-user-guides-building-mobile-extensions-md-9f02f318720804c62c95.js.map