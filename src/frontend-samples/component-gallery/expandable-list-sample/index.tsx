/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import * as React from "react";
import "@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.css";
import { SampleSpec } from "../../../Components/SampleShowcase/SampleShowcase";
import { GithubLink } from "../../../Components/GithubLink";
import "../../../common/samples-common.scss";

import "../CommonComponentTools/index.scss";
import {ComponentContainer, ComponentExampleProps} from "../CommonComponentTools/ComponentContainer";

import { SampleIModels } from "../../../Components/IModelSelector/IModelSelector";
import { ExpandableList, ExpandableBlock } from "@bentley/ui-core"
import { SampleExpandableBlock } from "./SampleExpandableBlock";



export function getExpandableListSpec(): SampleSpec {
  return ({
    name: "expandable-list-sample",
    label: "ExpandableList",
    image: "viewport-only-thumbnail.png",
    setup: ExpandableListList.setup ,
  });
}


export const createComponentExample = (title: string, description: string | undefined, content: React.ReactNode): ComponentExampleProps => {
    return { title, description, content };
};



export class ExpandableListList extends React.Component<{}> {

    public static getExpandableListData(): ComponentExampleProps[] {
        return [
            createComponentExample("ExpandableList", "ExpandableList with one ExpandableBlock",
              <ExpandableList className="uicore-full-width">
                <SampleExpandableBlock title="Test" isExpanded={true} onClick={() => { }}>
                  Hello World!
                </SampleExpandableBlock>
              </ExpandableList>),
            createComponentExample("ExpandableList w/ singleExpandOnly", "ExpandableList with singleExpandOnly prop",
              <ExpandableList className="uicore-full-width" singleExpandOnly={true} defaultActiveBlock={0}>
                <ExpandableBlock title="Test1" isExpanded={false} onClick={() => { }}>
                  Hello World 1
                </ExpandableBlock>
                <ExpandableBlock title="Test2" isExpanded={false} onClick={() => { }}>
                  Hello World 2
                </ExpandableBlock>
              </ExpandableList>),
          ]
    }

    public static async setup() {
        return <ExpandableListList></ExpandableListList>
    }

    public render() {
        return (
            <>
            <div className="sample-ui">
                <div>
                <span>Different Styles of Buttons</span>
                <GithubLink linkTarget="https://github.com/imodeljs/imodeljs-samples/tree/master/frontend-samples/viewer-only-sample" />
                    <ComponentContainer data = {ExpandableListList.getExpandableListData()}></ComponentContainer>
                </div>
            </div>
            </>
        );
    }
  
}