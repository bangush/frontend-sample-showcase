/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import { SampleSpec } from "../../Components/SampleShowcase/SampleShowcase";
import { MarkerPinsApp } from ".";

export function getMarkerPinSpec(): SampleSpec {
  return ({
    name: "marker-pin-sample",
    label: "Marker Pins",
    image: "marker-pin-thumbnail.png",
    files: [
      { name: "MarkerPinSample.tsx", import: import("!!raw-loader!./index") },
      { name: "samples-common.scss", import: import("!!raw-loader!../../common/samples-common.scss") },
      { name: "MarkerPinDecorator.tsx", import: import("!!raw-loader!./MarkerPinDecorator") },
      { name: "PlaceMarkerTool.tsx", import: import("!!raw-loader!./PlaceMarkerTool") },
      { name: "PopupMenu.tsx", import: import("!!raw-loader!./PopupMenu") },
    ],
    setup: MarkerPinsApp.setup,
    teardown: MarkerPinsApp.teardown,
  });
}