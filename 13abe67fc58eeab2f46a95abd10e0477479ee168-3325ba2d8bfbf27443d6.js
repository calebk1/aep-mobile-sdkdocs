"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[414],{95668:function(e,n,i){i.r(n),i.d(n,{_frontmatter:function(){return d},default:function(){return f}});var t,o=i(87462),a=i(63366),r=(i(15007),i(64983)),p=i(91515),c=["components"],d={},s=(t="Variant",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),l={_frontmatter:d},m=p.Z;function f(e){var n=e.components,i=(0,a.Z)(e,c);return(0,r.mdx)(m,(0,o.Z)({},l,i,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)(s,{platform:"android",api:"clear-propositions",repeat:"5",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"java"},"Java"),(0,r.mdx)("h4",{id:"syntax"},"Syntax"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"public static void clearCachedPropositions()\n")),(0,r.mdx)("h4",{id:"example"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"Optimize.clearCachedPropositions();\n")),(0,r.mdx)(s,{platform:"ios",api:"clear-propositions",repeat:"10",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"swift"},"Swift"),(0,r.mdx)("h4",{id:"syntax-1"},"Syntax"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"static func clearCachedPropositions()\n")),(0,r.mdx)("h4",{id:"example-1"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"Optimize.clearCachedPropositions()\n")),(0,r.mdx)("h4",{id:"objective-c"},"Objective-C"),(0,r.mdx)("h4",{id:"syntax-2"},"Syntax"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"},"+ (void) clearCachedPropositions;\n")),(0,r.mdx)("h4",{id:"example-2"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"},"[AEPMobileOptimize clearCachedPropositions];\n")),(0,r.mdx)(s,{platform:"android",api:"extension-version",repeat:"5",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"java-1"},"Java"),(0,r.mdx)("h4",{id:"syntax-3"},"Syntax"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"public static String extensionVersion()\n")),(0,r.mdx)("h4",{id:"example-3"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"Optimize.extensionVersion();\n")),(0,r.mdx)(s,{platform:"ios",api:"extension-version",repeat:"10",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"swift-1"},"Swift"),(0,r.mdx)("h4",{id:"syntax-4"},"Syntax"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"static var extensionVersion: String\n")),(0,r.mdx)("h4",{id:"example-4"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"let extensionVersion = Optimize.extensionVersion\n")),(0,r.mdx)("h4",{id:"objective-c-1"},"Objective-C"),(0,r.mdx)("h4",{id:"syntax-5"},"Syntax"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"},"+ (nonnull NSString*) extensionVersion;\n")),(0,r.mdx)("h4",{id:"example-5"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"},"NSString *extensionVersion = [AEPMobileOptimize extensionVersion];\n")),(0,r.mdx)(s,{platform:"android",api:"get-propositions",repeat:"6",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"java-2"},"Java"),(0,r.mdx)("h4",{id:"syntax-6"},"Syntax"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"public static void getPropositions(final List<DecisionScope> decisionScopes, final AdobeCallback<Map<DecisionScope, Proposition>> callback)\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("em",{parentName:"li"},"decisionScopes")," is a list of decision scopes for which propositions are requested."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("em",{parentName:"li"},"callback")," ",(0,r.mdx)("inlineCode",{parentName:"li"},"call")," method is invoked with propositions map of type ",(0,r.mdx)("inlineCode",{parentName:"li"},"Map<DecisionScope, Proposition>"),". If the callback is an instance of ",(0,r.mdx)("a",{parentName:"li",href:"../mobile-core/api-reference.md#adobecallbackwitherror"},"AdobeCallbackWithError"),", and if the operation times out or an error occurs in retrieving propositions, the ",(0,r.mdx)("inlineCode",{parentName:"li"},"fail")," method is invoked with the appropriate ",(0,r.mdx)("a",{parentName:"li",href:"../mobile-core/api-reference.md#adobeerror"},"AdobeError"),".")),(0,r.mdx)("h4",{id:"example-6"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'final DecisionScope decisionScope1 = DecisionScope("xcore:offer-activity:1111111111111111", "xcore:offer-placement:1111111111111111", 2);\nfinal DecisionScope decisionScope2 = new DecisionScope("myScope");\n\nfinal List<DecisionScope> decisionScopes = new ArrayList<>();\ndecisionScopes.add(decisionScope1);\ndecisionScopes.add(decisionScope2);\n\nOptimize.getPropositions(scopes, new AdobeCallbackWithError<Map<DecisionScope, Proposition>>() {\n    @Override\n    public void fail(final AdobeError adobeError) {\n        // handle error\n    }\n\n    @Override\n    public void call(Map<DecisionScope, Proposition> propositionsMap) {\n        if (propositionsMap != null && !propositionsMap.isEmpty()) {\n            // get the propositions for the given decision scopes\n            if (propositionsMap.contains(decisionScope1)) {\n                final Proposition proposition1 = propsMap.get(decisionScope1)\n                // read proposition1 offers\n            }\n            if (propositionsMap.contains(decisionScope2)) {\n                final Proposition proposition2 = propsMap.get(decisionScope2)\n                // read proposition2 offers\n            }\n        }\n    }\n});\n')),(0,r.mdx)(s,{platform:"ios",api:"get-propositions",repeat:"12",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"swift-2"},"Swift"),(0,r.mdx)("h4",{id:"syntax-7"},"Syntax"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"static func getPropositions(for decisionScopes: [DecisionScope], \n                            _ completion: @escaping ([DecisionScope: Proposition]?, Error?) -> Void)\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("em",{parentName:"li"},"decisionScopes")," is an array of decision scopes for which propositions are requested."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("em",{parentName:"li"},"completion")," is invoked with propositions dictionary of type ",(0,r.mdx)("inlineCode",{parentName:"li"},"[DecisionScope: Proposition]"),". An ",(0,r.mdx)("inlineCode",{parentName:"li"},"Error")," is returned if SDK fails to retrieve the propositions.")),(0,r.mdx)("h4",{id:"example-7"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},'let decisionScope1 = DecisionScope(activityId: "xcore:offer-activity:1111111111111111", \n                                   placementId: "xcore:offer-placement:1111111111111111" \n                                   itemCount: 2)\nlet decisionScope2 = DecisionScope(name: "myScope")\n\nOptimize.getPropositions(for: [decisionScope1, decisionScope2]) { propositionsDict, error in\n\n    if let error = error {\n        // handle error\n        return\n    }\n\n    if let propositionsDict = propositionsDict {\n        // get the propositions for the given decision scopes\n\n        if let proposition1 = propositionsDict[decisionScope1] {\n            // read proposition1 offers\n        }\n\n        if let proposition2 = propositionsDict[decisionScope2] {\n            // read proposition2 offers\n        }\n    }\n}\n')),(0,r.mdx)("h4",{id:"objective-c-2"},"Objective-C"),(0,r.mdx)("h4",{id:"syntax-8"},"Syntax"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"},"+ (void) getPropositions: (NSArray<AEPDecisionScope*>* _Nonnull) decisionScopes \n              completion: (void (^ _Nonnull)(NSDictionary<AEPDecisionScope*, AEPProposition*>* _Nullable propositionsDict, NSError* _Nullable error)) completion;\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("em",{parentName:"li"},"decisionScopes")," is an array of decision scopes for which propositions are requested."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("em",{parentName:"li"},"completion")," is invoked with propositions dictionary of type ",(0,r.mdx)("inlineCode",{parentName:"li"},"NSDictionary<AEPDecisionScope*, AEPProposition*>"),". An ",(0,r.mdx)("inlineCode",{parentName:"li"},"NSError")," is returned if SDK fails to retrieve the propositions.")),(0,r.mdx)("h4",{id:"example-8"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"},'AEPDecisionScope* decisionScope1 = [[AEPDecisionScope alloc] initWithActivityId: @"xcore:offer-activity:1111111111111111" \n                                                                   placementId: @"xcore:offer-placement:1111111111111111" \n                                                                     itemCount: 2];\nAEPDecisionScope* decisionScope2 = [[AEPDecisionScope alloc] initWithName: @"myScope"];\n\n[AEPMobileOptimize getPropositions: @[decisionScope1, decisionScope2] \n                        completion: ^(NSDictionary<AEPDecisionScope*, AEPProposition*>* propositionsDict, NSError* error) {\n  if (error != nil) {\n    // handle error   \n    return;\n  }\n\n  AEPProposition* proposition1 = propositionsDict[decisionScope1];\n  // read proposition1 offers\n\n  AEPProposition* proposition2 = propositionsDict[decisionScope2];\n  // read proposition2 offers\n}];\n')),(0,r.mdx)(s,{platform:"android",api:"on-propositions-update",repeat:"6",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"java-3"},"Java"),(0,r.mdx)("h4",{id:"syntax-9"},"Syntax"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"public static void onPropositionsUpdate(final AdobeCallback<Map<DecisionScope, Proposition>> callback)\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("em",{parentName:"li"},"callback")," ",(0,r.mdx)("inlineCode",{parentName:"li"},"call")," method is invoked with propositions map of type ",(0,r.mdx)("inlineCode",{parentName:"li"},"Map<DecisionScope, Proposition>"),". If the callback is an instance of ",(0,r.mdx)("inlineCode",{parentName:"li"},"AdobeCallbackWithError"),", and if the operation times out or an error occurs in retrieving propositions, the ",(0,r.mdx)("inlineCode",{parentName:"li"},"fail")," method is invoked with the appropriate ",(0,r.mdx)("inlineCode",{parentName:"li"},"AdobeError"),".")),(0,r.mdx)("h4",{id:"example-9"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"Optimize.onPropositionsUpdate(new AdobeCallbackWithError<Map<DecisionScope, Proposition>>() {\n    @Override\n    public void fail(final AdobeError adobeError) {\n        // handle error\n    }\n\n    @Override\n    public void call(final Map<DecisionScope, Proposition> propositionsMap) {\n        if (propositionsMap != null && !propositionsMap.isEmpty()) {\n            // handle propositions\n        }\n    }\n});\n")),(0,r.mdx)(s,{platform:"ios",api:"on-propositions-update",repeat:"12",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"swift-3"},"Swift"),(0,r.mdx)("h4",{id:"syntax-10"},"Syntax"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"static func onPropositionsUpdate(perform action: @escaping ([DecisionScope: Proposition]?) -> Void)\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("em",{parentName:"li"},"action")," is invoked with propositions dictionary of type ",(0,r.mdx)("inlineCode",{parentName:"li"},"[DecisionScope: Proposition]"),".")),(0,r.mdx)("h4",{id:"example-10"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"Optimize.onPropositionsUpdate { propositionsDict in\n  if let propositionsDict = propositionsDict {\n    // handle propositions\n  }\n}\n")),(0,r.mdx)("h4",{id:"objective-c-3"},"Objective-C"),(0,r.mdx)("h4",{id:"syntax-11"},"Syntax"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"},"+ (void) onPropositionsUpdate: (void (^ _Nonnull)(NSDictionary<AEPDecisionScope*, AEPProposition*>* _Nullable)) action;\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("em",{parentName:"li"},"action")," is invoked with propositions dictionary of type ",(0,r.mdx)("inlineCode",{parentName:"li"},"NSDictionary<AEPDecisionScope*, AEPProposition*>"),".")),(0,r.mdx)("h4",{id:"example-11"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"},"[AEPMobileOptimize onPropositionsUpdate: ^(NSDictionary<AEPDecisionScope*, AEPProposition*>* propositionsDict) {\n  // handle propositions\n}];\n")),(0,r.mdx)(s,{platform:"android",api:"register-extension",repeat:"5",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"java-4"},"Java"),(0,r.mdx)("h4",{id:"syntax-12"},"Syntax"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"public static void registerExtension()\n")),(0,r.mdx)("h4",{id:"example-12"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"Optimize.registerExtension();\n")),(0,r.mdx)(s,{platform:"android",api:"update-propositions",repeat:"6",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"java-5"},"Java"),(0,r.mdx)("h4",{id:"syntax-13"},"Syntax"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"public static void updatePropositions(final List<DecisionScope> decisionScopes, final Map<String, Object> xdm, final Map<String, Object> data)\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("em",{parentName:"li"},"decisionScopes")," is a list of decision scopes for which propositions need updating."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("em",{parentName:"li"},"xdm")," is a map containing additional xdm formatted data to be attached to the Experience Event."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("em",{parentName:"li"},"data")," is a map containing additional freeform data to be attached to the Experience Event.")),(0,r.mdx)("h4",{id:"example-13"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'final DecisionScope decisionScope1 = DecisionScope("xcore:offer-activity:1111111111111111", "xcore:offer-placement:1111111111111111", 2);\nfinal DecisionScope decisionScope2 = new DecisionScope("myScope");\n\nfinal List<DecisionScope> decisionScopes = new ArrayList<>();\ndecisionScopes.add(decisionScope1);\ndecisionScopes.add(decisionScope2);\n\nOptimize.updatePropositions(decisionScopes, \n                            new HashMap<String, Object>() {\n                                {\n                                    put("xdmKey", "xdmValue");\n                                }\n                            },\n                            new HashMap<String, Object>() {\n                                {\n                                    put("dataKey", "dataValue");\n                                }\n                            });\n')),(0,r.mdx)(s,{platform:"ios",api:"update-propositions",repeat:"12",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"swift-4"},"Swift"),(0,r.mdx)("h4",{id:"syntax-14"},"Syntax"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"static func updatePropositions(for decisionScopes: [DecisionScope], \n                               withXdm xdm: [String: Any]?,\n                               andData data: [String: Any]? = nil)\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("em",{parentName:"li"},"decisionScopes")," is an array of decision scopes for which propositions need updating."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("em",{parentName:"li"},"xdm")," is a dictionary containing additional xdm formatted data to be attached to the Experience Event."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("em",{parentName:"li"},"data")," is a dictionary containing additional freeform data to be attached to the Experience Event.")),(0,r.mdx)("h4",{id:"example-14"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},'let decisionScope1 = DecisionScope(activityId: "xcore:offer-activity:1111111111111111", \n                                   placementId: "xcore:offer-placement:1111111111111111" \n                                   itemCount: 2)\nlet decisionScope2 = DecisionScope(name: "myScope")\n\nOptimize.updatePropositions(for: [decisionScope1, decisionScope2] \n                            withXdm: ["xdmKey": "xdmValue"] \n                            andData: ["dataKey": "dataValue"])\n')),(0,r.mdx)("h4",{id:"objective-c-4"},"Objective-C"),(0,r.mdx)("h4",{id:"syntax-15"},"Syntax"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"},"+ (void) updatePropositions: (NSArray<AEPDecisionScope*>* _Nonnull) decisionScopes \n                    withXdm: (NSDictionary<NSString*, id>* _Nullable) xdm\n                    andData: (NSDictionary<NSString*, id>* _Nullable) data;\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("em",{parentName:"li"},"decisionScopes")," is an array of decision scopes for which propositions need updating."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("em",{parentName:"li"},"xdm")," is a dictionary containing additional xdm formatted data to be attached to the Experience Event."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("em",{parentName:"li"},"data")," is a dictionary containing additional freeform data to be attached to the Experience Event.")),(0,r.mdx)("h4",{id:"example-15"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"},'AEPDecisionScope* decisionScope1 = [[AEPDecisionScope alloc] initWithActivityId: @"xcore:offer-activity:1111111111111111" \n                                                                   placementId: @"xcore:offer-placement:1111111111111111" \n                                                                     itemCount: 2];\nAEPDecisionScope* decisionScope2 = [[AEPDecisionScope alloc] initWithName: @"myScope"]; \n\n[AEPMobileOptimize updatePropositions: @[decisionScope1, decisionScope2] \n                              withXdm: @{@"xdmKey": @"xdmValue"} \n                              andData: @{@"dataKey": @"dataValue"}];\n')),(0,r.mdx)(s,{platform:"android",api:"decisionscope",repeat:"2",mdxType:"Variant"}),(0,r.mdx)("h5",{id:"java-6"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"/**\n * {@code DecisionScope} class represents a scope used to fetch personalized offers from the Experience Edge network.\n */\npublic class DecisionScope {\n\n    /**\n     * Constructor creates a {@code DecisionScope} using the provided {@code name}.\n     *\n     * @param name {@link String} containing scope name.\n     */\n    public DecisionScope(final String name) {...}\n    /**\n     * Constructor creates a {@code DecisionScope} using the provided {@code activityId} and {@code placementId}.\n     *\n     * This constructor assumes the item count for the given scope to be {@value #DEFAULT_ITEM_COUNT}.\n     *\n     * @param activityId {@link String} containing activity identifier for the given scope.\n     * @param placementId {@code String} containing placement identifier for the given scope.\n     */\n    public DecisionScope(final String activityId, final String placementId) {...}\n\n    /**\n     * Constructor creates a {@code DecisionScope} using the provided {@code activityId} and {@code placementId}.\n     *\n     * @param activityId {@link String} containing activity identifier for the given scope.\n     * @param placementId {@code String} containing placement identifier for the given scope.\n     * @param itemCount {@code String} containing number of items to be returned for the given scope.\n     */\n    public DecisionScope(final String activityId, final String placementId, final int itemCount) {...}\n\n    /**\n     * Gets the name for this scope.\n     *\n     * @return {@link String} containing the scope name.\n     */\n    public String getName() {...}\n}\n")),(0,r.mdx)(s,{platform:"ios",api:"decisionscope",repeat:"2",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"swift-5"},"Swift"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},'/// `DecisionScope` class is used to create decision scopes for personalization query requests to Experience Edge Network.\n@objc(AEPDecisionScope)\npublic class DecisionScope: NSObject, Codable {\n    /// Decision scope name\n    @objc public let name: String\n\n    /// Creates a new decision scope using the given scope `name`.\n    ///\n    /// - Parameter name: string representation for the decision scope.\n    @objc\n    public init(name: String) {...}\n\n    /// Creates a new decision scope using the given `activityId`, `placementId` and `itemCount`.\n    ///\n    /// This initializer creates a scope name by Base64 encoding the JSON string created using the provided data.\n    ///\n    /// If `itemCount` == 1, JSON string is\n    ///\n    ///     {"activityId":#activityId,"placementId":#placementId}\n    /// otherwise,\n    ///\n    ///     {"activityId":#activityId,"placementId":#placementId,"itemCount":#itemCount}\n    /// - Parameters:\n    ///   - activityId: unique activity identifier for the decisioning activity.\n    ///   - placementId: unique placement identifier for the decisioning activity offer.\n    ///   - itemCount: number of offers to be returned from the server.\n    @objc\n    public convenience init(activityId: String, placementId: String, itemCount: UInt = 1) {...}\n}\n')),(0,r.mdx)(s,{platform:"android",api:"proposition",repeat:"2",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"java-7"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"public class Proposition {\n\n    /**\n     * Constructor creates a {@code Proposition} using the provided propostion {@code id}, {@code offers}, {@code scope} and {@code scopeDetails}.\n     *\n     * @param id {@link String} containing proposition identifier.\n     * @param offers {@code List<Offer>} containing proposition items.\n     * @param scope {@code String} containing encoded scope.\n     * @param scopeDetails {@code Map<String, Object>} containing scope details.\n     */\n    Proposition(final String id, final List<Offer> offers, final String scope, final Map<String, Object> scopeDetails) {...}\n\n    /**\n     * Gets the {@code Proposition} identifier.\n     *\n     * @return {@link String} containing the {@link Proposition} identifier.\n     */\n    public String getId() {...}\n\n     /**\n     * Gets the {@code Proposition} items.\n     *\n     * @return {@code List<Offer>} containing the {@link Proposition} items.\n     */\n    public List<Offer> getOffers() {...}\n\n    /**\n     * Gets the {@code Proposition} scope.\n     *\n     * @return {@link String} containing the encoded {@link Proposition} scope.\n     */\n    public String getScope() {...}\n\n    /**\n     * Gets the {@code Proposition} scope details.\n     *\n     * @return {@code Map<String, Object>} containing the {@link Proposition} scope details.\n     */\n    public Map<String, Object> getScopeDetails() {...}\n\n    /**\n     * Generates a map containing XDM formatted data for {@code Experience Event - Proposition Reference} field group from this {@code Proposition}.\n     *\n     * The returned XDM data does not contain {@code eventType} for the Experience Event.\n     *\n     * @return {@code Map<String, Object>} containing the XDM data for the proposition reference.\n     */\n    public Map<String, Object> generateReferenceXdm() {...}\n}\n")),(0,r.mdx)(s,{platform:"ios",api:"proposition",repeat:"4",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"swift-6"},"Swift"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"/// `Proposition` class\n@objc(AEPProposition)\npublic class Proposition: NSObject, Codable {\n\n    /// Unique proposition identifier\n    @objc public let id: String\n\n    /// Array containing proposition decision options\n    @objc public lazy var offers: [Offer] = {...}()\n\n    /// Decision scope string\n    @objc public let scope: String\n\n    /// Scope details dictionary\n    @objc public var scopeDetails: [String: Any]\n}\n")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"Proposition")," class extension provides a method for generating XDM data for Proposition Reference field group which can be used for proposition tracking."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"/// `Proposition` extension\n@objc\npublic extension Proposition {\n    /// Creates a dictionary containing XDM formatted data for `Experience Event - Proposition Reference` field group from the given proposition.\n    ///\n    /// The Edge `sendEvent(experienceEvent:_:)` API can be used to dispatch this data in an Experience Event along with any additional XDM, free-form data, or override dataset identifier.\n    ///\n    /// - Note: The returned XDM data does not contain an `eventType` for the Experience Event.\n    /// - Returns A dictionary containing XDM data for the propositon reference.\n    func generateReferenceXdm() -> [String: Any] {...}\n}\n")),(0,r.mdx)(s,{platform:"android",api:"offer",repeat:"2",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"java-8"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"public class Offer {\n\n    /**\n     * {@code Offer} Builder.\n     */\n    public static class Builder {\n        \n        /**\n        * Builder constructor with required {@code Offer} attributes as parameters.\n        *\n        * It sets default values for remaining {@link Offer} attributes.\n        *\n        * @param id required {@link String} containing {@code Offer} identifier.\n        * @param type required {@link OfferType} indicating the {@code Offer} type.\n        * @param content required {@code String} containing the {@code Offer} content.\n        */\n        public Builder(final String id, final OfferType type, final String content) {...}\n\n        /**\n        * Sets the etag for this {@code Offer}.\n        *\n        * @param etag {@link String} containing {@link Offer} etag.\n        * @return this Offer {@link Builder}\n        * @throws UnsupportedOperationException if this method is invoked after {@link Builder#build()}.\n        */\n        public Builder setEtag(final String etag) {...}\n\n        /**\n         * Sets the score for this {@code Offer}.\n         *\n         * @param score {@code int} containing {@link Offer} score.\n         * @return this Offer {@link Builder}\n         * @throws UnsupportedOperationException if this method is invoked after {@link Builder#build()}.\n         */\n        public Builder setScore(final int score) {...}\n\n        /**\n        * Sets the schema for this {@code Offer}.\n        *\n        * @param schema {@link String} containing {@link Offer} schema.\n        * @return this Offer {@link Builder}\n        * @throws UnsupportedOperationException if this method is invoked after {@link Builder#build()}.\n        */\n        public Builder setSchema(final String schema) {...} \n\n        /**\n         * Sets the metadata for this {@code Offer}.\n         *\n         * @param meta {@code Map<String, Object>} containing {@link Offer} metadata.\n         * @return this Offer {@link Builder}\n         * @throws UnsupportedOperationException if this method is invoked after {@link Builder#build()}.\n         */\n        public Builder setMeta(final Map<String, Object> meta) {...}\n\n        /**\n        * Sets the language for this {@code Offer}.\n        *\n        * @param language {@code List<String>} containing supported {@link Offer} language.\n        * @return this Offer {@link Builder}\n        * @throws UnsupportedOperationException if this method is invoked after {@link Builder#build()}.\n        */\n        public Builder setLanguage(final List<String> language) {...}\n\n        /**\n        * Sets the characteristics for this {@code Offer}.\n        *\n        * @param characteristics {@code Map<String, String>} containing {@link Offer} characteristics.\n        * @return this Offer {@link Builder}\n        * @throws UnsupportedOperationException if this method is invoked after {@link Builder#build()}.\n        */\n        public Builder setCharacteristics(final Map<String, String> characteristics) {...}\n\n        /**\n        * Builds and returns the {@code Offer} object.\n        *\n        * @return {@link Offer} object or null.\n        * @throws UnsupportedOperationException if this method is invoked after {@link Builder#build()}.\n        */\n        public Offer build() {...}\n    }\n\n    /**\n     * Gets the {@code Offer} identifier.\n     *\n     * @return {@link String} containing the {@link Offer} identifier.\n     */\n    public String getId() {...}\n\n    /**\n     * Gets the {@code Offer} etag.\n     *\n     * @return {@link String} containing the {@link Offer} etag.\n     */\n    public String getEtag() {...}\n\n    /**\n     * Gets the {@code Offer} score.\n     *\n     * @return {@code int} containing the {@link Offer} score.\n     */\n    public int getScore() {...}\n\n    /**\n     * Gets the {@code Offer} schema.\n     *\n     * @return {@link String} containing the {@link Offer} schema.\n     */\n    public String getSchema() {...}\n\n    /**\n     * Gets the {@code Offer} metadata.\n     *\n     * @return {@code Map<String, Object>} containing the {@link Offer} metadata.\n     */\n    public Map<String, Object> getMeta() {...}\n\n    /**\n     * Gets the {@code Offer} type.\n     *\n     * @return {@link OfferType} indicating the {@link Offer} type.\n     */\n    public OfferType getType() {...}\n\n    /**\n     * Gets the {@code Offer} language.\n     *\n     * @return {@code List<String>} containing the supported {@link Offer} language.\n     */\n    public List<String> getLanguage() {...}\n\n    /**\n     * Gets the {@code Offer} content.\n     *\n     * @return {@link String} containing the {@link Offer} content.\n     */\n    public String getContent() {...}\n\n    /**\n     * Gets the {@code Offer} characteristics.\n     *\n     * @return {@code Map<String, String>} containing the {@link Offer} characteristics.\n     */\n    public Map<String, String> getCharacteristics() {...}\n\n    /**\n     * Gets the containing {@code Proposition} for this {@code Offer}.\n     *\n     * @return {@link Proposition} instance.\n     */\n    public Proposition getProposition() {...}\n\n    /**\n     * Dispatches an event for the Edge network extension to send an Experience Event to the Edge network with the display interaction data for the\n     * given {@code Proposition} offer.\n     */\n    public void displayed() {...}\n\n    /**\n     * Dispatches an event for the Edge network extension to send an Experience Event to the Edge network with the tap interaction data for the\n     * given {@code Proposition} offer.\n     */\n    public void tapped() {...}\n\n    /**\n     * Generates a map containing XDM formatted data for {@code Experience Event - Proposition Interactions} field group from this {@code Proposition} item.\n     *\n     * The returned XDM data does contain the {@code eventType} for the Experience Event with value {@code decisioning.propositionDisplay}.\n     *\n     * Note: The Edge sendEvent API can be used to dispatch this data in an Experience Event along with any additional XDM, free-form data, and override\n     * dataset identifier.\n     *\n     * @return {@code Map<String, Object>} containing the XDM data for the proposition interaction.\n     */\n    public Map<String, Object> generateDisplayInteractionXdm() {...}\n\n    /**\n     * Generates a map containing XDM formatted data for {@code Experience Event - Proposition Interactions} field group from this {@code Proposition} offer.\n     *\n     * The returned XDM data contains the {@code eventType} for the Experience Event with value {@code decisioning.propositionInteract}.\n     *\n     * Note: The Edge sendEvent API can be used to dispatch this data in an Experience Event along with any additional XDM, free-form data, and override\n     * dataset identifier.\n     *\n     * @return {@code Map<String, Object>} containing the XDM data for the proposition interaction.\n     */\n    public Map<String, Object> generateTapInteractionXdm() {...}\n\n}\n")),(0,r.mdx)(s,{platform:"ios",api:"offer",repeat:"4",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"swift-7"},"Swift"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"/// `Offer` class\n@objc(AEPOffer)\npublic class Offer: NSObject, Codable {\n    /// Unique Offer identifier\n    @objc public let id: String\n\n    /// Offer revision detail at the time of the request\n    @objc public let etag: String\n\n    /// Offer priority score\n    @objc public let score: Int\n\n    /// Offer schema string\n    @objc public let schema: String\n\n    /// Offer metadata\n    @objc public let meta: [String: Any]?\n    \n    /// Offer type as represented in enum `OfferType`\n    @objc public let type: OfferType\n\n    /// Optional Offer language array\n    @objc public let language: [String]?\n\n    /// Offer content string\n    @objc public let content: String\n\n    /// Optional Offer characteristics dictionary\n    @objc public let characteristics: [String: String]?\n}\n")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"Offer")," class extension provides methods for generating XDM data for Proposition Interactions field group which can be used for proposition tracking. It also contains direct methods for tracking proposition display and tap interactions."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"/// `Offer` extension\n@objc\npublic extension Offer {\n    /// Creates a dictionary containing XDM formatted data for `Experience Event - Proposition Interactions` field group from the given proposition option.\n    ///\n    /// The Edge `sendEvent(experienceEvent:_:)` API can be used to dispatch this data in an Experience Event along with any additional XDM, free-form data, or override dataset identifier.\n    /// If the proposition reference within the option is released and no longer valid, the method returns `nil`.\n    ///\n    /// - Note: The returned XDM data also contains the `eventType` for the Experience Event with value `decisioning.propositionDisplay`.\n    /// - Returns A dictionary containing XDM data for the propositon interactions.\n    func generateDisplayInteractionXdm() -> [String: Any]? {...}\n\n    /// Creates a dictionary containing XDM formatted data for `Experience Event - Proposition Interactions` field group from the given proposition option.\n    ///\n    /// The Edge `sendEvent(experienceEvent:_:)` API can be used to dispatch this data in an Experience Event along with any additional XDM, free-form data, or override dataset identifier.\n    /// If the proposition reference within the option is released and no longer valid, the method returns `nil`.\n    ///\n    /// - Note: The returned XDM data also contains the `eventType` for the Experience Event with value `decisioning.propositionInteract`.\n    /// - Returns A dictionary containing XDM data for the propositon interactions.\n    func generateTapInteractionXdm() -> [String: Any]? {...}\n\n    /// Dispatches an event for the Edge extension to send an Experience Event to the Edge network with the display interaction data for the given proposition item.\n    func displayed() {...}\n\n    /// Dispatches an event for the Edge extension to send an Experience Event to the Edge network with the tap interaction data for the given proposition item.\n    func tapped() {...}\n}\n")),(0,r.mdx)(s,{platform:"android",api:"offertype",repeat:"2",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"java-9"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"public enum OfferType {\n    UNKNOWN, JSON, TEXT, HTML, IMAGE;\n\n    @Override\n    public String toString() {...}\n\n    /**\n     * Returns the {@code OfferType} for the given {@code format}.\n     *\n     * @param format {@link String} containing the {@link Offer} format.\n     * @return {@link OfferType} indicating the {@code Offer} format.\n     */\n    public static OfferType from(final String format) {...}\n}\n")),(0,r.mdx)(s,{platform:"ios",api:"offertype",repeat:"2",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"swift-8"},"Swift"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"/// Enum representing the supported Offer Types.\npublic enum OfferType: Int, Codable {\n\n    /// Unknown Offer type\n    case unknown = 0\n\n    /// JSON Offer\n    case json = 1\n\n    /// Plain text Offer\n    case text = 2\n\n    /// Html Offer\n    case html = 3\n\n    /// Image Offer\n    case image = 4\n\n    /// Initializes OfferType with the provided format string.\n    /// - Parameter format: Offer format string\n    init(from format: String) {...}\n}\n")))}f.isMDXComponent=!0}}]);
//# sourceMappingURL=13abe67fc58eeab2f46a95abd10e0477479ee168-3325ba2d8bfbf27443d6.js.map