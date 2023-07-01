"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4429],{4299:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return m}});var i=a(87462),n=a(63366),r=(a(15007),a(64983)),o=a(91515),s=["components"],d={},l={_frontmatter:d},p=o.Z;function m(e){var t=e.components,a=(0,n.Z)(e,s);return(0,r.mdx)(p,(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"frequently-asked-questions"},"Frequently asked questions"),(0,r.mdx)("h2",{id:"how-can-i-set-up-configure-or-troubleshoot-processing-rules"},"How can I set up, configure, or troubleshoot processing rules?"),(0,r.mdx)("p",null,"To learn about processing rules please read the ",(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/analytics/admin/admin-tools/processing-rules/processing-rules-tips.html"},"processing rules tips and tricks guide"),"."),(0,r.mdx)("h2",{id:"why-are-my-analytics-identifiers-aid--mid-changing"},"Why are my Analytics identifiers (AID / MID) changing?"),(0,r.mdx)("p",null,"If you see SDK identifiers unexpectedly change, try the following fixes to address the issue. If none of these work, contact Customer Care at your earliest convenience for resolution:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Ensure that no other versions of the SDK are running - for instance, if you are upgrading SDK versions from 4x to Experience Platform Mobile SDKs - remove all references to 4x SDKs. For 4x SDKs you may look (and remove) for the adobeMobileLibrary/AdobeMobile/AdobeMobileSDK dependency or lib in the project or if the verbose logs indicate ADBMobile prefixed entries."),(0,r.mdx)("li",{parentName:"ul"},"Examine app code for logic clearing app user defaults and/or shared preferences. SDK identifiers are stored in app user defaults and shared preferences and may not be cleared for proper functioning of the SDK."),(0,r.mdx)("li",{parentName:"ul"},"APIs such as setPrivacyStatus / resetIdentities clear SDK-stored identifiers - ensure that you are appropriately calling these APIs to avoid resetting SDK identifiers.")),(0,r.mdx)("h2",{id:"why-are-crashes-inflated-in-the-analytics-report"},"Why are Crashes inflated in the Analytics report"),(0,r.mdx)("p",null,"The metric ",(0,r.mdx)("inlineCode",{parentName:"p"},"Crashes")," is computed based on the Lifecycle start and pause API calls implemented in your mobile application. How can you verify if the implementation is correct:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Ensure that the Lifecycle extension is registered."),(0,r.mdx)("li",{parentName:"ul"},"Verify that both MobileCore APIs ",(0,r.mdx)("inlineCode",{parentName:"li"},"lifecycleStart")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"lifecyclePause")," are implemented in the application based on the recommended settings for each platform. See the ",(0,r.mdx)("a",{parentName:"li",href:"../mobile-core/lifecycle/index.md#register-lifecycle-with-mobile-core-and-add-appropriate-startpause-calls"},"guide for registering Lifecycle with MobileCore and adding appropriate start/pause calls"),"."),(0,r.mdx)("li",{parentName:"ul"},"For more details, see also ",(0,r.mdx)("a",{parentName:"li",href:"../mobile-core/lifecycle/ios.md#tracking-app-crashes-in-ios"},"Tracking app crashes in iOS")," and ",(0,r.mdx)("a",{parentName:"li",href:"../mobile-core/lifecycle/android.md#tracking-app-crashes-in-android"},"Android"),".")),(0,r.mdx)("h2",{id:"how-are-mobile-visits-different-from-launches"},"How are mobile visits different from launches?"),(0,r.mdx)("p",null,"A launch is measured by the SDK when a user opens the app for the first time or returns to the app after having been out of the app for longer than the specified timeout value. The typical timeout is 5 minutes (300 seconds) in the ",(0,r.mdx)("a",{parentName:"p",href:"../mobile-core/lifecycle/index.md#device-information"},"lifecycleTimeout")," configuration setting."),(0,r.mdx)("p",null,"A visit is a server-side calculation by Adobe Analytics and is based on the first and last data hits that are sent by the SDK without exceeding a visit timeout. Typically, session timeouts are set at 30 minutes for a report suite. Although visits come from traditional web analytics, these hits still provide valuable insights into how users enter and exit from your app."),(0,r.mdx)("h2",{id:"can-i-send-my-analytics-data-to-multiple-report-suites"},"Can I send my analytics data to multiple report suites?"),(0,r.mdx)("p",null,"Yes. To capture data in multiple report suites, please read the ",(0,r.mdx)("a",{parentName:"p",href:"./index.md#report-suites"},"report suites guide"),"."),(0,r.mdx)("h2",{id:"i-dont-see-data-in-my-adobe-analytics-report-suite---what-can-i-do-a-idi-dont-see-data-in-my-adobe-analytics-report-suite-what-can-i-doa"},"I don't see data in my Adobe Analytics report suite - what can I do? ",(0,r.mdx)("a",{id:"i-dont-see-data-in-my-adobe-analytics-report-suite-what-can-i-do"})),(0,r.mdx)("p",null,"If you have followed the documentation and are unable to see reporting data in your Adobe Analytics dashboard, please consider the following next steps:"),(0,r.mdx)("h3",{id:"verify-that-the-analytics-extension-is-registered"},"Verify that the Analytics extension is registered"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"./index.md"},"Analytics extension")," and its dependent ",(0,r.mdx)("a",{parentName:"p",href:"../mobile-core/identity/index.md"},"Identity extension")," should be registered and configured correctly for the SDK to start processing trackAction/trackState requests."),(0,r.mdx)("h3",{id:"verify-that-network-requests-are-sent-to-adobe-analytics-a-idverify-that-network-requests-are-sent-to-adobe-analyticsa"},"Verify that network requests are sent to Adobe Analytics ",(0,r.mdx)("a",{id:"verify-that-network-requests-are-sent-to-adobe-analytics"})),(0,r.mdx)("p",null,"You can use ",(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/experience-platform/assurance/home.html"},"Adobe Experience Platform Assurance")," to verify events are being sent to Adobe Analytics."),(0,r.mdx)("h3",{id:"ensure-appropriate-timestamp-configuration-a-idensure-appropriate-time-stamp-configurationa"},"Ensure appropriate timestamp configuration ",(0,r.mdx)("a",{id:"ensure-appropriate-time-stamp-configuration"})),(0,r.mdx)("p",null,"Ensure that your SDK timestamp configuration is aligned with the report suite's timestamp settings. That is, ",(0,r.mdx)("inlineCode",{parentName:"p"},"analytics.offlineEnabled")," in the SDK configuration block for the tags mobile property is aligned with the setting of Timestamp Configuration in your report suite. You may find Timestamp at Analytics ",">"," Admin ",">"," Report Suites ",">"," General ",">"," Timestamp Configuration."),(0,r.mdx)("p",null,"The following settings explain how settings between the SDK and your report suite should be aligned:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"analytics.offlineEnabled = true")," ties to timestamps required or optional"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"analytics.offlineEnabled = false")," ties to timestamps not allowed or optional")),(0,r.mdx)("h3",{id:"verify-current-privacy-status"},"Verify current privacy status"),(0,r.mdx)("p",null,"In the mobile property (tag) in the Data Collection UI, select the property from the list, then select ",(0,r.mdx)("strong",{parentName:"p"},"Configure"),'. If the "Privacy" setting is "Opted Out" the request is dropped by the SDK. If the setting is "Unknown" the request is queued on the device until the status changes to "Opted In" or "Opted Out". If these settings are managed in your app, navigate to the screen where the Privacy settings are updated with the SDK.'),(0,r.mdx)("h3",{id:"contact-adobe-customer-care-a-idcontact-adobe-customer-carea"},"Contact Adobe Customer Care ",(0,r.mdx)("a",{id:"contact-adobe-customer-care"})),(0,r.mdx)("p",null,"If you are unable to resolve your concerns through resources provided here, please contact ",(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/?support-solution=General#support"},"Adobe Experience Cloud customer care")," for immediate assistance."),(0,r.mdx)("h2",{id:"how-do-i-send-data-to-adobe-analytics-in-react-native-and-flutter"},"How do I send data to Adobe Analytics in React Native and Flutter?"),(0,r.mdx)("p",null,"In the latest SDK version (AEP-prefixed) for React Native and Flutter, you can send data to Analytics via the Edge Network using the Edge Network extension and ",(0,r.mdx)("inlineCode",{parentName:"p"},"sendEvent")," API. If you want a drop-in migration solution for an existing ",(0,r.mdx)("inlineCode",{parentName:"p"},"trackAction")," / ",(0,r.mdx)("inlineCode",{parentName:"p"},"trackState")," implementation, you can do this with the help of the Edge Bridge extension. You can learn more about these options in the ",(0,r.mdx)("a",{parentName:"p",href:"../adobe-analytics/migrate-to-edge-network.md"},"migration guide"),"."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-adobe-analytics-faq-md-8ee06e77134e07b0decf.js.map