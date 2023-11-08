"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[302],{39121:function(e,a,n){n.r(a),n.d(a,{default:function(){return x}});var t,l=n(87462),m=n(63366),r=(n(15007),n(64983)),d=n(91515),p=["components"],i=(t="Variant",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),o={},c=d.Z;function x(e){var a=e.components,n=(0,m.Z)(e,p);return(0,r.mdx)(c,(0,l.Z)({},o,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)(i,{platform:"android",api:"extension-version",repeat:"5",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"java"},"Java"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Syntax")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"public static String extensionVersion()\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"final String lifecycleExtensionVersion = Lifecycle.extensionVersion();\n")),(0,r.mdx)(i,{platform:"ios",api:"extension-version",repeat:"10",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"swift"},"Swift"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Syntax")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"static var extensionVersion: String\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"let version = Lifecycle.extensionVersion\n")),(0,r.mdx)("h4",{id:"objective-c"},"Objective-C"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Syntax")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"@objc static var extensionVersion: String\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objectivec"},"NSString *version = [AEPMobileLifecycle extensionVersion];\n")),(0,r.mdx)(i,{platform:"android",api:"lifecycle-start",repeat:"8",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"java-1"},"Java"),(0,r.mdx)("p",null,"This method should be called from the Activity onResume method."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Syntax")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"public static void lifecycleStart(@Nullable final Map<String, String> additionalContextData)\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"MobileCore.lifecycleStart(null);\n")),(0,r.mdx)("p",null,"If you need to collect additional lifecycle data:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'contextData.put("myapp.category", "Game");\nMobileCore.lifecycleStart(additionalContextData);\n')),(0,r.mdx)(i,{platform:"ios",api:"lifecycle-start",repeat:"14",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"swift-1"},"Swift"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Syntax")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"}," static func lifecycleStart(additionalContextData: [String: Any]?)\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"}," MobileCore.lifecycleStart(additionalContextData: nil)\n")),(0,r.mdx)("p",null,"If you need to collect additional lifecycle data:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},' MobileCore.lifecycleStart(additionalContextData: ["contextDataKey": "contextDataVal"])\n')),(0,r.mdx)("h4",{id:"objective-c-1"},"Objective-C"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Syntax")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"}," @objc(lifecycleStart:)\n static func lifecycleStart(additionalContextData: [String: Any]?)\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"}," [AEPMobileCore lifecycleStart:nil];\n")),(0,r.mdx)("p",null,"If you need to collect additional lifecycle data:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"},' [AEPMobileCore lifecycleStart:@{@"contextDataKey": @"contextDataVal"}];\n')),(0,r.mdx)(i,{platform:"android",api:"lifecycle-pause",repeat:"5",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"java-2"},"Java"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Syntax")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"public static void lifecyclePause()\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"MobileCore.lifecyclePause();\n")),(0,r.mdx)(i,{platform:"ios",api:"lifecycle-pause",repeat:"10",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"swift-2"},"Swift"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Syntax")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"}," static func lifecyclePause()\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"}," MobileCore.lifecyclePause()\n")),(0,r.mdx)("h4",{id:"objective-c-2"},"Objective-C"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Syntax")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"}," @objc(lifecyclePause)\n static func lifecyclePause()\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"}," [AEPMobileCore lifecyclePause];\n")),(0,r.mdx)(i,{platform:"android",api:"register-extension",repeat:"5",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"java-3"},"Java"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Syntax")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"public static void registerExtension()\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"Lifecycle.registerExtension();\n\n\nexport const _frontmatter = {}\n")))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-home-base-mobile-core-lifecycle-tabs-api-reference-md-7781c4757ca91a390802.js.map