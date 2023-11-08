"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2826,6432],{19974:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return g}});var a=t(87462),r=t(63366),o=(t(15007),t(64983)),i=t(91515),l=t(3943),s=["components"],d={},m=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",n)}},p=m("TabsBlock"),x=m("InlineAlert"),u={_frontmatter:d},c=i.Z;function g(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.mdx)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"signal-api-reference"},"Signal API reference"),(0,o.mdx)("h2",{id:"extensionversion"},"extensionVersion"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"extensionVersion()")," API returns the version of the Signal extension that is registered with the Mobile Core extension."),(0,o.mdx)("p",null,"To get the version of the Signal extension, use the following code sample:"),(0,o.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(l.default,{query:"platform=android&api=extension-version",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(l.default,{query:"platform=ios&api=extension-version",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"registerextension"},"registerExtension"),(0,o.mdx)(x,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Deprecated as of 2.0.0. Please use the ",(0,o.mdx)("a",{parentName:"p",href:"../api-reference.md#registerextensions"},"MobileCore.registerExtensions")," API instead."),(0,o.mdx)("p",null,"Registers the Signal extension with the Mobile Core."),(0,o.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(l.default,{query:"platform=android&api=register-extension",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"collectpii"},"collectPii"),(0,o.mdx)("p",null,"The Signal extension can be used to handle ",(0,o.mdx)("inlineCode",{parentName:"p"},"collectPii")," rules. For more information, see the ",(0,o.mdx)("a",{parentName:"p",href:"../api-reference.md#collectpii"},"collectPii")," API."))}g.isMDXComponent=!0},3943:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return u}});var a,r=t(87462),o=t(63366),i=(t(15007),t(64983)),l=t(91515),s=["components"],d={},m=(a="Variant",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),p={_frontmatter:d},x=l.Z;function u(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.mdx)(x,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)(m,{platform:"android",api:"extension-version",repeat:"5",mdxType:"Variant"}),(0,i.mdx)("h4",{id:"java"},"Java"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Syntax")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"@NonNull\npublic static String extensionVersion();\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Example")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"String signalExtensionVersion = Signal.extensionVersion();\n")),(0,i.mdx)(m,{platform:"ios",api:"extension-version",repeat:"7",mdxType:"Variant"}),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Syntax")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-swift"},"public static let extensionVersion\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Examples")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Swift")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-swift"},"let version = Signal.extensionVersion\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Objective-C")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-objectivec"},"NSString *version = [AEPMobileSignal extensionVersion];\n")),(0,i.mdx)(m,{platform:"android",api:"register-extension",repeat:"5",mdxType:"Variant"}),(0,i.mdx)("h4",{id:"java-1"},"Java"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Syntax")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"public static void registerExtension()\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Example")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"Signal.registerExtension();\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-home-base-mobile-core-signal-api-reference-md-02027bad16888adcd191.js.map