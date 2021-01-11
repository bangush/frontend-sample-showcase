/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import { SampleSpec } from "../../Components/SampleShowcase/SampleShowcase";
import LensApp from "./LensApp";

export function getLensEffectSpec(): SampleSpec {
  return ({
    name: "camera-lens-sample",
    label: "lens-effects",
    image: "viewport-only-thumbnail.png",
    readme: { name: "readme.md", import: import("!!raw-loader!./readme.md") },
    files: [
      { name: "LensApp.tsx", import: import("!!raw-loader!./LensApp"), entry: true },
      { name: "LensUI.tsx", import: import("!!raw-loader!./LensUI") },
    ],
    setup: LensApp.setup.bind(LensApp),
  });
}
