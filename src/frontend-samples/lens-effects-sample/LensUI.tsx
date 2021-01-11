/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import * as React from "react";
import { ReloadableViewport } from "Components/Viewport/ReloadableViewport";
import "common/samples-common.scss";
import { ControlPane } from "Components/ControlPane/ControlPane";
import { IModelApp, IModelConnection, ScreenViewport, Viewport } from "@bentley/imodeljs-frontend";
import { Select } from "@bentley/ui-core";

function mapOptions(o: {}): {} {
  const keys = Object.keys(o).filter((key: any) => isNaN(key));
  return Object.assign({}, keys);
}

enum LensEffect {
  None = -1,
  Vignette = 0,
  ChromaticAberration = 1,
}

export interface LensSampleState {
  effect: LensEffect;

}
export interface LensSampleProps {
  iModelName: string;
  iModelSelector: React.ReactNode;
}

export default class LensUI extends React.Component<LensSampleProps, LensSampleState> {

  constructor(props: LensSampleProps) {
    super(props);
    this.state = {
      effect: 0,
    };
  }

  public componentDidUpdate(prevProps: LensSampleProps, preState: LensSampleState) {

  }

  public getControls(): React.ReactChild {
    const options = mapOptions(LensEffect);
    return <>
      <Select value={this.state.effect} options={options} onChange={this.onEffectChange}/>
    </>;
  }

  public readonly onEffectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const effect: LensEffect = Number.parseInt(event.target.value, 10);

    this.setState({effect});
  }

  /** This method is called when the iModel is loaded by the react component */
  private readonly _onIModelReady = (_iModel: IModelConnection) => {
    IModelApp.viewManager.onViewOpen.addOnce((vp: ScreenViewport) => {
      ThematicDisplayUI.init(vp);
      this.updateState();
    });
  }

  /** The sample's render method */
  public render() {
    return (
      <>
        { /* Display the instructions and iModelSelector for the sample on a control pane */}
        <ControlPane instructions="Use the drop down to see different lens effects." iModelSelector={this.props.iModelSelector} controls={this.getControls()}/>
        { /* Viewport to display the iModel */}
        <ReloadableViewport iModelName={this.props.iModelName} />
      </>
    );
  }
}
