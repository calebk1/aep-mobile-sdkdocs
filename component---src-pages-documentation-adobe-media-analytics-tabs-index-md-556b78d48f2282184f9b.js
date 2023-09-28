"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2792],{87461:function(e,n,i){i.r(n),i.d(n,{_frontmatter:function(){return l},default:function(){return x}});var a=i(87462),t=i(63366),o=(i(15007),i(64983)),r=i(91515),d=["components"],l={},m=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",n)}},p=m("Variant"),s=m("InlineNestedAlert"),c={_frontmatter:l},u=r.Z;function x(e){var n=e.components,i=(0,t.Z)(e,d);return(0,o.mdx)(u,(0,a.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)(p,{platform:"android",task:"add",repeat:"8",mdxType:"Variant"}),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Add the Media extension and its dependencies to your project using the app's Gradle file.")),(0,o.mdx)(s,{variant:"warning",header:"false",iconPosition:"left",mdxType:"InlineNestedAlert"},(0,o.mdx)("p",null,"Using dynamic dependency versions is ",(0,o.mdx)("strong",{parentName:"p"},"not")," recommended for production apps. Please read the ",(0,o.mdx)("a",{parentName:"p",href:"../resources/manage-gradle-dependencies.md"},"managing Gradle dependencies guide")," for more information.")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"implementation platform('com.adobe.marketing.mobile:sdk-bom:2.+')\nimplementation 'com.adobe.marketing.mobile:core'\nimplementation 'com.adobe.marketing.mobile:identity'\nimplementation 'com.adobe.marketing.mobile:analytics'\nimplementation 'com.adobe.marketing.mobile:media'\n")),(0,o.mdx)("ol",{start:2},(0,o.mdx)("li",{parentName:"ol"},"Import the libraries in your application's main activity.")),(0,o.mdx)("h4",{id:"java"},"Java"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"import com.adobe.marketing.mobile.MobileCore;\nimport com.adobe.marketing.mobile.Identity;\nimport com.adobe.marketing.mobile.Analytics;\nimport com.adobe.marketing.mobile.Media;\n")),(0,o.mdx)("h4",{id:"kotlin"},"Kotlin"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin"},"import com.adobe.marketing.mobile.MobileCore\nimport com.adobe.marketing.mobile.Identity\nimport com.adobe.marketing.mobile.Analytics\nimport com.adobe.marketing.mobile.Media\n")),(0,o.mdx)(p,{platform:"ios",task:"add",repeat:"7",mdxType:"Variant"}),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"To add the Media library and its dependencies to your project, add the following pods to your ",(0,o.mdx)("inlineCode",{parentName:"li"},"Podfile"),":")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-ruby"},"pod 'AEPCore'\npod 'AEPAnalytics'\npod 'AEPMedia'\n")),(0,o.mdx)("ol",{start:2},(0,o.mdx)("li",{parentName:"ol"},"In Xcode project, import the Media extension:")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Swift")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},"import AEPMedia\nimport AEPCore\nimport AEPIdentity\nimport AEPAnalytics\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Objective-C")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objectivec"},"@import AEPCore;\n@import AEPMedia;\n@import AEPAnalytics;\n@import AEPIdentity;\n")),(0,o.mdx)(p,{platform:"android",task:"register",repeat:"5",mdxType:"Variant"}),(0,o.mdx)("p",null,"To register Media with Mobile Core, import the Media library and register it:"),(0,o.mdx)("h4",{id:"java-1"},"Java"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},'public class MainApp extends Application {\n     private final String ENVIRONMENT_FILE_ID = "YOUR_APP_ENVIRONMENT_ID";\n\n     @Override\n     public void onCreate() {\n         super.onCreate();\n\n         MobileCore.setApplication(this);\n         MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID);\n\n         List<Class<? extends Extension>> extensions = Arrays.asList(\n                 Media.EXTENSION, Analytics.EXTENSION, Identity.EXTENSION);\n         MobileCore.registerExtensions(extensions, o -> {\n             Log.d(LOG_TAG, "AEP Mobile SDK is initialized");\n         });\n     }\n }\n')),(0,o.mdx)("h4",{id:"kotlin-1"},"Kotlin"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin"},'class MyApp : Application() {\n    val ENVIRONMENT_FILE_ID = "YOUR_APP_ENVIRONMENT_ID"\n\n    override fun onCreate() {\n        super.onCreate()\n        MobileCore.setApplication(this)\n        MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID)\n\n        val extensions = listOf(Media.EXTENSION, Analytics.EXTENSION, Identity.EXTENSION)\n        MobileCore.registerExtensions(extensions) {\n            Log.d(LOG_TAG, "AEP Mobile SDK is initialized")\n        }\n    }\n}\n')),(0,o.mdx)(p,{platform:"ios",task:"register",repeat:"6",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"swift"},"Swift"),(0,o.mdx)("p",null,"In your app's ",(0,o.mdx)("inlineCode",{parentName:"p"},"_:didFinishLaunchingWithOptions")," function, register the Audience Manager extension with the Mobile Core:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},'func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n   MobileCore.registerExtensions([Media.self, Analytics.self, Identity.self], {\n   MobileCore.configureWith(appId: "yourAppId")\n })\n ...\n}\n')),(0,o.mdx)("h4",{id:"objective-c"},"Objective-C"),(0,o.mdx)("p",null,"In your app's ",(0,o.mdx)("inlineCode",{parentName:"p"},"application:didFinishLaunchingWithOptions"),", register Media with Mobile Core:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objectivec"},'- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    [AEPMobileCore registerExtensions:@[AEPMobileMedia.class, AEPMobileAnalytics.class, AEPMobileIdentity.class] completion:^{\n    [AEPMobileCore configureWithAppId: @"yourAppId"];\n  }];\n  ...\n}\n')))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-adobe-media-analytics-tabs-index-md-556b78d48f2282184f9b.js.map