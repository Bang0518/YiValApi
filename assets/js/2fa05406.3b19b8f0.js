"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[615],{1806:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=i(5893),t=i(1151);const a={sidebar_position:12},o="Variation Generator",s={id:"API-Reference/variation-generator",title:"Variation Generator",description:"BaseVariationImprover",source:"@site/docs/API-Reference/variation-generator.md",sourceDirName:"API-Reference",slug:"/API-Reference/variation-generator",permalink:"/YiValApi/docs/API-Reference/variation-generator",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API-Reference/variation-generator.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Finetune",permalink:"/YiValApi/docs/API-Reference/finetune"},next:{title:"Combination Improver",permalink:"/YiValApi/docs/API-Reference/combination-improver"}},l={},d=[{value:"<code>BaseVariationImprover</code>",id:"basevariationimprover",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Class Definition",id:"class-definition",level:3},{value:"Description",id:"description",level:4},{value:"Attributes",id:"attributes",level:4},{value:"Example",id:"example",level:3},{value:"<code>OpenAIPromptBasedVariationGenerator</code>",id:"openaipromptbasedvariationgenerator",level:2},{value:"Introduction",id:"introduction-1",level:3},{value:"Class Definition",id:"class-definition-1",level:3},{value:"Description",id:"description-1",level:4},{value:"Attributes",id:"attributes-1",level:4},{value:"Example",id:"example-1",level:3},{value:"Using <code>OpenAIPromptBasedVariationGenerator</code>",id:"using-openaipromptbasedvariationgenerator",level:4},{value:"Using the <code>OpenAIPromptBasedCombinationImprover</code> in YiVal config",id:"using-the-openaipromptbasedcombinationimprover-in-yival-config",level:4},{value:"Custom Variation Generator Subclass Guide: <code>generate_variations</code>",id:"custom-variation-generator-subclass-guide-generate_variations",level:2},{value:"Understand the Base",id:"understand-the-base",level:3},{value:"Example: SimpleVariationGenerator",id:"example-simplevariationgenerator",level:6},{value:"Define the Configuration Class",id:"define-the-configuration-class",level:3},{value:"Implement the Variation Generator",id:"implement-the-variation-generator",level:3},{value:"Using the Custom Variation Generator in Configuration",id:"using-the-custom-variation-generator-in-configuration",level:6}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h6:"h6",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"variation-generator",children:"Variation Generator"}),"\n",(0,r.jsx)(n.h2,{id:"basevariationimprover",children:(0,r.jsx)(n.code,{children:"BaseVariationImprover"})}),"\n",(0,r.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"This module defines the base class for combination improvers. Combination improvers are responsible for improving the combination of experiments based on their experiment results."}),"\n",(0,r.jsx)(n.h3,{id:"class-definition",children:"Class Definition"}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.h4,{id:"attributes",children:"Attributes"}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.h2,{id:"openaipromptbasedvariationgenerator",children:(0,r.jsx)(n.code,{children:"OpenAIPromptBasedVariationGenerator"})}),"\n",(0,r.jsx)(n.h3,{id:"introduction-1",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"A variation generator that uses the GPT-4 model to generate variations based on the provided prompt configurations."}),"\n",(0,r.jsx)(n.h3,{id:"class-definition-1",children:"Class Definition"}),"\n",(0,r.jsx)(n.h4,{id:"description-1",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["A data class defining the configuration for the ",(0,r.jsx)(n.code,{children:"OpenAIPromptBasedVariationGenerator"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"attributes-1",children:"Attributes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"model_name(str)"})}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The name of the model to be used. The default value is ",(0,r.jsx)(n.code,{children:'"gpt-4"'}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"prompt(Union[str, List[Dict[str, str]]])"})}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The prompt or set of prompts that guide the generation of variations."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"diversify(bool)"})}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Whether to ensure diversification in the generated responses."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"variables(Optional[List[str]])"})}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Specific variables that should be included in the generated variations."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"max_tokens(int)"})}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The maximum number of tokens for the generated response. The default value is ",(0,r.jsx)(n.code,{children:"7000"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,r.jsxs)(n.h4,{id:"using-openaipromptbasedvariationgenerator",children:["Using ",(0,r.jsx)(n.code,{children:"OpenAIPromptBasedVariationGenerator"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Python",children:'    generator = OpenAIPromptBasedVariationGenerator(\r\n        OpenAIPromptBasedVariationGeneratorConfig(\r\n            prompt=[{\r\n                "role": "system",\r\n                "content": SYSTEM_PRMPOT\r\n            }, {\r\n                "role":\r\n                "user",\r\n                "content":\r\n                "Here are some test cases: AI, Weapon\\n\\n Here is the description of the use-case: Given \\{area\\}, write a tech startup headline"\r\n            }],\r\n            number_of_variations=2,\r\n            output_path="test_variation.pkl",\r\n            diversify=False,\r\n            variables=["area"]\r\n        )\r\n    )\r\n    res = generator.generate_variations()\r\n    for d in res:\r\n        print(d)\n'})}),"\n",(0,r.jsxs)(n.h4,{id:"using-the-openaipromptbasedcombinationimprover-in-yival-config",children:["Using the ",(0,r.jsx)(n.code,{children:"OpenAIPromptBasedCombinationImprover"})," in YiVal config"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Python",children:"variations:\r\n  - name: task\r\n    generator_name: openai_prompt_based_variation_generator\r\n    generator_config:\r\n      diversify: false\r\n      max_tokens: 7000\r\n      number_of_variations: 2\r\n      model_name: gpt-4\r\n      output_path: demo_generated_prompt.pkl\r\n      prompt:\r\n        - content: |-\r\n\r\n            Your mission is to craft prompts tailored for GPT-4. You'll be provided\r\n            with a use-case description and some sample test cases.\r\n\r\n            These prompts aim to guide GPT-4 in executing freeform tasks, whether that's\r\n            penning a captivating headline, drafting an introduction, or tackling a mathematical\r\n            challenge.\r\n\r\n            In your designed prompt, delineate the AI's role using lucid English. Highlight\r\n            its perceptual field and the boundaries of its responses. Encourage inventive\r\n            and optimized prompts to elicit top-tier results from the AI. Remember, GPT-4\r\n            is self-aware of its AI nature; no need to reiterate that.\r\n\r\n            The efficacy of your prompt determines your evaluation. Stay authentic! Avoid\r\n            sneaking in specifics or examples from the test cases into your prompt. Such\r\n            maneuvers will lead to immediate disqualification.\r\n\r\n            Lastly, keep your output crisp: only the prompt, devoid of any extraneous\r\n            content.\r\n\r\n          role: system\r\n        - content: |-\r\n            Use case description: Given an tech startup business, generate a corresponding landing page headline\r\n            Test Cases: Food Delivery, AI Developer tools.\r\n          role: user\r\n        - content: |-\r\n            {tech_startup_business} represent the specific test cases.\r\n          role: user\r\n      variables:\r\n        - tech_startup_business\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"custom-variation-generator-subclass-guide-generate_variations",children:["Custom Variation Generator Subclass Guide: ",(0,r.jsx)(n.code,{children:"generate_variations"})]}),"\n",(0,r.jsxs)(n.p,{children:["This guide explains how to create a custom variation generator subclass based on the ",(0,r.jsx)(n.code,{children:"BaseVariationGenerator"})," for experimental variations."]}),"\n",(0,r.jsx)(n.h3,{id:"understand-the-base",children:"Understand the Base"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"BaseVariationGenerator"})," provides foundational methods and attributes for all variation generators. Subclasses should implement the ",(0,r.jsx)(n.code,{children:"generate_variations"})," method to define the logic for producing variations."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h6,{id:"example-simplevariationgenerator",children:"Example: SimpleVariationGenerator"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Let's design a generator that simply returns variations based on the configurations provided."}),"\n",(0,r.jsx)(n.h3,{id:"define-the-configuration-class",children:"Define the Configuration Class"}),"\n",(0,r.jsx)(n.p,{children:"Firstly, you'll need a configuration class specific to your generator:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Python",children:"from dataclasses import dataclass\r\nfrom yival.schemas.varation_generator_configs import BaseVariationGeneratorConfig\r\n\r\n@dataclass\r\nclass SimpleVariationGeneratorConfig(BaseVariationGeneratorConfig):\r\n    variations: Optional[List[str]] = None  # List of variations to generate\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This configuration class inherits from ",(0,r.jsx)(n.code,{children:"BaseVariationGeneratorConfig"})," and has an additional attribute, ",(0,r.jsx)(n.code,{children:"variations"}),", which is a list of variation strings."]}),"\n",(0,r.jsx)(n.h3,{id:"implement-the-variation-generator",children:"Implement the Variation Generator"}),"\n",(0,r.jsx)(n.p,{children:"Now, let's create the custom variation generator:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Python",children:'from typing import Iterator, List\r\n\r\nfrom yival.schemas.experiment_config import WrapperVariation\r\nfrom yival.variation_generators.base_variation_generator import BaseVariationGenerator\r\n\r\nclass SimpleVariationGenerator(BaseVariationGenerator):\r\n\r\n    def __init__(self, config: SimpleVariationGeneratorConfig):\r\n        super().__init__(config)\r\n        self.config = config\r\n\r\n    def generate_variations(self) -> Iterator[List[WrapperVariation]]:\r\n        variations = [WrapperVariation(value_type="str", value=var) for var in self.config.variations]\r\n        yield variations\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Here, the ",(0,r.jsx)(n.code,{children:"generate_variations"})," method simply converts the list of variation strings from the configuration into a list of ",(0,r.jsx)(n.code,{children:"WrapperVariation"})," objects and yields it."]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h6,{id:"using-the-custom-variation-generator-in-configuration",children:"Using the Custom Variation Generator in Configuration"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In your configuration (YAML), you can now specify the use of this variation generator:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-YAML",children:"custom_variation_generators:\r\n  simple_variation_generator:\r\n    class: /path/to/simple_variation_generator.SimpleVariationGenerator\r\n    config_cls: /path/to/simple_variation_generator_config.SimpleVariationGeneratorConfig\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plaintext",children:"variations:\r\n  - name: task\r\n    generator_name: simple_variation_generator\r\n    generator_config:\r\n      variations:\r\n        - abc\r\n        - def\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This configuration will use the ",(0,r.jsx)(n.code,{children:"SimpleVariationGenerator"}),' and produce the variations "variation1" and "variation2".']})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>o});var r=i(7294);const t={},a=r.createContext(t);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);