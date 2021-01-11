/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import * as React from "react";
import "@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.css";
import "common/samples-common.scss";
import SampleApp from "common/SampleApp";
import LensUI from "./LensUI";
import { IModelApp } from "@bentley/imodeljs-frontend";

export default class LensApp implements SampleApp {
  public static async setup(iModelName: string, iModelSelector: React.ReactNode) {
    return <LensUI iModelName={iModelName} iModelSelector={iModelSelector} />;
  }

  public addScreenSpaceEffect() {
    // IModelApp.renderSystem.create
  }
}
